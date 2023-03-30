import Image from 'next/image';
import DoneImg from 'public/done.svg';
import Cerf from 'public/certificates/cerf.webp';
import player1 from 'public/teamPlayers/1.webp';
import MarynaLaurova from 'public/teamPlayers/marynalaurova.jpg';
import Article1 from 'public/articlesImages/article1.webp';
import { serveDate } from 'src/services/serveDate';
import { Container } from 'src/shared/components/container';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

const options: DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}

const data = {
  name: 'Марина Лаврова',
  photoUrl: MarynaLaurova,
  experience: 3,
  level: 'Арт-терапевт, аналитический психолог, телесно- ориентированный психотерапевт.',
  descShort: 'Вопросы любви к себе. Состояние апатии, депрессия, утрата смысла, проживание потери. Неверная самооценка, неуверенность,аутоагрессия, стресс ,тревожность. Семейная терапия: кризисы в отношениях, зависимые отношения, построение отношений и решение конфликтов.Панические атаки, нарушение сна. Психологическая подготовка к родам и материнству. И другое.',
  descFull: 'Здравствуйте, меня зовут Екатерина Фалеева, я психолог, психотерапевт, а ещё жена и мама двоих деток. Люблю рисовать, писать небольшие рассказы или стихи, занимаюсь стрельбой из лука, люблю прогулки на природе и медитации. Я всегда хотела помогать людям, чувствовала что это моё. По первому образованию я провизор, я работала в мед.учреждениях и аптеках. Именно там я в первый раз задумалась как в сфере здравоохранения не хватает простого сочувствия и психологической поддержки людям. Я прожила тогда свой кризис самореализации, поиска своего истинного предназначения, прошла через депрессию. Я справилась с этим сложным состоянием с помощью психологии - разных методов, которыми сейчас пользуюсь в своей практике. Я выбрала путь психолога именно потому что мне есть чем поделиться.\n' +
    '\n' +
    'Теперь Моя цель - помочь людям прожить свой кризис. Помочь прийти к себе настоящему, к жизни и удовольствию. И для этого у меня есть много инструментов работы. Я тщательно подбираю их исходя из уникальности каждой личности. Я не спешу, но и не задерживаю процесс. Моя задача не только проработать запрос, но и научить человека выстраивать более эффективные способы жизни. Приглашаю вас пройти этот путь вместе!\n' +
    '\n' +
    'Приглашаю вас на психологическое консультирование для решения одного вопроса/проблемы (от 5-20 встреч) и на психотерапию (длительный период, работа с глубинными вопросами и состояниями). Я психотерапевт, поэтому моя задача не дать готовый ответ, а позволить вам с моей помощью осознать себя и трансформировать жизнь к лучшему.',
  nextSession: '30-е марта 12:00',
  methods: ['Арт-терапевт', 'Аналитическая психология (Юнгианский анализ)'],
  education: [{
    name: '2015 - 2018 Киевский институт современной психологии и психотерапии',
    url: Cerf
  }],
  articles: [{
    name: 'Самооценка и самопринятие. Как правильно оценить себя',
    type: 'Общие',
    desc: 'Что такое самооценка и как она формируется\n' +
      'Самооценка – это комплекс субъективных представлений человека о себе. Это важная составляющая самосознания человека. Благодаря ей формируется образ "Я" (Я концепция).\n' +
      ' \n' +
      'Можно сказать, что самооценка – это важная начальная база, благодаря которой человек имеет опору и устойчивость в жизни (как крепкие корни у дерева). В базу данной базы также вкладывается понятие «самоценность». А именно ощущение своей ценности и уникальности без особых причин и достижен...',
    imgUrl: Article1,
    link: 'https://meclee.com/ru/blog/obshchie/samoocinka-ta-samopriynyattya-yak-adekvatno-ociniti-sebe',
    date: new Date(0),
  }],
};

// const getDate = (date: Date) => `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`

export default function TeamPlayer() {
  const {
    name,
    photoUrl,
    experience,
    level,
    descShort,
    descFull,
    nextSession,
    methods,
    education,
    articles,
  } = data;

  const { getDate } = serveDate();

  return (
    <Container>
      <div className="flex my-10 rounded-lg bg-white">
        <div className="flex flex-col w-1/2 -my-6 rounded-lg">
          <Image src={photoUrl} alt="done" className="flex rounded-lg"/>
        </div>

        <div className="flex flex-col w-1/2 p-10">
          <h1 className="text-4xl font-bold mt-8 mb-5">{name}</h1>
          <span className="text-gray-400 mb-5">Опыт {experience} года</span>
          <h4 className="italic mb-5">{level}</h4>
          <p className="mb-16">{descShort}</p>
          <div className="mb-16">
            <h3 className="inline-flex text-xl font-bold">20 руб</h3> / <span>1 сеанс(60мин)</span>
          </div>
          <div>
            <div className="text-sm mb-2 text-yellow-400">Ближайший сеанс {nextSession}</div>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="rounded bg-gray-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              Записаться на прием
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/2 my-10 p-10 rounded-lg bg-white">
        <h2 className="inline-flex text-3xl font-bold mb-6">Подробное описание</h2>
        <article>{descFull}</article>
      </div>

      <div className="flex flex-col w-1/2 my-10 p-10 rounded-lg bg-white">
        <h2 className="inline-flex text-3xl font-bold mb-6">Опыт и методы</h2>
        {methods.map(item => (
          <div className="flex column" key={item}>
            <Image src={DoneImg} alt="done" className="inline-flex mr-2"/>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-1/2 my-10 p-10 rounded-lg bg-white">
        <h2 className="inline-flex text-3xl font-bold mb-6">Образование</h2>
        {education.map(({ name, url }) => (
          <div className="flex justify-between" key={name}>
            <span>{name}</span>
            <Image src={url} alt="certificate" className="inline-flex ml-2"/>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-1/2 my-10 p-10">
        <h2 className="inline-flex text-3xl font-bold mb-6">Авторские статьи (1)</h2>
        {articles.map(({ name, desc, type, imgUrl, link, date }) => (
          <article className="flex flex-col bg-gray-200 rounded-xl" key={name}>
            <Image src={imgUrl} alt="article" className="inline-flex rounded-xl"/>
            <div className="p-5">
              <a href={link}><h4 className="text-2xl font-bold pb-5">{name}</h4></a>
              <span className="inline-flex rounded-2xl p-3 text-white bg-gray-600">{type}</span>
              <p className="pt-5">{desc}</p>
              <span className="inline-flex pt-2 text-gray-400">{getDate(date, options)}</span>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
