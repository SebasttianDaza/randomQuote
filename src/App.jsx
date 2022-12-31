import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@Errors";
import { Home } from "@pages";
import { ContextQuoteProvider } from "@context";

const App = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ContextQuoteProvider>
          <Home />
        </ContextQuoteProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
