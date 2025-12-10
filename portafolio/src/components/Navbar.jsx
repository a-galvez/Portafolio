"use client"

import { useState } from "react"
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex items-center gap-6">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Habilidades</button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Proyectos</button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Experiencia</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <GlobeAltIcon className="w-5 h-5" />
              <span>Idioma</span>
              <span>&#9662;</span>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <button className="bg-[#32936f] text-white px-4 py-2 rounded-lg hover:bg-[#2a7d5f] transition-colors">
              Descargar CV
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Habilidades
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Proyectos
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              Experiencia
            </button>

            <button className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <GlobeAltIcon className="w-5 h-5" />
              <span>Idioma</span>
              <span className="ml-auto">&#9662;</span>
            </button>

            <div className="flex items-center gap-4 px-4 py-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>

            <button className="w-full bg-[#32936f] text-white px-4 py-2 rounded-lg hover:bg-[#2a7d5f] transition-colors">
              Descargar CV
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
