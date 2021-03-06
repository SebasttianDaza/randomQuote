import { BsTwitter, BsDownload } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import PropTypes from "prop-types";

import ComponentLoading from "./Spinners/Spinner";
import CardGenerate from "./Cards/CardGenerate";

const Home = ({ data, colorRandom, state, isPainting }) => {
  return (
    <>
      {state.isLoading ? (
        <ComponentLoading variant={colorRandom} content="Loading .." animation="border" />
      ) : state.isError ? (
        <CardGenerate
          quote={`âWe've had a error, You go back more late ${state.error.message}r â`}
          icons={[<BiError key="error1" />, <BiError key="error2" />]}
          styles={["bg-danger", "fs-4 fst-normal lh-base text-dark", ["mt-4", "md", "dark"]]}
          style={{ maxWidth: "36rem", width: "80vw" }}
        />
      ) : state.isSuccess ? (
        <CardGenerate
          quote={`â${data.data[0].quoteText}â`}
          icons={[<BsTwitter key="twiiter" />, <BsDownload key="download" />]}
          styles={[
            `${isPainting ? "mt-3" : ""}`,
            "fs-4 fst-normal lh-base text-dark",
            ["mt-4", "md", "primary"],
          ]}
          style={{ maxWidth: "36rem" }}
        />
      ) : null}
    </>
  );
};

Home.propTypes = {
  data: PropTypes.object,
  colorRandom: PropTypes.string,
  state: PropTypes.object,
  isPainting: PropTypes.bool,
};

export default Home;
