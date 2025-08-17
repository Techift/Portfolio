import React from 'react'
import { Link } from 'react-router-dom'

const Abouts = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">About Me</h1>
      <img src="/img/pic1.jpg" alt="Theresa" className="w-32 h-32 rounded-full object-cover border-4 border-pink-500 mb-6 shadow-lg" />
      <p className="max-w-xl text-lg text-white/80 text-center mb-8">
        Hi, I'm Theresa, the founder of GIP. I'm passionate about design, development, and helping others build great things. With years of experience in creative studios, branding, and digital products, I strive to deliver efficient and beautiful solutions for every client. Let's create something amazing together!
      </p>
      <div className="flex gap-4">
        <a href="mailto:theresa@email.com" className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition">Contact Me</a>
        <a href="/" className="px-6 py-2 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition">Back Home</a>
      </div>
    </div>
  )
}

export default Abouts