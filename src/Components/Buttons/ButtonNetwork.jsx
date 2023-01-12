import { memo } from "react";
import Button from "react-bootstrap/Button";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { ErrorFallback } from "@Errors";

const ButtonNetwork = ({ content, event, name, ...args }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Button type="button" {...args} onClick={() => event(name)} active>
          {content}
        </Button>
      </ErrorBoundary>
    </>
  );
};

ButtonNetwork.propTypes = {
  content: PropTypes.object.isRequired,
  event: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default memo(ButtonNetwork);
