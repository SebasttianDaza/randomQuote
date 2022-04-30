import html2canvas from "html2canvas";

const generateImage = async (element) => {
  const canvas = await html2canvas(element),
    image = canvas.toDataURL("image/png"),
    link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.setAttribute("href", image);
  link.setAttribute("download", "image.png");
  link.click();
};

export default generateImage;
