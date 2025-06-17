import { useState } from 'react'
import { motion } from 'framer-motion'
import aboutImage from './assets/images/about.jpg'
import { useTranslation } from 'react-i18next'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.hypnosis'), href: '#hypnosis' },
    { name: t('nav.book'), href: '#book' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-background-dark/90 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-serif text-secondary">{t('title')}</h1>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="tel:+3548443079" className="flex items-center space-x-2 text-gray-300 hover:text-secondary transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+354 844-3079</span>
                </a>
                <a href="mailto:eyrunbjornsdottir@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-secondary transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>eyrunbjornsdottir@gmail.com</span>
                </a>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-secondary p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="tel:+3548443079" className="flex items-center space-x-2 text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-base font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+354 844-3079</span>
              </a>
              <a href="mailto:eyrunbjornsdottir@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-base font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>eyrunbjornsdottir@gmail.com</span>
              </a>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif text-secondary mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="#book"
              className="inline-block bg-secondary text-primary-dark px-8 py-3 rounded-md font-medium hover:bg-secondary-light transition-colors duration-200"
            >
              {t('hero.cta')}
            </motion.a>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif text-secondary mb-8">{t('about.title')}</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-gray-300">
                  {t('about.content')}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Professional hypnotherapist"
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif text-secondary mb-12 text-center">{t('services.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background-light rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-serif text-secondary mb-4">{t('services.cognitive.title')}</h3>
                <p className="text-gray-300">
                  {t('services.cognitive.description')}
                </p>
              </div>
              <div className="bg-background-light rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-serif text-secondary mb-4">{t('services.anxiety.title')}</h3>
                <p className="text-gray-300">
                  {t('services.anxiety.description')}
                </p>
              </div>
              <div className="bg-background-light rounded-lg p-6 border border-primary/20">
                <h3 className="text-xl font-serif text-secondary mb-4">{t('services.performance.title')}</h3>
                <p className="text-gray-300">
                  {t('services.performance.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Hypnosis Section */}
        <section id="hypnosis" className="py-20 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif text-secondary mb-8">{t('hypnosis.title')}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                {t('hypnosis.content')}
              </p>
            </div>
          </div>
        </section>

        {/* Book Section */}
        <section id="book" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif text-secondary mb-8 text-center">{t('book.title')}</h2>
            <div className="max-w-2xl mx-auto space-y-12">
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  {t('book.booking_info_prefix')}{' '}
                  <a
                    href="https://www.noona.is"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-light transition-colors duration-200"
                  >
                    www.noona.is
                  </a>
                  {' '}{t('book.booking_info_middle')}{' '}
                  <a
                    href="tel:+3548443079"
                    className="text-secondary hover:text-secondary-light transition-colors duration-200"
                  >
                    +354 8443079
                  </a>
                </p>
                <a
                  href="https://www.noona.is"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary text-primary-dark px-8 py-3 rounded-md font-medium hover:bg-secondary-light transition-colors duration-200"
                >
                  {t('book.book_now')}
                </a>
              </div>
              
              <div className="bg-background-light rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-serif text-secondary mb-6 text-center">{t('book.contact_form')}</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      {t('book.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md bg-white/10 border border-secondary text-white placeholder-gray-400 focus:bg-background focus:border-secondary focus:ring-secondary transition-colors duration-200 shadow-sm"
                      placeholder={t('book.name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      {t('book.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md bg-white/10 border border-secondary text-white placeholder-gray-400 focus:bg-background focus:border-secondary focus:ring-secondary transition-colors duration-200 shadow-sm"
                      placeholder={t('book.email')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      {t('book.message')}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-white/10 border border-secondary text-white placeholder-gray-400 focus:bg-background focus:border-secondary focus:ring-secondary transition-colors duration-200 shadow-sm"
                      placeholder={t('book.message')}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary-dark px-6 py-3 rounded-md font-medium hover:bg-secondary-light transition-colors duration-200"
                  >
                    {t('book.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dáleiðsla Eyrúnar. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 