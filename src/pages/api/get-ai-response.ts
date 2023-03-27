import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: { query: { question: any; }; },
  res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; },
) {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${req.query.question}`,
      temperature: 0,
      max_tokens: 1000,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json(completion.data);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}
