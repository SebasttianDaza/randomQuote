import { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTwitter, BsDownload } from "react-icons/bs";

import { useFetch } from "@Hooks";
import { RenderConditional, CardGenerate, SearchAuthor } from "@Components";
import { getRandomColor } from "@Services";
import { ContextQuote } from "@context";
import { CardHome } from "@pages/Components";

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

  return (
    <>
      <Container
        fluid
        className={`bg-${isColorRandom} min-vh-100 d-flex flex-column justify-content-around align-items-center `}
        style={{ transition: "all 1s ease-in-out" }}
      >
        <Row>
          <Col>
            <CardHome
              isState={isState}
              isSettings={{ isPainting, isColorRandom }}
            />
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
      </Container>
    </>
  );
};

export default Home;
