import Image from 'next/image';
import { Container } from 'src/shared/components/container';
import DoneImg from '../../public/done.svg'
import AccountInfo from '../../public/accountInfo.svg'
import Schedule from '../../public/schedule.svg'
import Confirmation from '../../public/confirmation.svg'

export default function HowItWorks() {
  return (
    <Container>
      <div
        className="my-8"
      >
        <h2 className="inline-flex text-3xl font-bold my-6">Как это работает:</h2>
        <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">

          <li className="mb-10 ml-6">
        <span
          className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <Image src={DoneImg} alt="done" />
        </span>
            <h3 className="font-medium leading-tight">Зарегистрируйтесь</h3>
            <p className="text-sm">...это позволит сохранить ваши результаты</p>
          </li>

          <li className="mb-10 ml-6">
        <span
          className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <Image src={Schedule} alt="done" />
        </span>
            <h3 className="font-medium leading-tight">Пройдите тест</h3>
            <p className="text-sm">...это позволит специалисту лучше понять ваши потребности</p>
          </li>

          <li className="mb-10 ml-6">
        <span
          className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <Image src={AccountInfo} alt="done" />
        </span>
            <h3 className="font-medium leading-tight">Выберите специалиста по душе</h3>
            <p className="text-sm">...позволит вам расслабиться и достичь желаемого результата</p>
          </li>

          <li className="ml-6">
        <span
          className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <Image src={Confirmation} alt="done" />
        </span>
            <h3 className="font-medium leading-tight">Запланируйте ваш сеанс</h3>
            <p className="text-sm">...чтобы всем было комфортно ))</p>
          </li>
        </ol>
      </div>
    </Container>
  );
}
