import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <main className='py-10'>
      <section className='mx-auto w-full md:w-5xl border border-gray-100 rounded-md'>
        <div className='p-6'>
          <div className='flex flex-col gap-1 text-center'>
            <h1 className='text-3xl font-bold'>
              Lets understand git in more depth
            </h1>
            <span className='text-gray-400'>
              Lets start by building a counter in a new branch
            </span>
          </div>
          <div className='mx-auto w-fit mt-6 flex items-center gap-4'>
            <button className='bg-red-500 text-sm text-white px-3 py-2 rounded-md'>
              Decrement
            </button>
            <span>{counter}</span>
            <button
              onClick={() => setCounter((prev) => prev + 1)}
              className='bg-blue-500 text-sm text-white px-3 py-2 rounded-md'
            >
              Increment
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
