// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const Poster = async (request, response, next) => {
  if (request.method === "GET") {
    response.status(200).json(`POSTED!!`);
  } else {
    response.status(400).json(`NOT POSTED!!`);
  }
};
