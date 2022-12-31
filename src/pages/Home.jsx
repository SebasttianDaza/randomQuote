import { BiError } from "react-icons/bi";
import { useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { BsTwitter, BsDownload } from "react-icons/bs";

import { useFetch } from "@Hooks";
import {
  Loading,
  RenderConditional,
  CardGenerate,
  SearchAuthor,
} from "@Components";
import { getRandomColor } from "@Services";
import { ContextQuote } from '@context';

const Home = ({}) => {
  const [isState, fetchData] = useFetch();
  const [stateQuoteAuthor, fetchQuoteAuthor] = useFetch();

  const {
    isPainting,
    isColorRandom,
    isColorRandomSpinner,
    updatePainting,
    updateColorRandom,
    updateColorRandomSpinner,
  } = useContext(ContextQuote);

  useEffect(() => {
    // Do request
    fetchData({
      url: "https://api.quotable.io/random",
      method: "GET",
    });
    updatePainting(false);
    updateColorRandom(getRandomColor(false));
    updateColorRandomSpinner(getRandomColor(true));
  }, [fetchData, updatePainting, updateColorRandom, updateColorRandomSpinner]);

  const { data } = isState;

  return (
    <>
      <div>
        <Row>
          <Col>
            {isState.isLoading ? (
              <Loading
                variant={isColorRandom}
                content="Loading .."
                animation="border"
              />
            ) : isState.isError ? (
              <CardGenerate
                quote={`“We've had a error, You go back more late ${isState.error.message}r ”`}
                icons={[<BiError key="error1" />, <BiError key="error2" />]}
                styles={[
                  "bg-danger",
                  "fs-4 fst-normal lh-base text-dark",
                  ["mt-4", "md", "dark"],
                ]}
                style={{ maxWidth: "36rem", width: "80vw" }}
              />
            ) : isState.isSuccess ? (
              <CardGenerate
                quote={`“${data.content}”`}
                icons={[
                  <BsTwitter key="twiiter" />,
                  <BsDownload key="download" />,
                ]}
                styles={[
                  `${isPainting ? "mt-3" : ""}`,
                  "fs-4 fst-normal lh-base text-dark",
                  ["mt-4", "md", "primary"],
                ]}
                style={{ maxWidth: "36rem" }}
              />
            ) : null}
            <RenderConditional
              state={stateQuoteAuthor}
              colorRandom={isColorRandomSpinner}
              isShowLoading={true}
              renderSucess={
                isPainting
                  ? stateQuoteAuthor.data.data.map((item, index) => {
                      return (
                        <CardGenerate
                          quote={`“${item.quoteText}”`}
                          icons={[
                            <BsTwitter key={index} />,
                            <BsDownload key={index} />,
                          ]}
                          styles={[
                            "mt-2 mb-2",
                            "fs-4 fst-normal lh-base text-dark",
                            ["mt-4", "md", "primary"],
                          ]}
                          style={{
                            maxWidth: "36rem",
                            transition: "all 1s ease-in-out",
                          }}
                          key={index}
                        />
                      );
                    })
                  : null
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>{/* <SearchAuthor author={"Hello"} /> */}</Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
