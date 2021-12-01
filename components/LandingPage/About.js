function About() {
    return (
        <section id="About" className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div data-aos="fade-up" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/ZqLfhRi.png" />
                </div>
                <div  className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Docstream
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p  className="mb-8 leading-relaxed">Docstream empowers you to start making your content right away without having to worry about any registeration process <br/>
                    Start right away by creating the link of your own domain of choice with any password of your choice! <br/>
                    Share your link to any person of your choice and start working on the document right away! <br/>
                    Further, we offer options to export your document as a PDF with DRM inspired encryption protection</p>
                    <div className="flex justify-center">
                        {/* <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">GET STARTED</button>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">QUICK SHARE</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
