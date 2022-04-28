import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsTwitter, BsFillForwardFill, BsInstagram } from "react-icons/bs";
import { useEffect } from "react";

import useFetch from "./Hooks/useFetch";
import useStateBasic from "./Hooks/useStateBasic";
import ComponentLoading from "./Components/Spinners/Spinner";
import CardGenerate from "./Components/Cards/CardGenerate";
import CardAuthor from "./Components/Cards/CardAuthor";

const App = () => {
  const [state, fetchData] = useFetch();
  const [stateQuoteAuthor, fetchQuoteAuthor] = useFetch();

  useEffect(() => {
    fetchData({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/random",
      method: "GET",
    });
  }, [fetchData]);

  const nextQuoteRandom = () => {
    fetchData({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/random",
      method: "GET",
    });
  };

  const searchQuoteAboutAuthor = (author) => {
    const authorClean = author.replace(/\s/g, "").toLowerCase();
    fetchQuoteAuthor({
      url: `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`,
      method: "GET",
    });
  };

  const { data } = state;
  const { dataQuoteAuthor } = stateQuoteAuthor;
  console.log(stateQuoteAuthor);

  return (
    <Container
      fluid
      className="bg-dark min-vh-100 d-flex flex-column justify-content-around align-items-center "
    >
      <Row>
        <Col>
          {state.isLoading ? (
            <ComponentLoading variant="primary" content="Loading .." animation="border" />
          ) : state.isError ? (
            "Error"
          ) : state.isSuccess ? (
            <CardGenerate
              quote={`“${data.data[0].quoteText}”`}
              icons={<BsTwitter />}
              icon={<BsInstagram />}
              styles={["", "fs-4 fst-normal lh-base text-dark", ["mt-4", "md", "primary"]]}
              style={{ maxWidth: "36rem" }}
            />
          ) : null}
        </Col>
      </Row>
      <Row>
        <Col>
          {state.isLoading ? (
            <ComponentLoading variant="primary" content="Loading .." animation="border" />
          ) : state.isError ? (
            "Error"
          ) : state.isSuccess ? (
            <CardAuthor
              contentBtn={<BsFillForwardFill />}
              stylesBtn={["", "md", "primary"]}
              contentCard={[data.data[0].quoteAuthor, data.data[0].quoteGenre]}
              style={{ maxHeight: "10rem", maxWidth: "35rem", minWidth: "20rem" }}
              event={nextQuoteRandom}
              eventCard={searchQuoteAboutAuthor}
            />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
