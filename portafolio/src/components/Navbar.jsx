import { useState, useRef, useEffect } from "react"
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Navbar({ language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const texts = {
    es: {
      habilidades: "Habilidades",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      idioma: "Idioma",
      descargarCV: "Descargar CV",
    },
    en: {
      habilidades: "Skills",
      proyectos: "Projects",
      experiencia: "Experience",
      idioma: "Language",
      descargarCV: "Download CV",
    },
  }

  const toggleLanguageDropdown = () => setLanguageDropdownOpen(!languageDropdownOpen)

  const changeLanguage = (lang) => {
    setLanguage(lang)
    setLanguageDropdownOpen(false)
  }

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="w-full shadow-sm relative">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex items-center gap-6">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              {texts[language].habilidades}
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              {texts[language].proyectos}
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              {texts[language].experiencia}
            </button>
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

          <div className="hidden md:flex items-center gap-4 relative" ref={dropdownRef}>
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center gap-2 px-5 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <GlobeAltIcon className="w-5 h-5" />
                <span>{texts[language].idioma}</span>
                <span>&#9662;</span>
              </button>

              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white border rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => changeLanguage("es")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    ES
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

            <a
              href="https://github.com/a-galvez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/aa-galvez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <button className="bg-[#32936f] text-white px-4 py-2 rounded-lg hover:bg-[#2a7d5f] transition-colors">
              {texts[language].descargarCV}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              {texts[language].habilidades}
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              {texts[language].proyectos}
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              {texts[language].experiencia}
            </button>

            {/* Dropdown en mobile */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <GlobeAltIcon className="w-5 h-5" />
                <span>{texts[language].idioma}</span>
                <span className="ml-auto">&#9662;</span>
              </button>

              {languageDropdownOpen && (
                <div className="mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => changeLanguage("es")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    ES
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 px-4 py-2">
              <a
                href="https://github.com/a-galvez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aa-galvez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>

            <button className="w-full bg-[#32936f] text-white px-4 py-2 rounded-lg hover:bg-[#2a7d5f] transition-colors">
              {texts[language].descargarCV}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
