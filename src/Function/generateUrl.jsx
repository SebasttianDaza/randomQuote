const generateUrl = (url, params) => {
  const urlParams = new URLSearchParams(params);
  return `${url}?${urlParams.toString()}`;
};

export default generateUrl;
