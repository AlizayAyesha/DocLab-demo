"use client";

import Image from 'next/image'
import { useState } from 'react'
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoPersonOutline,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoMedicalOutline,
  IoDocumentTextOutline,
  IoCheckmarkCircleOutline,
  IoArrowBackOutline
} from 'react-icons/io5'

// Header component
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[4] px-4 py-4 transition-all duration-[0.5s] bg-white/30 backdrop-blur-lg border-b border-gray-200/30">
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

        {/* Mobile menu button */}
        <button className="md:hidden text-midnight-green hover:text-verdigris transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    specialty: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
    insurance: '',
    emergency: false
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would typically send the data to your backend
    console.log('Appointment submitted:', formData)
  }

  const specialties = [
    'General Medicine',
    'Cardiology',
    'Dermatology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Psychiatry',
    'Dentistry',
    'Ophthalmology',
    'Gynecology'
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ]

  return (
    <div className="min-h-screen bg-alice-blue">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-verdigris to-blue-600 text-white">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <IoCalendarOutline className="text-6xl mx-auto mb-6 text-white/90" />
          <h1 className="headline-lg font-oswald mb-4">Schedule Your Appointment</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Book an appointment with our experienced healthcare professionals. We're here to help you get the care you need.
          </p>
        </div>
      </section>

      <div className="container max-w-[1000px] mx-auto px-4 py-16">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step === 1 ? 'bg-verdigris text-white ring-2 ring-verdigris ring-offset-2' :
                  currentStep >= step ? 'bg-verdigris text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step === 1 ? '1' : step === 2 ? '2' : '3'}
                </div>
                  <span className="ml-2 font-medium text-white">
                    {step === 1 ? 'Patient Info' : step === 2 ? 'Appointment Details' : 'Confirmation'}
                  </span>
                {step < 3 && <div className="w-16 h-1 bg-gray-200 ml-4"></div>}
              </div>
            ))}
          </div>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="bg-verdigris text-white rounded-2xl shadow-xl p-8">
            {/* Step 1: Patient Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="headline-md text-white mb-6 text-center">Patient Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Insurance Provider (Optional)
                    </label>
                    <input
                      type="text"
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      placeholder="Insurance company name"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    name="emergency"
                    checked={formData.emergency}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-verdigris focus:ring-verdigris"
                  />
                  <label className="text-sm text-midnight-green">
                    This is an emergency appointment
                  </label>
                </div>
              </div>
            )}

            {/* Step 2: Appointment Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="headline-md text-midnight-green mb-6 text-center">Appointment Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Select Specialty *
                    </label>
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      required
                    >
                      <option value="">Choose a specialty</option>
                      {specialties.map(specialty => (
                        <option key={specialty} value={specialty}>{specialty}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight-green mb-2">
                      Preferred Doctor (Optional)
                    </label>
                    <input
                      type="text"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors"
                      placeholder="Doctor name or leave blank"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-midnight-green mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-verdigris focus:ring-2 focus:ring-verdigris/20 transition-colors resize-none"
                    placeholder="Describe your symptoms or reason for visit..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="headline-md text-midnight-green mb-6 text-center">Confirm Appointment Details</h2>

                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-midnight-green">Patient:</strong> {formData.name}
                    </div>
                    <div>
                      <strong className="text-midnight-green">Date:</strong> {formData.date}
                    </div>
                    <div>
                      <strong className="text-midnight-green">Time:</strong> {formData.time}
                    </div>
                    <div>
                      <strong className="text-midnight-green">Specialty:</strong> {formData.specialty}
                    </div>
                    <div>
                      <strong className="text-midnight-green">Email:</strong> {formData.email}
                    </div>
                    <div>
                      <strong className="text-midnight-green">Phone:</strong> {formData.phone}
                    </div>
                  </div>
                  {formData.message && (
                    <div className="pt-4 border-t border-gray-200">
                      <strong className="text-midnight-green">Message:</strong>
                      <p className="mt-1">{formData.message}</p>
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <IoDocumentTextOutline className="text-verdigris text-xl flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-midnight-green">
                      <p className="font-medium mb-1">Appointment Policy:</p>
                      <p>Please arrive 15 minutes early for check-in. Bring your ID and insurance card. You will receive a confirmation email shortly after booking.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-midnight-green rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <IoArrowBackOutline />
                  Previous
                </button>
              )}

              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-8 py-3 bg-verdigris text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Book Appointment
                  </button>
                )}
              </div>
            </div>
          </form>
        ) : (
          /* Success Message */
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <IoCheckmarkCircleOutline className="text-green-500 text-8xl mx-auto mb-6" />
            <h2 className="headline-md text-midnight-green mb-4">Appointment Booked Successfully!</h2>
            <p className="text-lg text-midnight-green mb-6">
              Thank you for choosing DocLab. We've received your appointment request and you'll receive a confirmation email shortly.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-midnight-green mb-4">Next Steps:</h3>
              <ul className="space-y-2 text-left text-midnight-green">
                <li className="flex items-center gap-2">
                  <IoMailOutline className="text-verdigris flex-shrink-0" />
                  Check your email for appointment confirmation
                </li>
                <li className="flex items-center gap-2">
                  <IoCallOutline className="text-verdigris flex-shrink-0" />
                  We'll call you 24 hours before your appointment to confirm
                </li>
                <li className="flex items-center gap-2">
                  <IoLocationOutline className="text-verdigris flex-shrink-0" />
                  Arrive 15 minutes early for check-in
                </li>
                <li className="flex items-center gap-2">
                  <IoMedicalOutline className="text-verdigris flex-shrink-0" />
                  Bring your ID and insurance information
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setCurrentStep(1)
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    dob: '',
                    gender: '',
                    specialty: '',
                    doctor: '',
                    date: '',
                    time: '',
                    message: '',
                    insurance: '',
                    emergency: false
                  })
                }}
                className="px-6 py-3 bg-verdigris text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Book Another Appointment
              </button>
              <a
                href="/"
                className="px-6 py-3 bg-gray-200 text-midnight-green rounded-lg hover:bg-gray-300 transition-colors"
              >
                Return to Home
              </a>
            </div>
          </div>
        )}
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
