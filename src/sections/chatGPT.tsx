import { FormEvent, useEffect, useState } from 'react';
import { serveLocalStorage } from 'src/services/serveLocalStorage';

type IInitialState = any[];

const initialState: IInitialState = [];

export default function ChatGPT() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(initialState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const question = (e.target as HTMLFormElement).question.value;

    setLoading(true);
    const res = await fetch(`/api/get-ai-response?question=${question}`);
    const data = await res.json();
    const newState = [data.choices[0].text.trim().split('|'), question, ...state];
    setState(newState);
    setLoading(false);

    const { setToLocStorage } = serveLocalStorage();
    setToLocStorage('chat', newState);
  };

  useEffect(() => {
    const { getFromLocStorage } = serveLocalStorage();

    const chat = getFromLocStorage('chat');
    setState(chat);
  }, []);

  return (
    <div>
      <h2
        className="my-3 text-center"
      >
        Задайте любой вопрос (в данный момент на Английском он работает быстрее, но вы можете выбрать любой язык для
        коммуникации)
      </h2>

      <form className="mt-1 mb-10" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="question"
          id="question"
          className="block w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-5"
          placeholder="Ваш вопрос..."
        />

        <button
          type="submit"
          className="mt-5 w-1/2 mx-auto flex w-full justify-center rounded-md border border-transparent bg-slate-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Отправить вопрос
        </button>
      </form>

      <div className="relative">
        {loading && (
          <div className="absolute flex items-center -mt-20">
            <span className="mr-3">Думает...</span>
            <div
              className="text-white m-3 mx-auto inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status" />
          </div>
        )}
      </div>

      {state.length > 0 && state.map((tag, index) => (
        <div
          key={index}
          className={`my-3 flex whitespace-pre-line ${index % 2 ? 'justify-start text-blue-600' : 'justify-end text-black bg-slate-200'}`}
        >
          <div>{tag}</div>
        </div>
      ))}
    </div>
  );
}
