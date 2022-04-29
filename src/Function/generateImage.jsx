import html2canvas from "html2canvas";

const generateImage = async (element, typeSocialMedia) => {
  const canvas = await html2canvas(element),
    image = canvas.toDataURL("image/png");
  if (typeSocialMedia === "twitter") {
    //Compartir en Twitter
    console.log("Compartir en Twitter");
  }

  if (typeSocialMedia === "instagram") {
    //Compartir en Instagram
    console.log("Compartir en Instagram");
  }
};

export default generateImage;
