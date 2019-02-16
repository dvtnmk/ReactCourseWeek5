const endpoints = {
  baseURI: "http://localhost:3333",
  baseAPI: "http://localhost:3333"
};

function ReqError(message, status) {
  this.response = {
    error: {
      message,
      status
    }
  };
  return this;
}
// You will get this.
// {
//   response: {error: {message: "", status:404}}
// }

const handleError = response => {
  if (!response.ok) {
    const message = response.message;
    throw new ReqError(message, response.status);
  }
  return response;
};

const handleResponse = async response => {
  const toJSON = await response.json();
  return toJSON;
};

const handleErrorElse = async err => {
  console.log(err);
  if (!err.hasOwnProperty("response")) {
    throw new ReqError(err, 400);
  }
};

const fetchAPI = (
  path = "/",
  method = "GET",
  body = undefined,
  headers = {}
) => {
  return fetch(`${endpoints.baseAPI}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    body
  })
    .then(handleError)
    .then(handleResponse)
    .catch(handleErrorElse);
};

export default { fetchAPI };
