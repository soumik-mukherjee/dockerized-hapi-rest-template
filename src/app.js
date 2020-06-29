import DotEnv from "dotenv";
import Hapi from "@hapi/hapi";

// Import your HTTP resources to add to HAPI server routes
import { SonnyTheHumanoid } from "./resources/ExampleResource";

DotEnv.config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.LISTEN_PORT,
    host: process.env.LISTEN_HOST,
  });

  // Add server routes to respond to HTTP resource invocation (i.e. REST calls)
  server.route(SonnyTheHumanoid.create);
  console.log("Starting server on %s....", server.info.uri);
  server.start();
  return server;
};

init()
  .then((server) => {
    console.log(`Server listening on ${server.info.uri}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
