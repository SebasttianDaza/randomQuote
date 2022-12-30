import { createContext } from "react";
import { useQuoteRandom } from '@Hooks';

const ContextQuote = createContext();

export const ContextQuoteProvider = ({ children }) => {
  const state = useQuoteRandom();
  return (
    <ContextQuote.Provider value={state}>
      {children}
    </ContextQuote.Provider>
  );
};

export default ContextQuote;
