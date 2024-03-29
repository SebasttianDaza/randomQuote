import { useContext, useCallback } from "react";
import { BiError } from "react-icons/bi";
import { ErrorBoundary } from "react-error-boundary";
import { Container } from "react-bootstrap";
import { ContextQuote, ContextQuoteFetch } from "@context";
import { ErrorFallback } from "@Errors";
import { Loading, CardGenerate } from "@Components";
import { BsTwitter, BsDownload } from "react-icons/bs";

const CardQuote = () => {
  const { isColorRandomSpinner } = useContext(ContextQuote);
  const { isQuoteAuthor } = useContext(ContextQuoteFetch);
  const { isLoading, isError, isSuccess, isData, error } = isQuoteAuthor;

  // Handle success and return some components about data
  const handleSuccess = useCallback((data) => {
    const { results } = data;

    return results.slice(0, 3).map((result) => {
      const { _id, content, author } = result;

      return (
        <CardGenerate
          isText={{ quote: `“${content}”`, author }}
          icons={[<BsTwitter key={_id} />, <BsDownload key={_id} />]}
          styles={["mt-2 mb-2", "primary"]}
          style={{
            maxWidth: "36rem",
            transition: "all 1s ease-in-out",
          }}
          key={_id}
        />
      );
    });
  }, []);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {isLoading ? (
          <Container fluid className="d-flex justify-content-center">
            {/* Render loading if it is loading  */}
            <Loading variant={isColorRandomSpinner} content="Loading .." animation="border" />
          </Container>
        ) : isError ? (
          // Render error if it is error
          <CardGenerate
            isText={`“We've had an error ${error}”`}
            icons={[<BiError key="error1" />, <BiError key="error2" />]}
            styles={["bg-danger", "dark"]}
            style={{ maxWidth: "36rem", width: "60vw" }}
          />
        ) : isSuccess ? (
          // Render success if it is success
          handleSuccess(isData)
        ) : null}
      </ErrorBoundary>
    </>
  );
};

export default CardQuote;
