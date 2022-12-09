const handler = (request, response, next) => {
  console.log(process.env.GOOGLE_CLIENT_ID, 123213);
  response.status(200).json(process.env.GOOGLE_CLIENT_SECRET);
};
export default handler;
