import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

enum ButtonType {
  NUMBER,
  OPERATOR,
  EQUAL,
  CLEAR,
  DECIMAL,
  DELETE
}

const buttons = [
  {
    label: "AC",
    cols: "col-span-2",
    bgColor:
      "bg-gray-400 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-700 duration-300",
    operation: (a: number, b: number) => 0,
    type: ButtonType.CLEAR
  },
  {
    label: "DEL",
    cols: "col-span-1",
    bgColor:
      "bg-gray-400 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-700 duration-300",
    type: ButtonType.DELETE
  },
  {
    label: "÷",
    cols: "col-span-1",
    bgColor:
      "bg-orange-400 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-800 duration-300",
    operation: (a: number, b: number) => a / b,
    type: ButtonType.OPERATOR
  },
  {
    label: "7",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "7",
    type: ButtonType.NUMBER
  },
  {
    label: "8",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "8",
    type: ButtonType.NUMBER
  },
  {
    label: "9",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "9",
    type: ButtonType.NUMBER
  },
  {
    label: "x",
    cols: "col-span-1",
    bgColor:
      "bg-orange-400 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-800 duration-300",
    operation: (a: number, b: number) => a * b,
    type: ButtonType.OPERATOR
  },
  {
    label: "4",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "4",
    type: ButtonType.NUMBER
  },
  {
    label: "5",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "5",
    type: ButtonType.NUMBER
  },
  {
    label: "6",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "6",
    type: ButtonType.NUMBER
  },
  {
    label: "-",
    cols: "col-span-1",
    bgColor:
      "bg-orange-400 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-800 duration-300",
    operation: (a: number, b: number) => a - b,
    type: ButtonType.OPERATOR
  },
  {
    label: "1",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "1",
    type: ButtonType.NUMBER
  },
  {
    label: "2",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "2",
    type: ButtonType.NUMBER
  },
  {
    label: "3",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "3",
    type: ButtonType.NUMBER
  },
  {
    label: "+",
    cols: "col-span-1",
    bgColor:
      "bg-orange-400 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-800 duration-300",
    operation: (a: number, b: number) => a + b,
    type: ButtonType.OPERATOR
  },
  {
    label: "0",
    cols: "col-span-2",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => "0",
    type: ButtonType.NUMBER
  },
  {
    label: ".",
    cols: "col-span-1",
    bgColor:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 duration-300",
    value: () => ".",
    type: ButtonType.NUMBER
  },
  {
    label: "=",
    cols: "col-span-1",
    bgColor:
      "bg-red-400 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-800 duration-300",
    type: ButtonType.EQUAL
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [display, setDisplay] = useState("0");

  return (
    <main className={`${darkMode && "dark"}`}>
      <div className='flex justify-center items-center h-screen w-screen bg-gray-200 dark:bg-gray-700 duration-300'>
        <div className='max-w-[500px] min-w-[300px] my-0 mx-auto select-none sm:min-w-[340px] flex flex-col gap-3'>
          <header className='flex items-center justify-between text-gray-700 text-sm'>
            <h1 className='text-xl font-bold text-gray-700 dark:text-gray-200'>
              React Calculator
            </h1>
            <label className='relative cursor-pointer'>
              <input
                type='checkbox'
                className='sr-only'
                onChange={() => setDarkMode(!darkMode)}
              />
              <div
                className={`block w-14 h-8 rounded-full duration-300 ${
                  darkMode ? "bg-gray-200" : "bg-gray-700"
                }`}
              />
              <div className='dot absolute flex items-center justify-center left-1 top-1 bg-indigo-400 w-6 h-6 rounded-full transition'>
                {darkMode ? (
                  <BiSun className='text-gray-700' />
                ) : (
                  <BiMoon className='text-white' />
                )}
              </div>
            </label>
          </header>
          <div className='bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-md p-3 flex justify-end text-3xl duration-300 overflow-hidden'>
            <span>{display}</span>
          </div>
          <div className='bg-gray-300 dark:bg-gray-600 grid grid-cols-4 gap-3 rounded-md p-3 duration-300'>
            {buttons.map((button, index) => {
              return (
                <button
                  key={index}
                  className={`rounded-md flex text-gray-700 dark:text-white items-center justify-center text-3xl py-4 ${button.cols} ${button.bgColor}`}>
                  <span>{button.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
