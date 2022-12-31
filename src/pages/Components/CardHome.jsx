import { BiError } from "react-icons/bi";
import { Loading, CardGenerate } from "@Components";
import { BsTwitter, BsDownload } from "react-icons/bs";

const CardHome = ({ isState, isSettings }) => {
  const { isLoading, isError, isSuccess, data } = isState;
  const { isPainting, isColorRandom } = isSettings;

  return (
    <>
      {isLoading ? (
        // If is loading show loading
        <Loading
          variant={isColorRandom}
          content="Loading .."
          animation="border"
        />
      ) : isError ? (
        // If is error show error
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
      ) : isSuccess ? (
        // If is success show quote
        <CardGenerate
          quote={`“${data.content}”`}
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

export default CardHome;
