'use client'

const About = () => {
  return (
    <section id="about" className="py-32 bg-white dark:bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-blue-green bg-clip-text text-transparent font-medium">Me</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate software engineer specializing in developing scalable mobile & web applications, 
              AI solutions, and network development. I love turning complex problems into user-centric and 
              impactful solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              With experience in Flutter, Firebase, and modern web technologies, I have collaborated with 
              global teams to deliver exceptional user experiences. My expertise spans from mobile app 
              development to network architecture design.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects like ViMusic, 
              volunteering at tech events, or competing in hackathons where I've been a finalist multiple times.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-8">Quick Facts</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Education</p>
                  <p className="text-base text-gray-900 dark:text-white">BSc (Hons) Computing & IS</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Role</p>
                  <p className="text-base text-gray-900 dark:text-white">Software Engineer Intern</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🌍</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Location</p>
                  <p className="text-base text-gray-900 dark:text-white">Sri Lanka</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Interests</p>
                  <p className="text-base text-gray-900 dark:text-white">Mobile Dev, AI, Networking</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
