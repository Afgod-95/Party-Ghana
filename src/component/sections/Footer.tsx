import React from 'react'
import Link from 'next/link'
import { Gift, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <>
    {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">PartyGhana.Com</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Ghana&apos;s premier gift management platform, making celebrations more meaningful and memorable for everyone.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    href={social.href}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Gift Registry</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Event Planning</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Guest Management</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Photo Gallery</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <Link href={"/"}>
                  <p className="hover:text-white transition-colors">Help Center</p>
                </Link>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>© 2024 PartyGhana.Com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer