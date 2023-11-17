function Hero(){
    return(
        <div className="hero py-32 bg-base-100">
            <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
                <img src="https://picsum.photos/seed/picsum/500/300" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">What we do!</h1>
                <p className="py-6">We have team of experienced software developers who are skilled in various programming languages, software development methodologies, and tools.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
