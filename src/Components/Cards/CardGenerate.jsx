import Card from "react-bootstrap/Card";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ErrorFallback from "../../Errors/HandleError";
import ButtonNetwork from "../Buttons/ButtonNetwork";

const CardGenerate = ({ quote, icons, styles, ...props }) => {
  const [styleGeneral, styleQuote, styleIcons] = styles;
  const [classIcons, size, variant] = styleIcons;
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card id="quote-box" className={styleGeneral} {...props}>
          <Card.Body>
            <Row>
              <Col xs={1}>
                <hr className="w-25 h-100 mt-0" />
              </Col>
              <Col>
                <Card.Title id="text" className={styleQuote}>
                  {quote}
                </Card.Title>
              </Col>
            </Row>
            <ButtonNetwork
              classGeneral={classIcons}
              content={icons}
              size={size}
              variant={variant}
            />
            <ButtonNetwork
              classGeneral={classIcons}
              content={icons}
              size={size}
              variant={variant}
            />
          </Card.Body>
        </Card>
      </ErrorBoundary>
    </>
  );
};

CardGenerate.propTypes = {
  quote: PropTypes.string.isRequired,
  icons: PropTypes.string.isRequired,
  styles: PropTypes.array,
};

export default CardGenerate;