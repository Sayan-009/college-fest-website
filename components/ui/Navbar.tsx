'use client';

import { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { Home, Calendar, PartyPopper, Image } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? 'w-[70%] bg-white/90 shadow-lg backdrop-blur-sm py-2'
          : 'w-full bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600 transition-all duration-700 ease-out">Logo</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavItem href="/" icon={<Home size={20} />} text="Home" active />
              <NavItem href="/schedule" icon={<Calendar size={20} />} text="Schedule" />
              <NavItem href="/event" icon={<PartyPopper size={20} />} text="Event" />
              <NavItem href="/gallery" icon={<Image size={20} />} text="Gallery" />
            </div>
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  icon: ReactNode;
  text: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text, active = false }) => (
  <Link
    href={href}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 ease-out ${
      active
        ? 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'
        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
    }`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
