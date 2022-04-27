const headers = {
  accept: "application/json",
  "Content-Type": "application/json",
};

const sendRequest = async ({ url, method, body }) => {
  const response = await fetch(url, {
    method,
    headers,
    body,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  return json;
};

export default sendRequest;
