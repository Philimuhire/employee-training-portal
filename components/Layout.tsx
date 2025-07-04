'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/all-courses', label: 'All Courses' },
    { href: '/my-learning', label: 'My Learning' },
  ];

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-md" role="banner">
        <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-500 hover:text-blue-600 transition-colors duration-200"
            aria-label="Elevate Training Portal Home"
          >
            ElevateTrainingPortal 
          </Link>

          <nav className="hidden md:flex space-x-4" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActiveLink(link.href)
                    ? 'text-blue-500 bg-blue-50'
                    : 'text-gray-800 hover:text-blue-600 hover:bg-gray-100'
                }`}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-800 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActiveLink(link.href)
                      ? 'text-blue-500 bg-blue-50'
                      : 'text-gray-800 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 max-w-screen-lg mx-auto w-full px-4 py-8">
        {children}
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="max-w-screen-lg mx-auto px-4 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Elevate Training Portal | Developed by Philbert Muhire
        </div>
      </footer>
    </div>
  );
}