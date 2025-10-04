'use client'

import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0F0F0F] border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Chathura Sajeewa
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
