import {logo} from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between item-center flex-col ">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button type="button" onClick={() => {window.open("https://github.com/eslamalhendawy/AI-Summarizer.git")}}>
          GitHub
        </button>
      </nav>
    </header>
  )
}

export default Hero