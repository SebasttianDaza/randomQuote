import Button from "react-bootstrap/Button";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/HandleError";

const ButtonNetwork = ({ content, size, variant, classGeneral, event }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Button
          variant={variant}
          size={size}
          className={classGeneral}
          onClick={() => event()}
          active
        >
          {content}
        </Button>
      </ErrorBoundary>
    </>
  );
};

ButtonNetwork.propTypes = {
  content: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  classGeneral: PropTypes.string,
  event: PropTypes.func,
};

export default ButtonNetwork;
