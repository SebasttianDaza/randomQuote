import Card from "react-bootstrap/Card";
import { ErrorBoundary } from "react-error-boundary";
import { useRef } from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ErrorFallback from "../../Errors/HandleError";
import ButtonNetwork from "../Buttons/ButtonNetwork";
import generateImage from "../../Function/generateImage";
import { generateTweetOrInstagram } from "../../Function/generateImage";

const CardGenerate = ({ quote, icons, styles, ...props }) => {
  const [styleGeneral, styleQuote, styleIcons] = styles;
  const [classIcons, size, variant] = styleIcons;
  const [firstIcons, thirdIcons] = icons;
  const cardRef = useRef();

  const handleClick = ({ ref, type }) => {
    if (type === "download") {
      generateImage(ref.current);
    }
    if (type === "twitter") {
      generateTweetOrInstagram(ref);
    }
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card id="quote-box" className={styleGeneral} {...props} ref={cardRef}>
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
            <Row>
              <Col xs="2">
                <ButtonNetwork
                  classGeneral={classIcons}
                  content={firstIcons}
                  size={size}
                  variant={variant}
                  event={handleClick}
                  params={[true, quote, "twitter"]}
                />
              </Col>
              <Col xs="2">
                <ButtonNetwork
                  classGeneral={classIcons}
                  content={thirdIcons}
                  size={size}
                  variant={variant}
                  event={handleClick}
                  params={[true, cardRef, "download"]}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </ErrorBoundary>
    </>
  );
};

CardGenerate.propTypes = {
  quote: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  styles: PropTypes.array,
};

export default CardGenerate;
