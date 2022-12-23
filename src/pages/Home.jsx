import { BsTwitter, BsDownload } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import PropTypes from "prop-types";

import { Loading, CardGenerate } from "@Components";

const Home = ({ isData, colorRandom, isState, isPainting }) => {
  return (
    <>
      {isState.isLoading ? (
        <Loading
          variant={colorRandom}
          content="Loading .."
          animation="border"
        />
      ) : isState.isError ? (
        <CardGenerate
          quote={`“We've had a error, You go back more late ${isState.error.message}r ”`}
          icons={[<BiError key="error1" />, <BiError key="error2" />]}
          styles={[
            "bg-danger",
            "fs-4 fst-normal lh-base text-dark",
            ["mt-4", "md", "dark"],
          ]}
          style={{ maxWidth: "36rem", width: "80vw" }}
        />
      ) : isState.isSuccess ? (
        <CardGenerate
          quote={`“${isData.content}”`}
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
  isData: PropTypes.object,
  colorRandom: PropTypes.string,
  isState: PropTypes.object,
  isPainting: PropTypes.bool,
};

export default Home;
