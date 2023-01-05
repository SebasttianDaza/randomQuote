import { useCallback, useContext } from "react";
import { BsFillForwardFill } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { ErrorBoundary } from "react-error-boundary";
import { CardAuthor, Loading, CardGenerate } from "@Components";
import { getRandomColor } from "@Services";
import { ContextQuote, ContextQuoteFetch } from "@context";
import { ErrorFallback } from "@Errors";

const SearchAuthor = () => {
  const { isQuote, fetchQuote, fetchQuoteAuthor } = useContext(ContextQuoteFetch);

  const { isPainting, isColorRandom, updatePainting, updateColorRandom, updateColorRandomSpinner } =
    useContext(ContextQuote);

  const nextQuoteRandom = useCallback(() => {
    fetchQuote({
      url: "https://api.quotable.io/random",
      method: "GET",
    });

    updatePainting(false);
    updateColorRandom(getRandomColor(false));
    updateColorRandomSpinner(getRandomColor(true));
  }, [fetchQuote, updatePainting, updateColorRandom, updateColorRandomSpinner]);

  const searchQuoteAboutAuthor = useCallback(
    async (author) => {
      await fetchQuoteAuthor({
        url: `https://api.quotable.io/quotes?author=${author}`,
        method: "GET",
      });

      updatePainting(true);
    },
    [fetchQuoteAuthor, updatePainting],
  );

  const { isLoading, isError, isSuccess, isData } = isQuote;

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {isLoading ? (
          <Loading variant={isColorRandom} content="Loading .." animation="border" />
        ) : isError ? (
          <CardGenerate
            quote={`““We've had a error.”`}
            icons={[<BiError key="error1" />, <BiError key="error2" />]}
            styles={["bg-danger", "fs-4 fst-normal lh-base text-dark", ["mt-4", "md", "dark"]]}
            style={{ maxWidth: "36rem", width: "60vw" }}
          />
        ) : isSuccess ? (
          <CardAuthor
            contentBtn={<BsFillForwardFill />}
            stylesBtn={["", "md", "primary"]}
            contentCard={[isData.author, isData.authorSlug]}
            style={{
              maxHeight: "10rem",
              maxWidth: "35rem",
              minWidth: "20rem",
            }}
            event={nextQuoteRandom}
            eventCard={searchQuoteAboutAuthor}
            className={isPainting ? "mb-3" : ""}
          />
        ) : null}
      </ErrorBoundary>
    </>
  );
};

export default SearchAuthor;
