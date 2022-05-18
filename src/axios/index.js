import axios from "axios";

//Array API URL
const BASE_URL = "https://my-shopify-gpt3-fun.herokuapp.com/api";

// OpenAI API call for prompts
export const promptOpenAI = async ({ prompt }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${BASE_URL}/prompt`,
      data: { prompt: prompt },
    });

    if (data.error) throw data.error;
    return data;
  } catch (err) {
    console.error(err);
  }
};
