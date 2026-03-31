'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#00452a] text-white py-12">
      <div className="px-8">
        {/* Four Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/branding/Asset 27.png"
                alt="MannBuild"
                width={400}
                height={100}
                className="h-auto"
              />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity">Homepage</Link>
              <Link href="/about" className="block text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
              <Link href="/services" className="block text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity">Our Services</Link>
              <Link href="/projects" className="block text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity">Our Projects</Link>
              <Link href="/finance" className="block text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity">Finance</Link>
              <Link href="/merch" className="block text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity">Merch</Link>
              <Link href="/contact" className="block text-sm lg:text-base opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-sm lg:text-base opacity-80">123 Construction Street</p>
              <p className="text-sm lg:text-base opacity-80">Building City, BC 12345</p>
              <p className="text-sm lg:text-base opacity-80">+1 234 567 8900</p>
              <p className="text-sm lg:text-base opacity-80">info@mannbuild.com</p>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between mb-2">
                <span className="text-sm lg:text-base opacity-80">Monday</span>
                <span className="text-sm lg:text-base opacity-80">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm lg:text-base opacity-80">Tuesday</span>
                <span className="text-sm lg:text-base opacity-80">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm lg:text-base opacity-80">Wednesday</span>
                <span className="text-sm lg:text-base opacity-80">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm lg:text-base opacity-80">Thursday</span>
                <span className="text-sm lg:text-base opacity-80">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm lg:text-base opacity-80">Friday</span>
                <span className="text-sm lg:text-base opacity-80">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm lg:text-base opacity-80">Saturday</span>
                <span className="text-sm lg:text-base opacity-80">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm lg:text-base opacity-80">Sunday</span>
                <span className="text-sm lg:text-base opacity-80">Closed</span>
              </div>
            </div>
            <p className="text-sm lg:text-base opacity-70 mt-3">
              *Available on bank holidays or public holidays, but please get in touch to confirm*
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">© 2026 MannBuild. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="/privacy" className="text-sm lg:text-base opacity-70 hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link href="/terms" className="text-sm lg:text-base opacity-70 hover:opacity-100 transition-opacity">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
