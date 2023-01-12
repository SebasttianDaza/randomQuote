import { BiError } from "react-icons/bi";
import { Loading, CardGenerate } from "@Components";
import { BsTwitter, BsDownload } from "react-icons/bs";
import { PropTypes } from "prop-types";

const CardHome = ({ isState, isSettings }) => {
  const { isLoading, isError, isSuccess, isData, error } = isState;
  const { isPainting, isColorRandom } = isSettings;

  return (
    <>
      {isLoading ? (
        // If is loading show loading
        <Loading variant={isColorRandom} content="Loading .." animation="border" />
      ) : isError ? (
        // If is error show error
        <CardGenerate
          isText={`“We've had a error, You go back more late ${error.message}r ”`}
          icons={[<BiError key="error1" />, <BiError key="error2" />]}
          styles={["bg-danger", "dark"]}
          style={{ maxWidth: "36rem", width: "80vw" }}
        />
      ) : isSuccess ? (
        // If is success show quote
        <CardGenerate
          isText={{ quote: `“${isData.content}”`, author: isData.author }}
          icons={[<BsTwitter key="twiiter" />, <BsDownload key="download" />]}
          styles={[`${isPainting ? "mt-3" : ""}`, "primary"]}
          style={{ maxWidth: "36rem" }}
        />
      ) : null}
    </>
  );
};

CardHome.propTypes = {
  isState: PropTypes.object.isRequired,
  isSettings: PropTypes.object.isRequired,
};

export default CardHome;
