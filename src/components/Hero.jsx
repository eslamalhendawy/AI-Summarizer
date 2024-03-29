import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between item-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          type="button"
          onClick={() => {
            window.open("https://github.com/eslamalhendawy/AI-Summarizer.git");
          }}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text ">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">Simplify your reading with AI Summarizer, an open-source article summarizer that transforms long articles into clear and concise summaries</h2>
    </header>
  );
};

export default Hero;
