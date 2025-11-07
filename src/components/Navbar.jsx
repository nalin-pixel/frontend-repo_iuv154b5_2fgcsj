import { Link, NavLink } from 'react-router-dom';
import { Briefcase, Users, Shield, Home } from 'lucide-react';

export default function Navbar() {
  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-blue-500 grid place-items-center text-white">
              <Briefcase size={18} />
            </div>
            <span className="font-semibold tracking-tight">Recruiter Workflow</span>
          </Link>

          <nav className="flex items-center gap-1">
            <NavLink
              to="/recruiter"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              <Users className="inline mr-2" size={16} /> Recruiter
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              <Shield className="inline mr-2" size={16} /> Admin
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              <Home className="inline mr-2" size={16} /> Home
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
