import { Container } from 'src/shared/components/container';

export default function HowItWorks() {
  return (
    <Container>
      HowItWorks sec

      {/*1.Pass test(for better understand your needs)
      2.Choose a specialist;
      3.Schedule your lesson;
      4.Get cool result;
*/}
      <ul
        className="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
        data-te-stepper-init=""
        data-te-stepper-type="vertical">
        <li
          data-te-stepper-step-ref
          className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span
              data-te-stepper-head-icon-ref
              className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              1
            </span>
            <span
              data-te-stepper-head-text-ref
              className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        Pass the test
      </span>
          </div>
          <div
            data-te-stepper-content-ref
            className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </li>
        <li
          data-te-stepper-step-ref
          className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
        data-te-stepper-head-icon-ref
        className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        2
      </span>
            <span
              data-te-stepper-head-text-ref
              className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        Choose a specialist
      </span>
          </div>
          <div
            data-te-stepper-content-ref
            className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>
        <li data-te-stepper-step-ref className="relative h-fit">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
        data-te-stepper-head-icon-ref
        className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        3
      </span>
            <span
              data-te-stepper-head-text-ref
              className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        Schedule your lesson
      </span>
          </div>
          <div
            data-te-stepper-content-ref
            className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </div>
        </li>
        <li data-te-stepper-step-ref className="relative h-fit">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
        data-te-stepper-head-icon-ref
        className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        4
      </span>
            <span
              data-te-stepper-head-text-ref
              className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        Get cool result
      </span>
          </div>
          <div
            data-te-stepper-content-ref
            className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </div>
        </li>
      </ul>
    </Container>
  )
}
