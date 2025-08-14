function Hero(){
    return(
      <>
      <section id="home">
      <div className="px-2 sm:px-4 text-center text-white font-bold sm:text-green text-7xl sm:text-7xl md:text-8xl mt-30 sm:mt-8 h-screen flex flex-col justify-start items-center pt-16 sm:pt-30">
        <h1>
          HI THERE <br /> I'M THERESA <br />
          <span
            className="text-5xl sm:text-5xl md:text-8xl border-4 px-3 py-3 sm:mr-4 sm:mt-5 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent inline-block"
            style={{
              borderImage: 'linear-gradient(to right, #ef4444, #ec4899, #a855f7) 1',
              borderImageSlice: 1,
              borderStyle: 'dashed',
              borderColor: '#ef4444',
            }}
          >
            FOUNDER
          </span> OF GIP
        </h1>
      </div>
      </section>
      </>
    )
}
export default Hero;