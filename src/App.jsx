import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@Errors";
import { Home } from "@pages";
import { ContextQuoteProvider, ContextQuoteFetchProvider } from "@context";

const App = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ContextQuoteProvider>
          <ContextQuoteFetchProvider>
            <Home />
          </ContextQuoteFetchProvider>
        </ContextQuoteProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
