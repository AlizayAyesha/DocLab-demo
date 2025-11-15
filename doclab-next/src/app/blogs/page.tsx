"use client";

import Image from 'next/image'
import { useState } from 'react'
import {
  IoCalendarOutline,
  IoPersonOutline,
  IoFolderOutline,
  IoTimeOutline,
  IoArrowBackOutline,
  IoHeartOutline,
  IoShareOutline,
  IoBookOutline
} from 'react-icons/io5'

// Header component for blogs page
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[4] px-4 py-4 transition-all duration-[0.5s] bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container max-w-[1200px] mx-auto flex justify-between items-center gap-4">
        <Image
          src="/assets/images/logo.svg"
          alt="Doclab home"
          width={136}
          height={46}
          className="shrink-0"
        />

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="/" className="text-midnight-green font-medium hover:text-verdigris transition-colors">Home</a>
          <a href="#about" className="text-midnight-green font-medium hover:text-verdigris transition-colors">About</a>
          <a href="#services" className="text-midnight-green font-medium hover:text-verdigris transition-colors">Services</a>
          <a href="#doctors" className="text-midnight-green font-medium hover:text-verdigris transition-colors">Doctors</a>
          <a href="#contact" className="text-midnight-green font-medium hover:text-verdigris transition-colors">Contact</a>
        </nav>

        <a href="/appointment" className="btn bg-verdigris text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors hidden md:flex">
          Make Appointment
        </a>
      </div>
    </header>
  )
}

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Health Tips', 'Medical News', 'Treatments', 'Wellness']

  const blogs = [
    {
      id: 1,
      title: 'Understanding and Managing High Blood Pressure',
      excerpt: 'Learn about the causes, symptoms, and effective treatments for hypertension through lifestyle changes and medical interventions.',
      category: 'Health Tips',
      author: 'Dr. Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: '/assets/images/blog-card.jpg',
      tags: ['Heart Health', 'Lifestyle', 'Prevention']
    },
    {
      id: 2,
      title: 'Latest Advances in Diabetes Treatment',
      excerpt: 'Discover the newest therapies and technological innovations revolutionizing diabetes management and care.',
      category: 'Medical News',
      author: 'Dr. Michael Chen',
      date: 'March 12, 2024',
      readTime: '7 min read',
      image: '/assets/images/blog-card.jpg',
      tags: ['Diabetes', 'Innovation', 'Technology']
    },
    {
      id: 3,
      title: 'The Importance of Regular Health Screenings',
      excerpt: 'Why preventive health screenings are crucial for early diagnosis and maintaining long-term wellness.',
      category: 'Wellness',
      author: 'Dr. Emily Davis',
      date: 'March 10, 2024',
      readTime: '4 min read',
      image: '/assets/images/blog-card.jpg',
      tags: ['Prevention', 'Screening', 'Wellness']
    },
    {
      id: 4,
      title: 'Mental Health and Physical Wellness Connection',
      excerpt: 'Understanding how mental health impacts physical health and vice versa - a holistic approach to wellbeing.',
      category: 'Health Tips',
      author: 'Dr. Robert Wilson',
      date: 'March 8, 2024',
      readTime: '6 min read',
      image: '/assets/images/blog-card.jpg',
      tags: ['Mental Health', 'Holistic Care', 'Wellness']
    },
    {
      id: 5,
      title: 'Nutrition Guide for Cancer Prevention',
      excerpt: 'Evidence-based dietary recommendations and foods that may help reduce cancer risk based on latest research.',
      category: 'Treatments',
      author: 'Dr. Lisa Thompson',
      date: 'March 5, 2024',
      readTime: '8 min read',
      image: '/assets/images/blog-card.jpg',
      tags: ['Cancer Prevention', 'Nutrition', 'Research']
    },
    {
      id: 6,
      title: 'Telemedicine: Revolutionizing Healthcare Access',
      excerpt: 'How virtual healthcare is making quality medical care more accessible to patients everywhere.',
      category: 'Medical News',
      author: 'Dr. James Miller',
      date: 'March 3, 2024',
      readTime: '5 min read',
      image: '/assets/images/blog-card.jpg',
      tags: ['Telemedicine', 'Access', 'Innovation']
    }
  ]

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory)

  return (
    <div className="min-h-screen bg-alice-blue">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-verdigris to-blue-600 text-white">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <IoBookOutline className="text-6xl mx-auto mb-6 text-white/90" />
          <h1 className="headline-lg font-oswald mb-4">Health Blog</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Stay informed with the latest health news, medical insights, and wellness tips from our expert physicians.
          </p>
        </div>
      </section>

      <div className="container max-w-[1200px] mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-verdigris text-white'
                  : 'bg-white text-midnight-green hover:bg-alice-blue border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredBlogs.map(blog => (
            <article key={blog.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-verdigris text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <IoHeartOutline className="text-white text-lg" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <IoShareOutline className="text-white text-lg" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h2 className="headline-md text-midnight-green mb-3 hover:text-verdigris transition-colors cursor-pointer">
                  {blog.title}
                </h2>

                <p className="text-black/70 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-black/60 mb-4">
                  <div className="flex items-center gap-1">
                    <IoPersonOutline className="text-verdigris" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoCalendarOutline className="text-verdigris" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoTimeOutline className="text-verdigris" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map(tag => (
                    <span key={tag} className="text-xs bg-alice-blue text-verdigris px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/blogs/${blog.id}`}
                  className="inline-flex items-center gap-2 text-verdigris font-semibold hover:text-blue-600 transition-colors group"
                >
                  Read More
                  <IoCalendarOutline className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <IoBookOutline className="text-verdigris text-4xl mx-auto mb-4" />
          <h3 className="headline-md text-midnight-green mb-4">Stay Updated</h3>
          <p className="text-black/70 mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for the latest health articles and medical updates delivered to your inbox.
          </p>

          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-verdigris text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-midnight-green text-white py-12">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} DocLab. All Rights Reserved. Developed by Alizay Ayesha
          </p>
        </div>
      </footer>
    </div>
  )
}
