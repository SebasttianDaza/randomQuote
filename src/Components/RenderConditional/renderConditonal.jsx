import PropTypes from "prop-types";
import { BiError } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import { ErrorBoundary } from "react-error-boundary";
import { Loading, CardGenerate } from "@Components";
import { ErrorFallback } from "@Errors";
import { useCallback } from 'react';

const RenderConditional = ({ state, colorRandom, renderSucess, isShowLoading }) => {

  const showLoading = useCallback((isShow) => {
    if (isShow) {
      return (
        <Container fluid className="d-flex justify-content-center">
          <Loading variant={colorRandom} content="Loading .." animation="border" />
        </Container>
      );
    } else {
      return <Loading variant={colorRandom} content="Loading .." animation="border" />;
    }
  }, [colorRandom]);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {state.isLoading ? (
        showLoading(isShowLoading)
      ) : state.isError ? (
        <CardGenerate
          quote={`““We've had a error.”`}
          icons={[<BiError key="error1" />, <BiError key="error2" />]}
          styles={["bg-danger", "fs-4 fst-normal lh-base text-dark", ["mt-4", "md", "dark"]]}
          style={{ maxWidth: "36rem", width: "60vw" }}
        />
      ) : state.isSuccess ? (
        renderSucess
      ) : null}
      </ErrorBoundary>
    </>
  );
};

RenderConditional.propTypes = {
  state: PropTypes.object.isRequired,
  colorRandom: PropTypes.string.isRequired,
  renderSucess: PropTypes.object,
  isShowLoading: PropTypes.bool,
};

export default RenderConditional;
