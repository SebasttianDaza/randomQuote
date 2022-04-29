import Card from "react-bootstrap/Card";
import { ErrorBoundary } from "react-error-boundary";
import { useRef } from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ErrorFallback from "../../Errors/HandleError";
import ButtonNetwork from "../Buttons/ButtonNetwork";

const CardGenerate = ({ quote, icons, styles, eventBtn, isShow, ...props }) => {
  const [styleGeneral, styleQuote, styleIcons] = styles;
  const [classIcons, size, variant] = styleIcons;
  const [firstIcons, secondIcons] = icons;
  const cardRef = useRef(null);

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
                  event={eventBtn}
                  params={
                    isShow
                      ? {
                          ref: cardRef,
                          type: "twitter",
                        }
                      : null
                  }
                />
              </Col>
              <Col xs="2">
                <ButtonNetwork
                  classGeneral={classIcons}
                  content={secondIcons}
                  size={size}
                  variant={variant}
                  event={eventBtn}
                  params={
                    isShow
                      ? {
                          ref: cardRef,
                          type: "instagram",
                        }
                      : null
                  }
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
  eventBtn: PropTypes.func,
  isShow: PropTypes.bool,
};

export default CardGenerate;
