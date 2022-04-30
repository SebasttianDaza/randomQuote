import PropTypes from "prop-types";
import { BiError } from "react-icons/bi";

import ComponentLoading from "../Spinners/Spinner";
import CardGenerate from "../Cards/CardGenerate";

const RenderConditional = ({ state, colorRandom, renderSucess }) => {
  return (
    <>
      {state.isLoading ? (
        <ComponentLoading variant={colorRandom} content="Loading .." animation="border" />
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
};

export default RenderConditional;
