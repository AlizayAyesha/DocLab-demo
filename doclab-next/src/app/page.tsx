"use client";

import Image from 'next/image'
import { useEffect, useState } from 'react'

export const dynamic = 'force-dynamic'
import {
  IoMenuOutline,
  IoCloseOutline,
  IoArrowForward,
  IoLocation,
  IoSearch,
  IoCheckmarkCircleOutline,
  IoPersonOutline,
  IoFolderOutline,
  IoChevronUp,
  IoMailOpenOutline,
  IoCallOutline,
  IoMapOutline,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoGoogle,
  IoLogoLinkedin
} from 'react-icons/io5'

// Header component
function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuActive(false) // Close menu when scrolling
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[4] px-4 py-4 transition-all duration-[0.5s]">
        <div className="container max-w-[1200px] mx-auto flex justify-between items-center gap-10" suppressHydrationWarning>
          <Image
            src="/assets/images/logo.svg"
            alt="Doclab home"
            width={136}
            height={46}
            className="shrink-0"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white font-medium hover:text-verdigris transition-colors">Home</a>
            <a href="#about" className="text-white font-medium hover:text-verdigris transition-colors">About</a>
            <a href="#services" className="text-white font-medium hover:text-verdigris transition-colors">Services</a>
            <a href="#doctors" className="text-white font-medium hover:text-verdigris transition-colors">Doctors</a>
            <a href="#blog" className="text-white font-medium hover:text-verdigris transition-colors">Blog</a>
          </nav>

          <nav className={`navbar fixed top-0 ${isMenuActive ? 'translate-x-[-300px]' : 'translate-x-0'} max-w-[300px] bg-rich-black right-[-300px] h-screen z-[3] transition-all duration-[0.25s,0.5s] transition-timing-function[cubic-bezier(0.51,0.03,0.64,0.28),cubic-bezier(0.05,0.83,0.52,0.97)] ${isMenuActive ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="navbar-top px-6 pt-14 pb-25 mb-8 bx-shadow-border-bottom bg-rich-black">
              <Image
                src="/assets/images/logo.svg"
                alt="Doclab home"
                width={136}
                height={46}
                className="shrink-0"
              />
              <button
                className="nav-close-btn absolute top-4 right-5 text-white text-7xl"
                aria-label="close menu"
                onClick={() => setIsMenuActive(false)}
              >
                <IoCloseOutline />
              </button>
            </div>

            <ul className="navbar-list border-b border-white/10">
              <li className="navbar-item border-t border-white/10">
                <a href="#home" className="navbar-link text-white text-lg uppercase px-6 py-2.5">Home</a>
              </li>
              <li className="navbar-item border-t border-white/10">
                <a href="#about" className="navbar-link text-white text-lg uppercase px-6 py-2.5">About</a>
              </li>
              <li className="navbar-item border-t border-white/10">
                <a href="#services" className="navbar-link text-white text-lg uppercase px-6 py-2.5">Services</a>
              </li>
              <li className="navbar-item border-t border-white/10">
                <a href="#doctors" className="navbar-link text-white text-lg uppercase px-6 py-2.5">Doctors</a>
              </li>
              <li className="navbar-item border-t border-white/10">
                <a href="#blog" className="navbar-link text-white text-lg uppercase px-6 py-2.5">Blog</a>
              </li>
            </ul>

            <ul className="social-list flex justify-center gap-5 mt-4 text-5xl text-white">
              <li>
                <a href="#" className="social-link"><IoLogoTwitter /></a>
              </li>
              <li>
                <a href="#" className="social-link"><IoLogoFacebook /></a>
              </li>
              <li>
                <a href="#" className="social-link"><IoLogoPinterest /></a>
              </li>
              <li>
                <a href="#" className="social-link"><IoLogoInstagram /></a>
              </li>
              <li>
                <a href="#" className="social-link"><IoLogoYoutube /></a>
              </li>
            </ul>
          </nav>

          <button
            className="nav-open-btn fixed top-8 right-6 text-white text-4xl md:hidden z-[5]"
            aria-label="open menu"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <IoMenuOutline />
          </button>

          <a href="/appointment" className="btn bg-verdigris text-white font-bold px-9 py-3 flex items-center gap-2 rounded-lg overflow-hidden relative transition duration-[0.5s] hover:bg-transparent hidden md:flex">
            <span className="span text-lg">Make Appointment</span>
          </a>

          <div className={`overlay fixed top-0 ${isMenuActive ? 'translate-x-[-100%]' : 'translate-x-0'} w-full h-screen bg-black/30 right-[-100%] transition duration-[0.5s] ${isMenuActive ? 'visible opacity-100' : 'invisible opacity-0'} z-[2]`} onClick={() => setIsMenuActive(false)} suppressHydrationWarning />
        </div>
      </header>
    </>
  )
}

// Hero section component
function Hero() {
  return (
  <section
    id="home"
    className="hero bg-midnight-green pt-[200px] pb-0 bg-no-repeat bg-cover"
    style={{ backgroundImage: 'url(/assets/images/hero-bg.png)' }}
    aria-label="home"
  >
      <div className="container max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-24 min-h-screen" suppressHydrationWarning>
        <div className="hero-content" suppressHydrationWarning>
          <p className="hero-subtitle text-white font-medium text-lg flex items-center mb-4" data-reveal="left">
            Welcome To Doclab
          </p>

          <h1 className="headline-lg text-white font-medium leading-tight mt-5 mb-8 font-oswald" data-reveal="left">
            Find Nearest <br />
            Doctor.
          </h1>

          <div className="hero-card bg-white rounded-lg p-6 mb-10 shadow-xl max-w-2xl" data-reveal="left">
            <p className="card-text text-black text-xl font-medium leading-relaxed mb-6">
              Search doctors, clinics, hospitals, etc.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="input-wrapper relative flex-grow">
                <label className="block text-sm font-medium text-black mb-2">
                  Search Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter city, state, or zip code"
                  className="w-full px-4 py-3 text-black border-2 border-alice-blue rounded-lg outline-none focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors text-lg"
                  suppressHydrationWarning
                />
                <IoLocation className="absolute top-12 right-4 -translate-y-1/2 text-verdigris" />
              </div>

              <div className="sm:mt-8">
                <button className="btn bg-blue-600 text-white font-semibold px-8 py-3 flex items-center justify-center gap-3 rounded-lg overflow-hidden hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap" suppressHydrationWarning>
                  <IoSearch className="text-xl" />
                  <span className="text-lg">Find Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <figure className="hero-banner" data-reveal="right">
          <Image
            src="/assets/images/hero-banner.png"
            alt="hero banner"
            width={590}
            height={517}
            className="w-full"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  )
}

// Service section component
function Service() {
  return (
    <section id="services" className="service py-[120px] px-6 -mt-[60px] mb-[120px] relative z-[1]" aria-label="service">
      <div className="container max-w-[1200px] mx-auto" suppressHydrationWarning>
        <ul className="service-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "/assets/images/icon-1.png", title: "Psychiatry", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veritatis impedit dolorum tempore." },
            { icon: "/assets/images/icon-2.png", title: "Gynecology", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veritatis impedit dolorum tempore." },
            { icon: "/assets/images/icon-3.png", title: "Pulmonology", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veritatis impedit dolorum tempore." },
            { icon: "/assets/images/icon-4.png", title: "Orthopedics", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veritatis impedit dolorum tempore." }
          ].map((service, index) => (
            <li key={index}>
              <div className="service-card bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" data-reveal="bottom" onClick={() => window.scrollTo({top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth'})}>
                <div className="card-icon max-w-full mx-auto mb-6 bg-gradient-to-r from-verdigris/10 to-blue-500/10 rounded-full p-4 w-20 h-20 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="headline-sm font-bold text-blue-900 mb-4 hover:text-verdigris transition-colors">
                  {service.title}
                </h3>

                <p className="card-text text-black text-base mb-6 leading-relaxed">{service.text}</p>

                <button className="btn-circle bg-blue-600 hover:bg-blue-700 text-white text-xl p-4 rounded-full shadow-md transition-all duration-300 hover:scale-110 inline-flex items-center justify-center" aria-label={`learn more about ${service.title}`}>
                  <IoArrowForward />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// About section component
function About() {
  const [activeTab, setActiveTab] = useState('Vision')

  return (
    <section id="about" className="about py-[120px] pb-0" aria-labelledby="about-label">
      <div className="container max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] items-end gap-5" suppressHydrationWarning>
        <div className="about-content">
          <p className="section-subtitle title-lg flex items-center text-verdigris font-bold mb-4" id="about-label" data-reveal="left">
            About Us
          </p>

          <h2 className="headline-md font-bold text-midnight-green mb-5" data-reveal="left">
            Experienced Workers
          </h2>

          <p className="section-text mb-11" data-reveal="left">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam
          </p>

          <ul className="tab-list flex flex-wrap gap-5 mb-4" data-reveal="left">
            {['Vision', 'Mission', 'Strategy'].map(tab => (
              <li key={tab}>
                <button
                  className={`font-bold text-lg px-8 py-2 rounded-lg transition-colors ${activeTab === tab ? 'bg-verdigris text-white' : 'bg-alice-blue text-midnight-green'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          <p className="tab-text font-medium text-midnight-green mb-11" data-reveal="left">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum
          </p>

          <ul className="about-list grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Sonsectetur adipisicing elit',
              'Exercitation ullamco laboris',
              'Eiusmod tempor incididunt',
              'Aolore magna aliqua'
            ].map((item, index) => (
              <li key={index} className="about-item flex items-center gap-3 mb-2.5" data-reveal="left">
                <IoCheckmarkCircleOutline className="text-verdigris text-3xl shrink-0" />
                <span className="text-independence">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="about-banner -mr-16" data-reveal="right">
          <Image
            src="/assets/images/about-banner.png"
            alt="about banner"
            width={554}
            height={678}
            className="w-full"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}

// Listing section component
function Listing() {
  return (
    <section id="doctors" className="listing py-[120px] bg-alice-blue" aria-labelledby="listing-label">
      <div className="container max-w-[1200px] mx-auto px-4" suppressHydrationWarning>
        <div className="text-center mb-16">
          <p className="section-subtitle title-lg text-verdigris font-bold mb-4" id="listing-label" data-reveal="bottom">
            Doctors Listing
          </p>
          <h2 className="headline-md font-bold text-midnight-green" data-reveal="bottom">
            Browse by specialist
          </h2>
        </div>

        <ul className="grid-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "/assets/images/icon-1.png", title: "Psychiatry", text: "Mental health and behavioral disorders treatment" },
            { icon: "/assets/images/icon-2.png", title: "Gynecology", text: "Women's health and reproductive care" },
            { icon: "/assets/images/icon-4.png", title: "Pulmonology", text: "Respiratory system and lung diseases" },
            { icon: "/assets/images/icon-5.png", title: "Orthopedics", text: "Bone, joint and muscle treatment" },
            { icon: "/assets/images/icon-6.png", title: "Pediatrics", text: "Child healthcare and development" },
            { icon: "/assets/images/icon-7.png", title: "Osteology", text: "Bone structure and skeletal health" }
          ].map((item, index) => (
            <li key={index}>
              <div className="listing-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-alice-blue hover:border-verdigris" data-reveal="bottom">
                <div className="flex items-center gap-4 mb-4">
                  <div className="card-icon bg-gradient-to-r from-verdigris/10 to-blue-500/10 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                    <Image src={item.icon} alt={`${item.title} icon`} width={40} height={40} className="object-contain" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="headline-sm font-bold text-blue-900 hover:text-verdigris transition-colors mb-2">{item.title}</h3>
                    <p className="card-text text-black text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
                <button className="w-full bg-transparent border border-verdigris text-verdigris hover:bg-verdigris hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                  Find Doctors
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <button className="btn bg-verdigris text-white font-semibold px-8 py-3 rounded-lg hover:bg-midnight-green transition-colors shadow-lg hover:shadow-xl" data-reveal="bottom">
            View All Specialties
          </button>
        </div>
      </div>
    </section>
  )
}

// Blog section component
function Blog() {
  return (
    <section id="blog" className="blog py-[120px] pt-0" aria-labelledby="blog-label">
      <div className="container max-w-[1200px] mx-auto px-4" suppressHydrationWarning>
        <p className="section-subtitle title-lg text-center font-bold text-midnight-green mb-4" id="blog-label" data-reveal="bottom">
          News & Article
        </p>

        <h2 className="section-title headline-md font-bold text-center text-midnight-green mb-16" data-reveal="bottom">
          Latest Articles
        </h2>

        <ul className="grid-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {[
            {
              meta: [
                { icon: IoPersonOutline, text: "By Admin" },
                { icon: IoFolderOutline, text: "Specialist" }
              ],
              title: "Could intermittent fasting reduce breast cancer",
              date: "28 January, 2022",
              text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            },
            {
              meta: [
                { icon: IoPersonOutline, text: "By Admin" },
                { icon: IoFolderOutline, text: "Specialist" }
              ],
              title: "Give children more autonomy during the pandemic",
              date: "28 January, 2022",
              text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            },
            {
              meta: [
                { icon: IoPersonOutline, text: "By Admin" },
                { icon: IoFolderOutline, text: "Specialist" }
              ],
              title: "How do binge eating and drinking impact the liver?",
              date: "28 January, 2022",
              text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            }
          ].map((article, index) => (
            <li key={index}>
              <div className="blog-card p-12 rounded-12 relative overflow-hidden border-2 border-alice-blue cursor-pointer hover:border-verdigris transition-colors" data-reveal="bottom" onClick={() => window.location.href = '/blogs'}>
                <div className="absolute inset-0 bg-midnight-green/90 opacity-90 z-[-1]">
                  <div className="absolute inset-0 bg-white" style={{ transform: 'translateY(100%)' }}></div>
                </div>

                <div className="card-meta flex gap-5 mb-3">
                  {article.meta.map((meta, metaIndex) => (
                    <div key={metaIndex} className="flex items-center gap-1.5 text-midnight-green">
                      <meta.icon className="text-4xl" />
                      <span className="text-lg">{meta.text}</span>
                    </div>
                  ))}
                </div>

                <h3 className="headline-sm font-bold text-midnight-green mb-4 hover:text-verdigris transition-colors">{article.title}</h3>

                <time className="text-sm font-bold uppercase text-space-cadet opacity-50 mb-4 block" dateTime="2022-01-28">
                  {article.date}
                </time>

                <p className="card-text text-midnight-green text-sm mb-3">{article.text}</p>

                <div className="text-verdigris font-semibold text-sm hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                  Read More <IoArrowForward className="text-sm" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Footer component
function Footer() {
  return (
    <footer id="contact" className="footer bg-midnight-green text-white py-[120px]" style={{ backgroundImage: 'url(/assets/images/footer-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container max-w-[1200px] mx-auto px-4" suppressHydrationWarning>
        <div className="footer-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="footer-brand lg:col-span-2 xl:col-span-1" data-reveal="bottom">
            <Image
              src="/assets/images/logo.svg"
              alt="Doclab home"
              width={150}
              height={50}
              className="mb-6 brightness-0 invert"
              loading="lazy"
            />

            <p className="text-white/80 text-base mb-6 leading-relaxed">
              Providing quality healthcare services with compassion and expertise. Your health and well-being are our top priority.
            </p>

            <ul className="social-list flex gap-3">
              {[IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube].map((Icon, index) => (
                <li key={index}>
                  <a href="#" className="social-link w-10 h-10 bg-white/10 hover:bg-verdigris flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <Icon className="text-lg" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-links" data-reveal="bottom">
            <h3 className="text-xl font-bold mb-6 text-verdigris">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Doctors', 'Blog', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-verdigris transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-verdigris rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links" data-reveal="bottom">
            <h3 className="text-xl font-bold mb-6 text-verdigris">Our Services</h3>
            <ul className="space-y-3">
              {['Emergency Care', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Surgery'].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/80 hover:text-verdigris transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-verdigris rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact" data-reveal="bottom">
            <h3 className="text-xl font-bold mb-6 text-verdigris">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IoLocation className="text-verdigris text-xl mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  2416 Mapleview Drive<br />
                  Tampa, FL 33634
                </span>
              </li>

              <li className="flex items-center gap-3">
                <IoCallOutline className="text-verdigris text-xl flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <a href="tel:0029129102320" className="hover:text-verdigris transition-colors">0029129102320</a><br />
                  <a href="tel:000232439493" className="hover:text-verdigris transition-colors">000 2324 39493</a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <IoMailOpenOutline className="text-verdigris text-xl flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <a href="mailto:contact@website.com" className="hover:text-verdigris transition-colors">contact@website.com</a><br />
                  <a href="mailto:info@doclab.com" className="hover:text-verdigris transition-colors">info@doclab.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter" data-reveal="bottom">
            <h3 className="text-xl font-bold mb-6 text-verdigris">Newsletter</h3>
            <p className="text-white/80 text-sm mb-6">
              Subscribe to get the latest news and updates from DocLab.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 outline-none focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                suppressHydrationWarning
              />

              <button
                type="submit"
                className="w-full bg-verdigris hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                suppressHydrationWarning
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} DocLab. All Rights Reserved. Developed by Alizay Ayesha
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-verdigris transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-verdigris transition-colors">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-verdigris transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Back to top button component
function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="#top"
      className={`back-top-btn fixed bottom-8 right-8 bg-verdigris text-white p-4 text-3xl rounded-full transition-colors hover:bg-eerie-black z-[3] ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      aria-label="back to top"
    >
      <IoChevronUp />
    </a>
  )
}

// Preloader component
function Preloader() {
  const [isLoaded, setIsLoaded] = useState(true) // Immediately loaded

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoaded(true), 1000)
    }
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <div className={`preloader ${isLoaded ? 'loaded' : ''}`} suppressHydrationWarning>
      <div className="circle"></div>
    </div>
  )
}

export default function Home() {
  const [loaded, setLoaded] = useState(true) // Preloader disabled

  useEffect(() => {
    // Scroll reveal functionality
    const revealElementOnScroll = () => {
      const revealElements = document.querySelectorAll('[data-reveal]');
      revealElements.forEach(element => {
        const topOfElement = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (topOfElement < windowHeight / 1.15) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', revealElementOnScroll);
    window.addEventListener('load', revealElementOnScroll);

    return () => {
      window.removeEventListener('scroll', revealElementOnScroll);
      window.removeEventListener('load', revealElementOnScroll);
    }
  }, [])

  return (
    <main id="top" className="loaded" suppressHydrationWarning>
      <Header />
      <Hero />
      <Service />
      <About />
      <Listing />
      <Blog />
      <Footer />
      <BackToTop />
    </main>
  )
}
