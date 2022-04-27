import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardGenerate from "./Components/Cards/CardGenerate";
import CardAuthor from "./Components/Cards/CardAuthor";

const App = () => {
  return (
    <Container
      fluid
      className="bg-dark min-vh-100 d-flex flex-column justify-content-around align-items-center "
    >
      <Row>
        <Col>
          <CardGenerate
            quote="“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”"
            icons="Hola"
            styles={["", "fs-4 fst-normal lh-base text-dark", ["mt-4", "md", "primary"]]}
            style={{ maxWidth: "36rem" }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <CardAuthor />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
