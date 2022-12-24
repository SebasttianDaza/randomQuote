import { createContext } from "react";

const ContextQuoteRandom = createContext();

export const ContextQuoteRandomProvider = ({ children, value }) => {
  return (
    <ContextQuoteRandom.Provider value={value}>
      {children}
    </ContextQuoteRandom.Provider>
  );
}

export default ContextQuoteRandom;