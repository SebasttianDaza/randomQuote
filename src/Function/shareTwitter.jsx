import generateUrl from "./generateUrl";

const generateTweet = (element) => {
  const url = generateUrl("https://twitter.com/intent/tweet", `text=${element}`);
  window.open(url, "_blank");
};

export default generateTweet;
