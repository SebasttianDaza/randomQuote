import Card from "react-bootstrap/Card";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ErrorFallback from "../../Errors/HandleError";
import ButtonNetwork from "../Buttons/ButtonNetwork";

const CardAuthor = ({}) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card style={{ maxHeight: "10rem", maxWidth: "25rem" }}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>Bill Gates</Card.Title>
                <Card.Subtitle>Microsoft</Card.Subtitle>
              </Col>
              <Col>
                <ButtonNetwork classGeneral="" content="Hola" size="md" variant="primary" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </ErrorBoundary>
    </>
  );
};

export default CardAuthor;
