import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-800 text-black text-4xl p-4 text-center inline-block rounded-xl'>Tailwind test</h1>
<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://www.pexels.com/photo/a-cocktail-with-mint-and-lime-in-it-27101553/" alt="" width="384" height="512"/>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
      </blockquote>
      <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
    </>
  )
}

export default App
