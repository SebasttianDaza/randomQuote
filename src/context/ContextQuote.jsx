import { createContext } from "react";
import { useQuoteRandom } from "@Hooks";

const ContextQuote = createContext({});

export const ContextQuoteProvider = (props) => {
  return (
    <ContextQuote.Provider value={useQuoteRandom()}>
      {props.children}
    </ContextQuote.Provider>
  );
};

export default ContextQuote;