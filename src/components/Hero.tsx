'use client'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#FAFAFA] dark:bg-[#0F0F0F]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8">
            <span className="text-gray-900 dark:text-white">Hi! I'm </span>
            <span className="bg-gradient-blue-green bg-clip-text text-transparent font-medium">
              Chathura
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
            Your software engineering partner, specializing in scalable mobile & web applications,
            AI solutions, and network development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 font-medium text-base"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-200 font-medium text-base"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1XK-vkT0tJdsxeQ2PwlzPSesFbQlfZOgw/view?usp=drive_link"
              className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-200 font-medium text-base"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
