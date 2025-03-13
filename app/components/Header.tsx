import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">MindfulCompanion</span>
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/chat" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Chat
            </Link>
            <Link to="/mood" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Mood
            </Link>
            <Link to="/guidance" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Guidance
            </Link>
            <Link to="/resources" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Resources
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
