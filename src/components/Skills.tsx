'use client'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Kotlin', 'Python', 'Dart', 'C', 'PHP', 'JavaScript', 'HTML'],
    },
    {
      title: 'Frameworks & Technologies',
      skills: ['Flutter', 'React', 'Next.js', 'React Native', 'Laravel', 'Node.js', 'Express', 'Tailwind CSS'],
    },
    {
      title: 'Databases & Tools',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Git', 'Docker', 'VS Code', 'Android Studio', 'Cisco Packet Tracer'],
    },
    {
      title: 'Soft Skills',
      skills: ['Leadership', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability', 'Critical Thinking'],
    },
  ]

  return (
    <section id="skills" className="py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mb-4">
            Skills & <span className="bg-gradient-purple-pink bg-clip-text text-transparent font-medium">Expertise</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
            >
              <h3 className="text-base font-medium text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
