import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsTwitter, BsFillForwardFill, BsInstagram } from "react-icons/bs";
import { useEffect } from "react";

import useFetch from "./Hooks/useFetch";
import ComponentLoading from "./Components/Spinners/Spinner";
import CardGenerate from "./Components/Cards/CardGenerate";
import CardAuthor from "./Components/Cards/CardAuthor";

const App = () => {
  const [state, fetchData] = useFetch();

  useEffect(() => {
    fetchData({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/random",
      method: "GET",
    });
  }, [fetchData]);

  console.log(state);

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
              quote="“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”"
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
              contentCard={["Bill Gates", "Microsoft"]}
              style={{ maxHeight: "10rem", maxWidth: "35rem", minWidth: "20rem" }}
            />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
