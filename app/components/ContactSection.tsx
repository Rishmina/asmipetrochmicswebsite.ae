
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  product: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setSubmitError('');

    try {
      // Create email content
      const emailContent = `
New Contact Form Submission from ASMI ENERGY FZE Website

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Product Interest: ${data.product || 'Not specified'}

Message:
${data.message}

---
This message was sent from the ASMI ENERGY FZE website contact form.
      `;

      // Send email using mailto link (fallback method)
      const mailtoLink = `mailto:sales@asmienergy.com?subject=New Contact Form Submission - ${data.name}&body=${encodeURIComponent(emailContent)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');

      // Show success message
      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get in touch with our experts to discuss your petrochemical requirements and discover how ASMI ENERGY FZE can serve your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520]/10 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-map-pin-line text-[#DAA520] text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Office Address</h4>
                  <p className="text-gray-600 mb-2">
                    LV-07/05, LOGISTICS VILLAGE<br />
                    HAMRIYAH, Dubai<br />
                    United Arab Emirates
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/699EWf9ZEEZwMSHa9?g_st=iw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#DAA520] hover:text-[#B8860B] transition-colors font-semibold"
                  >
                    <i className="ri-map-pin-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520]/10 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-phone-line text-[#DAA520] text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <a href="tel:+971502181100" className="text-gray-600 hover:text-[#DAA520] transition-colors">
                    +971 50 218 1100
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520]/10 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-[#DAA520] text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <a href="mailto:sales@asmienergy.com" className="text-gray-600 hover:text-[#DAA520] transition-colors">
                    sales@asmienergy.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520]/10 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-time-line text-[#DAA520] text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                    Friday - Saturday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-circle-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-error-warning-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                  {submitError}
                </div>
              </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent text-sm"
                    placeholder="Your full name"
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent text-sm"
                    placeholder="your@email.com"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register('company')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent text-sm"
                    placeholder="Your company name"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent text-sm"
                    placeholder="+971 XXX XXXX"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-semibold text-gray-900 mb-2">
                  Product Interest
                </label>
                <div className="relative">
                  <select
                    id="product"
                    {...register('product')}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent text-sm appearance-none bg-white"
                    disabled={isLoading}
                  >
                    <option value="">Select a product</option>
                    <option value="base-oil-group-1">Base Oil - Group I</option>
                    <option value="base-oil-group-2">Base Oil - Group II</option>
                    <option value="base-oil-group-3">Base Oil - Group III</option>
                    <option value="base-oil-group-4">Base Oil - Group IV</option>
                    <option value="sn-500">SN 500 Base Oil</option>
                    <option value="rpo-aromatic">RPO - Aromatic</option>
                    <option value="rpo-paraffinic">RPO - Paraffinic</option>
                    <option value="rpo-naphthenic">RPO - Naphthenic</option>
                    <option value="other">Other</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5 flex items-center justify-center"></i>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  maxLength={500}
                  {...register('message', {
                    required: 'Message is required',
                    maxLength: {
                      value: 500,
                      message: 'Message must be 500 characters or less'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA520] focus:border-transparent text-sm"
                  placeholder="Tell us about your requirements..."
                  disabled={isLoading}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 rounded-lg font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  isLoading 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-[#DAA520] text-white hover:bg-[#B8860B]'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2 w-5 h-5 flex items-center justify-center"></i>
                    Sending Message...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
