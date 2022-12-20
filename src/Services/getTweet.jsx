import { getUrl } from "@Services"; 

const getTweet = (element) => {
  const url = getUrl("https://twitter.com/intent/tweet", `text=${element}`);
  window.open(url, "_blank");
};

export default getTweet;
