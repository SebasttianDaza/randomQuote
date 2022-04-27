import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";

const ComponentLoading = ({ variant, content, animation }) => {
  return (
    <Spinner animation={animation} role="status" variant={variant}>
      <span className="visually-hidden">{content}</span>
    </Spinner>
  );
};

ComponentLoading.propTypes = {
  variant: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

export default ComponentLoading;
