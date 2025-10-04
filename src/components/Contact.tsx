'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a5807af3-5355-42b7-896f-11bba91b6d42', 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'sajeewachathura2001@gmail.com',
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: <Mail size={24} />, text: 'sajeewachathura2001@gmail.com', href: 'mailto:sajeewachathura2001@gmail.com' },
    { icon: <Phone size={24} />, text: '+94 768722695', href: 'tel:+94768722695' },
    { icon: <MapPin size={24} />, text: 'Bogahawatta, Dematapitiya, Sri Lanka', href: '#' },
  ]

  const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com/chathuraz', label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/chathura-sajeewa', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="py-32 bg-white dark:bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-blue-green bg-clip-text text-transparent font-medium">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors resize-none"
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl text-sm">
                  ✗ Failed to send message. Please try again or email me directly.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
                  >
                    <div className="text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
