import { useEffect, useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { SearchAuthor } from "@Components";
import { getRandomColor } from "@Services";
import { ContextQuote, ContextQuoteFetch } from "@context";
import { CardHome, CardQuote } from "@pages/Components";

const Home = () => {
  const { isQuote, fetchQuote } = useContext(ContextQuoteFetch);

  const { isPainting, isColorRandom, updatePainting, updateColorRandom, updateColorRandomSpinner } =
    useContext(ContextQuote);

  useEffect(() => {
    // Do request
    fetchQuote({
      url: "https://api.quotable.io/random",
      method: "GET",
    });
    // Update color, painting and random color
    updatePainting(false);
    updateColorRandom(getRandomColor(false));
    updateColorRandomSpinner(getRandomColor(true));
  }, [fetchQuote, updatePainting, updateColorRandom, updateColorRandomSpinner]);

  return (
    <>
      <Container
        fluid
        className={`bg-${isColorRandom} min-vh-100 d-flex flex-column justify-content-around align-items-center `}
        style={{ transition: "all 1s ease-in-out" }}
      >
        <Row>
          <Col>
            {/* Render card home with quote text */}
            <CardHome isState={isQuote} isSettings={{ isPainting, isColorRandom }} />
            {/* Render card with author and other events */}
            <CardQuote />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Render search author */}
            <SearchAuthor />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
