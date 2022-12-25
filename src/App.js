import './App.css'
import Navbar from './Components/Navbar'
import TopContent from './Components/TopContent'
import About from './Components/About'
import Whitepaper from './Components/Whitepaper'
import { useState } from 'react'
import Roadmap from './Components/Roadmap'
import Footer from './Components/Footer'
function App() {
  const [num, setNum] = useState(false)
  const settingNumTrue = () => {
    setNum(true)
  }
  const settingNumFalse = () => {
    setNum(false)
  }
  return (
    <div className="App">
      <Navbar
        num={num}
        settingNum0={settingNumFalse}
        settingNum100={settingNumTrue}
      />
      <TopContent num={num} />
      <About />
      <Whitepaper />
      <h3
        className="text-serif text-5xl text-white font-semibold font-serif mb-16 mt-24"
        id="roadmap"
      >
        Our Roadmap
      </h3>
      <Roadmap
        period={1}
        icon={true}
        bgColor="bg-cyan-400"
        hover="hover:-translate-y-6"
        move="lg:right-[20.8em]"
      />
      <Roadmap
        period={2}
        icon={false}
        bgColor="bg-pink-500"
        hover="hover:-translate-y-6"
        move="lg:right-0"
      />
      <Roadmap
        period={3}
        icon={false}
        bgColor="bg-orange-400"
        hover="hover:-translate-y-6"
        move="lg:left-[20.8em]"
      />
      <Roadmap
        period={4}
        icon={false}
        bgColor="bg-orange-200"
        hover="hover:-translate-y-6"
        move="lg:"
      />
      <Footer />
    </div>
  )
}

export default App
