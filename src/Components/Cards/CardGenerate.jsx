import { useRef, useCallback } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Card, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { ErrorFallback } from "@Errors";
import { ButtonNetwork } from "@Components";
import { getImage, getTweet } from "@Services";

const CardGenerate = ({ quote, icons, styles, ...props }) => {
  const [styleGeneral, styleQuote, styleIcons] = styles;
  const [classIcons, size, variant] = styleIcons;
  const [firstIcons, thirdIcons] = icons;
  const cardRef = useRef();

  const handleClick = useCallback(({ ref, type }) => {
    if (type === "download") getImage(ref.current);
    if (type === "twitter") getTweet(ref);
  }, []);

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
                  className={classIcons}
                  content={firstIcons}
                  size={size}
                  variant={variant}
                  event={handleClick}
                  params={[true, quote, "twitter"]}
                />
              </Col>
              <Col xs="2">
                <ButtonNetwork
                  className={classIcons}
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
