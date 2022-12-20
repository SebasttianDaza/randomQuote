import PropTypes from "prop-types";
import { BiError } from "react-icons/bi";
import Container from "react-bootstrap/Container";

import { ComponentLoading, CardGenerate } from "@Components";

const RenderConditional = ({ state, colorRandom, renderSucess, isShowLoading }) => {
  const showLoading = (isShow) => {
    if (isShow) {
      return (
        <Container fluid className="d-flex justify-content-center">
          <ComponentLoading variant={colorRandom} content="Loading .." animation="border" />
        </Container>
      );
    } else {
      return <ComponentLoading variant={colorRandom} content="Loading .." animation="border" />;
    }
  };
  return (
    <>
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