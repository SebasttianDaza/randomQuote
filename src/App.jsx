import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardGenerate from "./Components/Cards/CardGenerate";

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardGenerate
              quote="Lorem haoasdhsjadhaskdhasd isdhsahdoasdhas iolsduas"
              icons="Hola"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
