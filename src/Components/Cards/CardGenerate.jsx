import { useRef, useCallback } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { ErrorFallback } from "@Errors";
import { ButtonNetwork } from "@Components";
import { useHtmlImage } from "@Hooks";

const CardGenerate = ({ isText, icons, styles, ...props }) => {
  const { quote, author } = isText;
  const { downloadPng } = useHtmlImage();
  const cardRef = useRef();

  const [styleGeneral, variant] = styles;
  const [firstIcons, thirdIcons] = icons;

  const handleClick = useCallback(
    (type) => {
      if (type === "download") {
        downloadPng(author.replace(/\s+/g, ""), cardRef.current);
      }
      if (type === "twitter") {
        // Import that functionality
        import("@Services").then(({ getTweet }) => {
          getTweet(`${quote} - ${author}`);
        });
      }
    },
    [downloadPng, author, quote],
  );

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card id="quote-box" className={styleGeneral} {...props}>
          <Card.Body ref={cardRef}>
            <Row>
              <Col xs={1}>
                <hr className="w-25 h-100 mt-0" />
              </Col>
              <Col>
                <Card.Title id="text" className="fs-4 fst-normal lh-base text-dark">
                  {quote}
                </Card.Title>
              </Col>
            </Row>
            <Row>
              <Col xs="2">
                <ButtonNetwork
                  content={firstIcons}
                  event={handleClick}
                  name="twitter"
                  className="mt-4"
                  size="md"
                  variant={variant}
                />
              </Col>
              <Col xs="2">
                <ButtonNetwork
                  content={thirdIcons}
                  event={handleClick}
                  name="download"
                  className="mt-4"
                  size="md"
                  variant={variant}
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
  isText: PropTypes.object.isRequired,
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  styles: PropTypes.array,
};

export default CardGenerate;
