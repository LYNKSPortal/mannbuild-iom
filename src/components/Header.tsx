'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const pathname = usePathname();

  const [logoRef, logoVisible] = useIntersectionObserver();
  const [navRef, navVisible] = useIntersectionObserver();

  const handleCloseMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 300);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Finance', href: '/finance' },
    { label: 'Merch', href: '/merch' }
  ];

  return (
    <header className="bg-[#00452a] text-white">
      <div className="w-full px-8">
        <div className={`flex items-center justify-between h-32 animate-on-scroll ${logoVisible ? 'animated' : ''}`}>
          {/* Left - Logo and Menu */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div ref={logoRef} className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src="/branding/Asset 22.png"
                  alt="MannBuild"
                  width={400}
                  height={125}
                  className="h-auto w-full max-w-[250px] md:max-w-none"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div ref={navRef} className={`hidden 2xl:flex items-center animate-on-scroll animate-scroll-delay-100 ${navVisible ? 'animated' : ''}`}>
              <nav className="flex items-center space-x-8">
                {navLinks.filter(link => link.label !== 'Home').map((link, index) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`body-text uppercase tracking-wide transition-colors hover:opacity-70 animate-on-scroll animate-scroll-delay-${(index + 2) * 100} ${navVisible ? 'animated' : ''} ${
                      pathname === link.href ? 'border-b border-white' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Right - Buttons and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Buttons */}
            <div className="hidden 2xl:flex items-center space-x-4">
              <button className="text-white px-6 py-2 body-text font-medium uppercase tracking-wide hover:opacity-70 transition-opacity flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                07624 435430
              </button>
              <Link href="/contact" className="bg-white text-[#00452a] px-6 py-2 body-text font-medium uppercase tracking-wide hover:opacity-90 transition-opacity">
                Get Quote
              </Link>
            </div>
            
            {/* Mobile/Tablet Menu Button */}
            <div className="flex items-center 2xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-2 text-white flex items-center space-x-2 body-text font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Full Page Menu */}
        {(isMenuOpen || isMenuClosing) && (
          <div className={`fixed inset-0 bg-[#00452a] z-[9999] flex flex-col items-center justify-center 2xl:hidden ${isMenuClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
            {/* Close Button */}
            <button
              onClick={handleCloseMenu}
              className="absolute top-8 right-8 text-white hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* All Menu Options */}
            <div className="text-center space-y-8">
              {/* Navigation Links */}
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleCloseMenu}
                  className="block text-[20px] font-light uppercase tracking-wide hover:opacity-70 transition-opacity"
                  style={{ 
                    color: 'white !important',
                    textShadow: '0 0 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Phone Button */}
              <button className="text-white text-[20px] font-light uppercase tracking-wide hover:opacity-70 transition-opacity flex items-center justify-center"
                      style={{ 
                        color: 'white !important',
                        textShadow: '0 0 2px rgba(0,0,0,0.5)'
                      }}>
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                07624 435430
              </button>
              
              {/* Get Quote Button */}
              <Link 
                href="/contact" 
                onClick={handleCloseMenu}
                className="inline-block bg-white text-[#00452a] px-8 py-4 text-[20px] font-medium uppercase tracking-wide hover:opacity-90 transition-opacity"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
