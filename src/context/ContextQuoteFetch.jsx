import { createContext } from "react";
import { useFetch } from "@Hooks";
import { PropTypes } from "prop-types";

const ContextQuoteFetch = createContext({});

export const ContextQuoteFetchProvider = ({ children }) => {
  const [isQuote, fetchQuote, setQuote] = useFetch();
  const [isQuoteAuthor, fetchQuoteAuthor, setQuoteAuthor] = useFetch();

  return (
    <ContextQuoteFetch.Provider
      value={{
        isQuote,
        fetchQuote,
        setQuote,
        isQuoteAuthor,
        fetchQuoteAuthor,
        setQuoteAuthor,
      }}
    >
      {children}
    </ContextQuoteFetch.Provider>
  );
};

ContextQuoteFetchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextQuoteFetch;
