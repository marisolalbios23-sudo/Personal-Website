import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {location.pathname !== '/' && (
              <Link
                to="/"
                className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors duration-200 flex items-center gap-2 group"
                aria-label="Back to Home"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium hidden sm:block">Back Home</span>
              </Link>
            )}
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-xl font-serif font-bold text-slate-900 tracking-tight">
              MyProfile
            </Link>
          </div>
          {/* Spacer to balance the flex layout if needed, or add right-side actions here */}
          <div className="w-20 flex justify-end">
            <Link to="/" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
               <Home className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-4">{title}</h1>
          {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
          <div className="h-1 w-24 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} My Personal Website. Designed with passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;