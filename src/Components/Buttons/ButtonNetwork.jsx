import { memo } from "react";
import Button from "react-bootstrap/Button";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { ErrorFallback } from "@Errors";

const ButtonNetwork = ({ content, event, params, ...args }) => {
  const [isShow, cardRef, network] = params;
  const paramsFunction = isShow ? { ref: cardRef, type: network } : null;

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Button type="button" {...args} onClick={() => event(paramsFunction)} active>
          {content}
        </Button>
      </ErrorBoundary>
    </>
  );
};

ButtonNetwork.propTypes = {
  content: PropTypes.object.isRequired,
  event: PropTypes.func,
  params: PropTypes.arrayOf(PropTypes.any),
};

export default memo(ButtonNetwork);
