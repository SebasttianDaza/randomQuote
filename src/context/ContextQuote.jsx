import { createContext } from "react";
import { useQuoteRandom } from "@Hooks";
import { PropTypes } from "prop-types";

const ContextQuote = createContext({});

export const ContextQuoteProvider = ({ children }) => {
  return <ContextQuote.Provider value={useQuoteRandom()}>{children}</ContextQuote.Provider>;
};

ContextQuoteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextQuote;
