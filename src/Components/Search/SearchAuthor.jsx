import { useContext } from "react";
import { BsFillForwardFill } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { ErrorBoundary } from "react-error-boundary";
import { CardAuthor, Loading, CardGenerate } from "@Components";
import { ContextQuote, ContextQuoteFetch } from "@context";
import { ErrorFallback } from "@Errors";

const SearchAuthor = () => {
  // Get context and other context
  const { isQuote } = useContext(ContextQuoteFetch);
  const { isPainting, isColorRandom } = useContext(ContextQuote);
  // Get state from context
  const { isLoading, isError, isSuccess, isData } = isQuote;

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {isLoading ? (
          <Loading variant={isColorRandom} content="Loading .." animation="border" />
        ) : isError ? (
          <CardGenerate
            isText="`““We've had a error.”`"
            icons={[<BiError key="error1" />, <BiError key="error2" />]}
            styles={["bg-danger", "dark"]}
            style={{ maxWidth: "36rem", width: "60vw" }}
          />
        ) : isSuccess ? (
          <CardAuthor
            icon={<BsFillForwardFill />}
            contentCard={[isData.author, isData.authorSlug]}
            style={{
              maxHeight: "10rem",
              maxWidth: "35rem",
              minWidth: "20rem",
            }}
            className={isPainting ? "mb-3" : ""}
          />
        ) : null}
      </ErrorBoundary>
    </>
  );
};

export default SearchAuthor;
