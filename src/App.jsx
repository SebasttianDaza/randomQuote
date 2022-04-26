import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardGenerate from "./Components/Cards/CardGenerate";

const App = () => {
  return (
    <div className="vh-100 d-flex bg-dark">
      <Container fluid="sm" className="h-auto w-auto">
        <Row className="h-100 w-auto">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <CardGenerate
              quote="“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”"
              icons="Hola"
              styles={["", "fs-4 fst-normal lh-base text-dark", ["mt-4", "md", "primary"]]}
              style={{ maxWidth: "33rem" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
