'use client'

import { Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Legalweb App',
      description: 'Platform connecting users with lawyers based on experience, expertise & ratings. Features video consultations, secure payments, and AI chatbot for instant legal responses.',
      technologies: ['Flutter', 'Firebase', 'Google Gemini API', 'Android Studio'],
      github: 'https://github.com/chathuraz/legal_web',
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      title: 'Blog Application',
      description: 'Responsive blog app with clean design & dynamic routing. Includes admin panel for content management (create, edit, delete, manage email subscriptions).',
      technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/chathuraz/next-blog-app',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    {
      title: 'Solid Weddings Photography',
      description: 'Photography portfolio website with gallery showcases, album downloads, and contact options. Admin can upload albums and manage portfolio.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/Sachindu-Nethmin/solidweddings',
      image: 'bg-gradient-to-br from-green-500 to-teal-500',
    },
    {
      title: 'Banking Network Architecture',
      description: 'Simulated 4-floor bank network with VLANs, OSPF routing, switch security, DHCP helper, wireless integration, and static IPs.',
      technologies: ['Cisco Packet Tracer', 'Networking', 'VLAN', 'OSPF'],
      github: 'https://github.com/chathuraz/Banking-Network-Architecture',
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
    },
    {
      title: 'Student Enrolment System',
      description: 'Web platform for managing student enrolments and degree tracking with PDF upload and dashboard UI for efficiency.',
      technologies: ['Laravel', 'MySQL', 'PHP'],
      github: 'https://github.com/Sachindu-Nethmin/FOG-SM',
      image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    },
    {
      title: 'Network Diagnostic Tool',
      description: 'Menu-driven batch script for troubleshooting & diagnostics. Target users: IT support engineers, admins, and networking students.',
      technologies: ['Batchfile', 'Windows', 'Networking'],
      github: 'https://github.com/chathuraz/Network-Diagnostic-Tool',
      image: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="projects" className="py-32 bg-white dark:bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-multicolor bg-clip-text text-transparent font-medium">Projects</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center text-white text-xl font-medium`}>
                {project.title}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
