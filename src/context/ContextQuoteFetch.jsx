import { createContext } from "react";
import { useFetch } from "@Hooks";
import { PropTypes } from "prop-types";

const ContextQuoteFetch = createContext({});

export const ContextQuoteFetchProvider = ({ children }) => {
  const [isQuote, fetchQuote] = useFetch();
  const [isQuoteAuthor, fetchQuoteAuthor] = useFetch();

  return (
    <ContextQuoteFetch.Provider
      value={{
        isQuote,
        fetchQuote,
        isQuoteAuthor,
        fetchQuoteAuthor,
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
