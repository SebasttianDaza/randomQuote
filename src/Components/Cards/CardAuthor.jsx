import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { Card, Row, Col } from "react-bootstrap";
import { ErrorFallback } from "@Errors";
import { ButtonNetwork } from "@Components";

const CardAuthor = ({ contentBtn, stylesBtn, contentCard, event, eventCard, ...props }) => {
  const [classBtn, size, variant] = stylesBtn;
  const [title, subtitle] = contentCard;

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card {...props}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title style={{ cursor: "pointer" }} onClick={() => eventCard(title)}>
                  {title}
                </Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
              </Col>
              <Col xs="3">
                <ButtonNetwork
                  classGeneral={classBtn}
                  content={contentBtn}
                  size={size}
                  variant={variant}
                  event={event}
                  params={[false, null, null]}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </ErrorBoundary>
    </>
  );
};

CardAuthor.propTypes = {
  contentBtn: PropTypes.object.isRequired,
  stylesBtn: PropTypes.arrayOf(PropTypes.string).isRequired,
  contentCard: PropTypes.arrayOf(PropTypes.string).isRequired,
  event: PropTypes.func,
  eventCard: PropTypes.func,
};

export default CardAuthor;
