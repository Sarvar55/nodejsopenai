const { request } = require("express");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const askQuestion = async (req, res) => {
  const { message } = req.body;
  requestToOpenAi(message)
    .then((response) => {
      return res.status(200).json({ data: response });
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

const requestToOpenAi = async (message) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      max_tokens: 500,
      temperature: 0,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  askQuestion,
};
