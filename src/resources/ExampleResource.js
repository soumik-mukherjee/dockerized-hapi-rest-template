import { Readable, pipeline } from "stream";
import util from "util";

// A sample RESTful API resource, named 'SonnyTheHumanoid', supporting a 'POST' method
export const SonnyTheHumanoid = {
  create: {
    method: "POST",
    path: "/SonnyTheHumanoid",
    options: {
      description: "A humanoid, named Sonny, who thanks you for creating him",
    },
    handler: async function (request, h) {
      try {
        return h
          .response(
            `Hello ${request.query.creator}, this is Sonny. Thanks for creating me!`
          )
          .type("text/plain")
          .code(201);
      } catch (err) {
        console.error(err);
        return h.response("Internal error").code(500);
      }
    },
  },
};
