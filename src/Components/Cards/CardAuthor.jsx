import { useContext, useCallback } from "react";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { Card, Row, Col } from "react-bootstrap";
import { ErrorFallback } from "@Errors";
import { ButtonNetwork } from "@Components";
import { ContextQuoteFetch, ContextQuote } from "@context";
import { getRandomColor } from "@Services";

const CardAuthor = ({ contentBtn, stylesBtn, contentCard, ...props }) => {
  const { fetchQuote, isQuoteAuthor, fetchQuoteAuthor, setQuoteAuthor } =
    useContext(ContextQuoteFetch);
  const { updatePainting, updateColorRandom, updateColorRandomSpinner } = useContext(ContextQuote);

  const [classBtn, size, variant] = stylesBtn;
  const [title, subtitle] = contentCard;

  const searchQuoteAboutAuthor = useCallback(
    async (author) => {
      // Get more quotes the same author
      await fetchQuoteAuthor({
        url: `https://api.quotable.io/quotes?author=${author}`,
        method: "GET",
      });

      updatePainting(true);
    },
    [fetchQuoteAuthor, updatePainting],
  );

  const nextQuoteRandom = useCallback(() => {
    const { isData } = isQuoteAuthor;

    if (isData) {
      // Reset state quote author
      setQuoteAuthor({
        isLoading: false,
        isSuccess: false,
        isError: false,
        isData: null,
        error: null,
      });
    }

    // Get other quote random
    fetchQuote({
      url: "https://api.quotable.io/random",
      method: "GET",
    });

    // Update color, painting and random color
    updatePainting(false);
    updateColorRandom(getRandomColor(false));
    updateColorRandomSpinner(getRandomColor(true));
  }, [
    fetchQuote,
    updatePainting,
    updateColorRandom,
    updateColorRandomSpinner,
    setQuoteAuthor,
    isQuoteAuthor,
  ]);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card {...props}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title
                  style={{ cursor: "pointer" }}
                  onClick={() => searchQuoteAboutAuthor(title)}
                >
                  {title}
                </Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
              </Col>
              <Col xs="3">
                <ButtonNetwork
                  className={classBtn}
                  content={contentBtn}
                  size={size}
                  variant={variant}
                  event={nextQuoteRandom}
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
};

export default CardAuthor;
