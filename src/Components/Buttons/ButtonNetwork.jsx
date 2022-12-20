import Button from "react-bootstrap/Button";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import { ErrorFallback } from "@Errors";

const ButtonNetwork = ({
  content,
  size,
  variant,
  classGeneral,
  event,
  params,
}) => {
  const [isShow, cardRef, network] = params;
  const paramsFunction = isShow ? { ref: cardRef, type: network } : null;

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Button
          variant={variant}
          size={size}
          className={classGeneral}
          onClick={() => event(paramsFunction)}
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
  params: PropTypes.arrayOf(PropTypes.any),
};

export default ButtonNetwork;
