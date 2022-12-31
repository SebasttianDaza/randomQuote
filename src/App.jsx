import { Container } from "react-bootstrap";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@Errors";
import { Home } from "@pages";
import { ContextQuoteProvider } from '@context';

const App = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Container
          fluid
          className={`bg min-vh-100 d-flex flex-column justify-content-around align-items-center `}
          style={{ transition: "all 1s ease-in-out" }}
        >
          <ContextQuoteProvider>
            <Home />
          </ContextQuoteProvider>
        </Container>
      </ErrorBoundary>
    </>
  );
};

export default App;
