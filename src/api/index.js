import axios from "axios";
const { OPENAI_SECRET } = process.env;

//API URL
const BASE_URL = "https://api.openai.com/v1/engines/";

export const api = axios.create({
  baseURL: `${BASE_URL}`,
});

// OpenAI API call for prompts
export const promptOpenAI = async ({ engine, body }) => {
  try {
    const options = {
      method: "post",
      url: `${BASE_URL}${engine}/completions`,
      headers: { Authorization: `Bearer ${OPENAI_SECRET}` },
      data: body,
    };
    const { data } = await api(options);
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    const errToThrow = error?.response?.data;
    throw errToThrow;
  }
};
