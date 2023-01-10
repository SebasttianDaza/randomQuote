import { memo } from "react";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";

const Loading = ({ variant, content, animation }) => {
  return (
    <Spinner animation={animation} role="status" variant={variant}>
      <span className="visually-hidden">{content}</span>
    </Spinner>
  );
};

Loading.propTypes = {
  variant: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

export default memo(Loading);
