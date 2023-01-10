const getUrl = (url, params) => {
  const urlParams = new URLSearchParams(params);
  return `${url}?${urlParams.toString()}`;
};

export default getUrl;
