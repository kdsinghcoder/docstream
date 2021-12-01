import GetStarted_modal from "../modal/GetStarted_modal";
import Quixk_share_modal from "../modal/Quixk_share_modal";



function Hero() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-large text-white">Docstream
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">A Convenient, Faster and Easier alternative to Google Docs: Docstream is your one stop destination. <br/> Create your Personalized Link, Secure it, Type your content and Share it! <br/> It is as simple as that!</p>
            <div className="flex justify-center space-x-6">
              <GetStarted_modal text="Get a Site" color="blueGray"/>
              
              <Quixk_share_modal text="Quick Share" color="blueGray"/>

            </div>
          </div>
          <div data-aos="fade-up" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/IHkOirD.png" />
          </div>
        </div>
      </section>
    )
}

export default Hero
