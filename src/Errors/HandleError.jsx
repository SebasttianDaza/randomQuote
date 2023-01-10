import PropTypes from "prop-types";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const { message } = error;

  return (
    <div role="alert">
      <p className="text-danger">Something went wrong:</p>
      <pre className="text-white">{message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
