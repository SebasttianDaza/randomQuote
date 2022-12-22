import { useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTwitter, BsFillForwardFill, BsDownload } from "react-icons/bs";

import { useFetch, useQuoteRandom } from "@Hooks";
import { RenderConditional, CardGenerate, CardAuthor } from "@Components";
import { getRandomColor } from "@Services";
import { Home } from "@pages";

const App = () => {
  const [state, fetchData] = useFetch();
  const [stateQuoteAuthor, fetchQuoteAuthor] = useFetch();
  const {
    isPainting,
    isColorRandom,
    isColorRandomSpinner,
    updatePainting,
    updateColorRandom,
    updateColorRandomSpinner,
  } = useQuoteRandom();

  useEffect(() => {
    fetchData({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/random",
      method: "GET",
    });
    updatePainting(false);
    updateColorRandom(getRandomColor(color));
    updateColorRandomSpinner(getRandomColor(colorSecond));
  }, [fetchData, updatePainting, updateColorRandom, updateColorRandomSpinner]);

  const nextQuoteRandom = useCallback(() => {
    fetchData({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/random",
      method: "GET",
    });

    updatePainting(false);
    updateColorRandom(getRandomColor(color));
    updateColorRandomSpinner(getRandomColor(colorSecond));
  }, [fetchData, updatePainting, updateColorRandom, updateColorRandomSpinner]);

  const searchQuoteAboutAuthor = useCallback(
    async (author) => {
      await fetchQuoteAuthor({
        url: `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`,
        method: "GET",
      });
      updatePainting(true);
    },
    [fetchQuoteAuthor, updatePainting]
  );

  const { data } = state;

  return (
    <Container
      fluid
      className={`bg-${isColorRandom} min-vh-100 d-flex flex-column justify-content-around align-items-center `}
      style={{ transition: "all 1s ease-in-out" }}
    >
      <Row>
        <Col>
          <Home
            data={data}
            colorRandom={isColorRandomSpinner}
            state={state}
            isPainting={isPainting}
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
        <Col>
          <RenderConditional
            state={state}
            colorRandom={isColorRandomSpinner}
            isShowLoading={false}
            renderSucess={
              state.isSuccess ? (
                <CardAuthor
                  contentBtn={<BsFillForwardFill />}
                  stylesBtn={["", "md", "primary"]}
                  contentCard={[
                    data.data[0].quoteAuthor,
                    data.data[0].quoteGenre,
                  ]}
                  style={{
                    maxHeight: "10rem",
                    maxWidth: "35rem",
                    minWidth: "20rem",
                  }}
                  event={nextQuoteRandom}
                  eventCard={searchQuoteAboutAuthor}
                  className={isPainting ? "mb-3" : ""}
                />
              ) : null
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

const color = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const colorSecond = [
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

export default App;
