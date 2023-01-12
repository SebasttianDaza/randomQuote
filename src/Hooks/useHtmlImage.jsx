import { useCallback } from "react";

const useHtmlImage = () => {
  const download = useCallback((dataUrl, name) => {
    // Create a link tag
    const link = document.createElement("a");
    link.download = name;
    link.href = dataUrl;
    return link;
  }, []);

  return {
    downloadPng: useCallback(
      (name, img) => {
        import("html-to-image").then(({ toPng }) => {
          toPng(img).then((dataUrl) => {
            // Download the image
            download(dataUrl, `${name}.png`).click();
          });
        });
      },
      [download],
    ),
    downloadJpeg: useCallback(
      (name, img) => {
        import("html-to-image").then(({ toJpeg }) => {
          toJpeg(img).then((dataUrl) => {
            download(dataUrl, `${name}.jpeg`);
          });
        });
      },
      [download],
    ),
    downloadSvg: useCallback(
      (name, img) => {
        import("html-to-image").then(({ toSvg }) => {
          toSvg(img).then((dataUrl) => {
            download(dataUrl, `${name}.svg`);
          });
        });
      },
      [download],
    ),
  };
};

export default useHtmlImage;
