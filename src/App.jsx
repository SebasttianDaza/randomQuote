import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsTwitter, BsFillForwardFill, BsLinkedin, BsDownload } from "react-icons/bs";
import { useEffect } from "react";

import useFetch from "./Hooks/useFetch";
import useStateBasic from "./Hooks/useStateBasic";
import ComponentLoading from "./Components/Spinners/Spinner";
import CardGenerate from "./Components/Cards/CardGenerate";
import CardAuthor from "./Components/Cards/CardAuthor";
import getRandomClassColor from "./Function/getRandomColor";
import generateImage from "./Function/generateImage";
import { generateTweetOrInstagram } from "./Function/generateImage";

const App = () => {
  const [state, fetchData] = useFetch();
  const [stateQuoteAuthor, fetchQuoteAuthor] = useFetch();
  const [isPainting, setPainting] = useStateBasic(false);
  const [colorRandom, setColorRandom] = useStateBasic("bg-light");
  const [colorRandomSpinner, setColorRandomSpinner] = useStateBasic("primary");
  const [isParametre, setParametre] = useStateBasic(false);

  useEffect(() => {
    fetchData({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/random",
      method: "GET",
    });
    setPainting(false);
    setColorRandom(getRandomClassColor(color));
    setColorRandomSpinner(getRandomClassColor(colorSecond));
  }, [fetchData, setPainting, setColorRandom, setColorRandomSpinner]);

  const nextQuoteRandom = () => {
    fetchData({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/random",
      method: "GET",
    });
    setPainting(false);
    setColorRandom(getRandomClassColor(color));
    setColorRandomSpinner(getRandomClassColor(colorSecond));
  };

  const searchQuoteAboutAuthor = async (author) => {
    await fetchQuoteAuthor({
      url: `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`,
      method: "GET",
    });
    setPainting(true);
  };

  const generateImageQuote = async ({ ref, type }) => {
    await setParametre(true);
    if (type === "download") {
      generateImage(ref.current);
    }
    if (type === "twitter") {
      generateTweetOrInstagram(ref);
    }
  };

  const { data } = state;

  return (
    <Container
      fluid
      className={`bg-${colorRandom} min-vh-100 d-flex flex-column justify-content-around align-items-center `}
    >
      <Row>
        <Col>
          {state.isLoading ? (
            <ComponentLoading
              variant={colorRandomSpinner}
              content="Loading .."
              animation="border"
            />
          ) : state.isError ? (
            "Error"
          ) : state.isSuccess ? (
            <CardGenerate
              quote={`“${data.data[0].quoteText}”`}
              icons={[<BsTwitter key="twiiter" />, <BsDownload key="download" />]}
              styles={[
                `${isPainting ? "mt-3" : ""}`,
                "fs-4 fst-normal lh-base text-dark",
                ["mt-4", "md", "primary"],
              ]}
              style={{ maxWidth: "36rem" }}
              isShow={isParametre}
              eventBtn={generateImageQuote}
            />
          ) : null}

          {stateQuoteAuthor.isLoading ? (
            <Container fluid className="d-flex justify-content-center">
              <ComponentLoading
                variant={colorRandomSpinner}
                content="Loading .."
                animation="border"
              />
            </Container>
          ) : isPainting ? (
            stateQuoteAuthor.data.data.map((item, index) => {
              return (
                <CardGenerate
                  quote={`“${item.quoteText}”`}
                  icons={[<BsTwitter key={index} />, <BsDownload key={index} />]}
                  styles={[
                    "mt-2 mb-2",
                    "fs-4 fst-normal lh-base text-dark",
                    ["mt-4", "md", "primary"],
                  ]}
                  style={{ maxWidth: "36rem" }}
                  isShow={isParametre}
                  eventBtn={generateImageQuote}
                  key={index}
                />
              );
            })
          ) : null}
        </Col>
      </Row>
      <Row>
        <Col>
          {state.isLoading ? (
            <ComponentLoading
              variant={colorRandomSpinner}
              content="Loading .."
              animation="border"
            />
          ) : state.isError ? (
            "Error"
          ) : state.isSuccess ? (
            <CardAuthor
              contentBtn={<BsFillForwardFill />}
              stylesBtn={["", "md", "primary"]}
              contentCard={[data.data[0].quoteAuthor, data.data[0].quoteGenre]}
              style={{ maxHeight: "10rem", maxWidth: "35rem", minWidth: "20rem" }}
              event={nextQuoteRandom}
              eventCard={searchQuoteAboutAuthor}
              className={isPainting ? "mb-3" : ""}
            />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

const color = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

const colorSecond = ["secondary", "success", "danger", "warning", "info", "light", "dark"];

export default App;
