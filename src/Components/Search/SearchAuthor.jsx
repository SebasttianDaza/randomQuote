import { useCallback, useContext } from "react";
import { RenderConditional, CardAuthor } from "@Components";

import { useFetch } from "@Hooks";
import { BsFillForwardFill } from "react-icons/bs";

const SearchAuthor = ({ author }) => {
  const [state, fetchData] = useFetch();
  
  /*const {
    isPainting,
    isColorRandomSpinner,
    updatePainting,
    updateColorRandom,
    updateColorRandomSpinner,
  } = useContext(ContextQuoteRandom);
*/
  const nextQuoteRandom = useCallback(() => {
    /*fetchData({
      url: "https://quote-garden.herokuapp.com/api/v3/quotes/random",
      method: "GET",
    });

    updatePainting(false);
    updateColorRandom(getRandomColor(false));
    updateColorRandomSpinner(getRandomColor(true));*/
  }, [fetchData, updatePainting, updateColorRandom, updateColorRandomSpinner]);

  const searchQuoteAboutAuthor = useCallback(
    async (author) => {
      /*await fetchQuoteAuthor({
        url: `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`,
        method: "GET",
      });
      updatePainting(true);*/
    },
    [fetchQuoteAuthor, updatePainting]
  );

  return (
    <>
      <RenderConditional
        state={state}
        colorRandom={isColorRandomSpinner}
        isShowLoading={false}
        renderSucess={
          state.isSuccess ? (
            <CardAuthor
              contentBtn={<BsFillForwardFill />}
              stylesBtn={["", "md", "primary"]}
              contentCard={[data.author, data.authorSlug]}
              style={{
                maxHeight: "10rem",
                maxWidth: "35rem",
                minWidth: "20rem",
              }}
              event={nextQuoteRandom}
              eventCard={searchQuoteAboutAuthor}
              className={isPainting ? "mb-3" : ""}
            />
          ) : null
        }
      />
    </>
  );
};

export default SearchAuthor;
