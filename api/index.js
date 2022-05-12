// Setting up array server to hide API KEY
const apiRouter = require("express").Router();
require("dotenv").config();
const { OPENAI_SECRET_KEY } = process.env;
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

apiRouter.get("/health", (req, res) => {
  res.send({ message: "This is a healthy array server" });
});

apiRouter.post("/prompt", async (req, res, next) => {
  const { prompt } = req.body;
  try {
    const { data } = await openai.createCompletion("text-curie-001", {
      prompt: prompt,
      max_tokens: 68,
      temperature: 0.9,
    });
    res.send(data);
  } catch (err) {
    next(err);
  }
});

module.exports = apiRouter;
