'use client'

import { Trophy, Heart } from 'lucide-react'

const Achievements = () => {
  const hackathons = [
    {
      title: 'Netcom 2025 - Top 10 Finalist',
      organization: 'SLIT CODEFEST',
      description: 'Real-time hardware configuration challenge',
      achievement: 'Merit Award',
    },
    {
      title: 'Netcom 2024 - Top 10 Finalist',
      organization: 'SLIT CODEFEST',
      description: 'Cisco Packet Tracer network configuration',
      achievement: 'Merit Award',
    },
  ]

  const volunteering = [
    {
      role: 'Organizing Committee Member',
      event: 'IEEE Day 2024',
      organization: 'SUSL IEEE Student Branch',
      description: 'Organized and coordinated IEEE Day activities at Sabaragamuwa University',
    },
    {
      role: 'Volunteer Mentor',
      event: 'CoderDojo Sessions',
      organization: 'STEMUP Foundation',
      description: 'Guided young IT learners in programming and technology fundamentals',
    },
    {
      role: 'Volunteer',
      event: 'ITECH 2.0 Innovation Exhibition',
      organization: 'Karagastalawa Maha Vidyalaya',
      description: 'Supported technology innovation showcase and student exhibitions',
    },
  ]

  return (
    <section id="achievements" className="py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mb-4">
            Achievements & <span className="bg-gradient-multicolor bg-clip-text text-transparent font-medium">Community</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hackathons Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={28} className="text-yellow-500" />
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Hackathons & Competitions
              </h3>
            </div>
            <div className="space-y-4">
              {hackathons.map((hackathon, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-base font-medium text-gray-900 dark:text-white">
                      {hackathon.title}
                    </h4>
                    <span className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-medium whitespace-nowrap ml-2">
                      🏆 {hackathon.achievement}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {hackathon.organization}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {hackathon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart size={28} className="text-red-500" />
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Volunteering Experience
              </h3>
            </div>
            <div className="space-y-4">
              {volunteering.map((volunteer, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
                >
                  <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">
                    {volunteer.role}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">
                    {volunteer.event}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {volunteer.organization}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {volunteer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
