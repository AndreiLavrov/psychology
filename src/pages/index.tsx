import Head from 'next/head';
import Link from 'next/link';

import HowItWorks from 'src/sections/howItWorks';
import { Container } from 'src/shared/components/container';

export default function Home() {
  return (
    <>
      <Head>
        <title>Psychology</title>
        <meta name="description" content="Page which give psychological help"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main className="relative">

        <div className="relative">
          <Container>
            {/* // commented for now;
            <article className="font-medium text-5xl flex flex-col items-center justify-center mx-auto py-20 max-w-3xl xl:max-w-5xl">
              <h1 className="font-medium text-2xl sm:text-3xl xl:text-5xl">инь и янь. баланс нужен во всем. мы помогаем наити баланс в Вашей жизни и счастливо идти вперед</h1>
              <a href="https://t.me/psychology_the_best_bot" target="_blank">
                <button
                  type="button"
                  className="inline-block rounded bg-neutral-50 my-40 m-3 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]">
                  Try to use our telegram bot
                </button>
              </a>
            </article>
            */}

            <article
              className="font-medium text-5xl flex flex-col items-center justify-center mx-auto py-20 max-w-3xl xl:max-w-5xl">
              <h1 className="font-medium text-2xl sm:text-3xl xl:text-5xl">инь и янь. баланс нужен во всем. мы помогаем
                наити баланс в Вашей жизни и счастливо идти вперед</h1>

              <h4 className="font-medium mt-40 m-3 text-l sm:text-xl xl:text-2xl">мы использцем <a href="">ChatGPT</a>.
                Здесь
                вы можете пообщаться с искусственным интиллектом</h4>
              <Link
                href="/chat"
                className="inline-block rounded bg-neutral-50 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]"
                onClick={() => {
                }}
              >
                <button
                  type="button"
                >
                  спросить
                </button>
              </Link>
            </article>

          </Container>
          <video className="absolute inset-0 h-full w-full object-cover opacity-80 -z-50" autoPlay loop controls muted>
            <source
              src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4"
              type="video/mp4"/>
          </video>
        </div>

        <HowItWorks/>
      </main>
    </>
  );
}
