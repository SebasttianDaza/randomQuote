import Button from "react-bootstrap/Button";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/HandleError";

const ButtonNetwork = ({ content, size, variant, classGeneral }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Button variant={variant} size={size} className={classGeneral}>
          {content}
        </Button>
      </ErrorBoundary>
    </>
  );
};

ButtonNetwork.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  classGeneral: PropTypes.string,
};

export default ButtonNetwork;
