import Code from "@hapi/code";
import Lab from "@hapi/lab";
import Wreck from "@hapi/wreck";

const { expect } = Code;
const { after, before, describe, it } = (exports.lab = Lab.script());

describe("SonnyTheHumanoid", () => {
  let response = {};

  before(async () => {
    response = await Wreck.post(
      "http://localhost:8080/SonnyTheHumanoid?creator=soumik"
    );
  });

  after(() => {});

  it("can be created", () => {
    const { res, payload } = response;
    expect(res.statusCode).to.equal(201);
  });
  it("responds in plain text", () => {
    const { res, payload } = response;

    expect(res.headers["content-type"]).to.equal("text/plain; charset=utf-8");
  });

  it("thanks creator", async () => {
    const { res, payload } = response;
    expect(payload.toString()).to.equal(
      "Hello soumik, this is Sonny. Thanks for creating me!"
    );
  });
});
