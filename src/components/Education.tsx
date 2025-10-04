'use client'

const Education = () => {
  const education = [
    {
      degree: 'BSc (Hons) in Computing and Information Systems',
      institution: 'Sabaragamuwa University of Sri Lanka',
      period: 'Aug 2023 - Present',
      description: 'Pursuing honors degree with focus on software engineering, data structures, algorithms, and network systems.',
      achievements: [
        'Active member of IEEE Student Branch',
        'Finalist in multiple hackathons (Netcom 2024 & 2025)',
        'Organizing Committee Member for IEEE Day 2024',
      ],
    },
    {
      degree: 'G.C.E. Advanced Level - Physical Science Stream',
      institution: 'Ruhunu Vijayaba National College',
      period: '2021',
      description: 'Completed advanced level examination with strong foundation in mathematics and science.',
      achievements: [
        'Successfully completed A/L examination',
        'Strong analytical and problem-solving skills',
      ],
    },
  ]

  const certifications = [
    { name: 'Web Design - ODL University of Moratuwa', link: 'https://drive.google.com/file/d/1Ij7szAWg6j5TqCR47QSxOyw9fpNK4th9/view?usp=sharing' },
    { name: 'Python - ODL University of Moratuwa', link: 'https://drive.google.com/file/d/1G_d-fVbRz6Wnk8VEV5dXLtY4VH2AvQt2/view?usp=drive_link' },
    { name: 'SLIT CODEFEST 2025 - Netcom Merit Award', link: 'https://drive.google.com/file/d/1yBedCwvbFew_eLS6LF-IVhbTXm368grn/view?usp=drive_link' },
    { name: 'SLIT CODEFEST 2024 - Netcom Merit Award', link: 'https://drive.google.com/file/d/13vs7R64M19hEiEdptp2MdlEBiRPxtBf5/view?usp=drive_link' },
    { name: 'LEVELSTART game design certification', link: 'https://drive.google.com/file/d/1nG22Pul385jWDXqMTP3NVd0r1QHT1UtY/view?usp=drive_link' },
    { name: 'Introduction to MERN Certification', link: 'https://drive.google.com/file/d/13fgDgt4MNp7JiQ6kT5m8lC3bCz4CLDGa/view?usp=drive_link' },
    { name: 'HackerRank Python Certification', link: 'https://drive.google.com/file/d/1V4q-Y9dFKzTVNqq-4_Bmq7pZhFpu3aXa/view?usp=drive_link' },
    { name: 'HackerRank Java Certification', link: 'https://drive.google.com/file/d/1JRUwU49rK3_b4v366H3bSHAZ7qrzlfnG/view?usp=drive_link' },
    { name: 'HackerRank CSS Certification', link: 'https://drive.google.com/file/d/1eSA4fQLx742pNJXQ3fCWmtYnQjT24Jk-/view?usp=drive_link' },
    { name: 'Data Science Foundations - Level 1', link: 'https://www.credly.com/badges/8ecfcf87-8a5e-463d-8ecc-9700b02e2a3f/linked_in_profile' },
    { name: 'Data Privacy Fundamentals', link: 'https://courses.cognitiveclass.ai/certificates/0e24f3b9a70d46bcb521d659563a1a0d' },
    { name: 'IEEE WCET - IX 24', link: 'https://drive.google.com/file/d/1-SpE6imdMksOa3a9SJcCF3ODTGI9nBSR/view?usp=drive_link' },
    { name: 'AWS Q Developer', link: 'https://drive.google.com/file/d/1HWIRKbUqXTOL1_2Pn0kfwpwCwicEApUc/view?usp=drive_link' },
    { name: 'AWS Build and Deploy APIs with a Serverless CI/CD', link: 'https://drive.google.com/file/d/1YmJ3oj9zQG7GUzghXVMh6mWRc8Qo7j6j/view?usp=drive_link' },
    { name: 'IBM Docker Essentials', link: 'https://drive.google.com/file/d/14k5ynNzggDGcd1WKGDeyfIXLt6HMYqJl/view?usp=drive_link' },
  ]

  return (
    <section id="education" className="py-32 bg-white dark:bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mb-4">
            Education & <span className="bg-gradient-purple-pink bg-clip-text text-transparent font-medium">Certifications</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl p-8 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {edu.period}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {edu.description}
                </p>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl p-6 border border-gray-200 dark:border-gray-800 lg:sticky lg:top-24">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Certifications</h3>
              <ul className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">🏆</span>
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors leading-relaxed"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      <span>{cert.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
