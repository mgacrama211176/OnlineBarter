const handler = (request, response, next) => {
  response.status(200).json(`This is from the API`);
};
export default handler;
