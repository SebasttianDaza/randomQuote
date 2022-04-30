import Container from "react-bootstrap/Container";
import { BsTwitter, BsDownload } from "react-icons/bs";
import PropTypes from "prop-types";
import { BiError } from "react-icons/bi";

import ComponentLoading from "../Spinners/Spinner";

import CardGenerate from "./CardGenerate";

const GenerateCards = ({ colorRandomSpinner, stateQuoteAuthor, isPainting }) => {
  return (
    <>
      {stateQuoteAuthor.isLoading ? (
        <Container fluid className="d-flex justify-content-center">
          <ComponentLoading variant={colorRandomSpinner} content="Loading .." animation="border" />
        </Container>
      ) : stateQuoteAuthor.isError ? (
        <CardGenerate
          quote={`““We've had a error.”`}
          icons={[<BiError key="error1" />, <BiError key="error2" />]}
          styles={[
            "bg-danger mt-2 mb-2",
            "fs-4 fst-normal lh-base text-dark",
            ["mt-4", "md", "dark"],
          ]}
          style={{ maxWidth: "36rem", width: "60vw" }}
        />
      ) : isPainting ? (
        stateQuoteAuthor.data.data.map((item, index) => {
          return (
            <CardGenerate
              quote={`“${item.quoteText}”`}
              icons={[<BsTwitter key={index} />, <BsDownload key={index} />]}
              styles={["mt-2 mb-2", "fs-4 fst-normal lh-base text-dark", ["mt-4", "md", "primary"]]}
              style={{ maxWidth: "36rem", transition: "all 1s ease-in-out" }}
              key={index}
            />
          );
        })
      ) : null}
    </>
  );
};

GenerateCards.propTypes = {
  colorRandomSpinner: PropTypes.string.isRequired,
  stateQuoteAuthor: PropTypes.object.isRequired,
  isPainting: PropTypes.bool.isRequired,
};

export default GenerateCards;
