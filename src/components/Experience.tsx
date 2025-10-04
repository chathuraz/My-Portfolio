'use client'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Current Position',
      period: '2023 - Present',
      description: [
        'Developing scalable mobile & web applications using Flutter and React',
        'Collaborating with global teams on AI-powered solutions',
        'Building network architectures with VLANs, OSPF, and DHCP',
        'Contributing to open-source projects and leading UI transformations',
      ],
    },
    {
      title: 'Open Source Contributor',
      company: 'ViMusic Project',
      period: '2024',
      description: [
        'Led full UI transformation with Spotify-inspired design using Kotlin',
        'Integrated Material 3 design system for modern UX',
        'Improved performance with card-based layouts and lazy loading',
        'Enhanced animations and responsiveness across Android devices',
      ],
    },
    {
      title: 'Hackathon Finalist',
      company: 'Netcom 2024 & 2025',
      period: '2024 - 2025',
      description: [
        'Secured Top 10 position in Netcom 2025 for real-time hardware configuration',
        'Achieved Top 10 in Netcom 2024 for Cisco Packet Tracer network design',
        'Designed and implemented complex network solutions under time constraints',
        'Collaborated with team members to solve challenging technical problems',
      ],
    },
  ]

  return (
    <section id="experience" className="py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mb-4">
            Work <span className="bg-gradient-blue-green bg-clip-text text-transparent font-medium">Experience</span>
          </h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1A1A1A] rounded-3xl p-8 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start text-sm leading-relaxed">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
