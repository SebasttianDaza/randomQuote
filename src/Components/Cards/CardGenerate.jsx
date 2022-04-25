import Card from "react-bootstrap/Card";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/HandleError";
import ButtonNetwork from "../Buttons/ButtonNetwork";

const CardGenerate = ({ quote, icons }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card id="quote-box">
          <Card.Body>
            <Card.Title id="text">{quote}</Card.Title>
            <ButtonNetwork content={icons} size="lg" variant="primary" />
            <ButtonNetwork content={icons} size="lg" variant="primary" />
          </Card.Body>
        </Card>
      </ErrorBoundary>
    </>
  );
};

CardGenerate.propTypes = {
  quote: PropTypes.string.isRequired,
  icons: PropTypes.string.isRequired,
};

export default CardGenerate;
