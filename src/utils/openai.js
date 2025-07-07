import {GoogleGenAI} from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
  //ideally you should not make a call from the browser but you do this by setting this flag.
});

export default ai;