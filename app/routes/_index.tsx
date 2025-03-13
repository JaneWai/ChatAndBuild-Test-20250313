import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Mental Health Companion
          </h1>
          <p className="text-xl text-gray-600">
            A safe space to find support, guidance, and understanding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/chat"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Talk to Me</h2>
            <p className="text-gray-600">
              Share your thoughts and feelings in a safe, judgment-free space
            </p>
          </Link>

          <Link
            to="/mood"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Mood Tracker</h2>
            <p className="text-gray-600">
              Track your emotional well-being and identify patterns
            </p>
          </Link>

          <Link
            to="/guidance"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Daily Guidance</h2>
            <p className="text-gray-600">
              Receive positive affirmations and practical coping strategies
            </p>
          </Link>

          <Link
            to="/resources"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Help Resources</h2>
            <p className="text-gray-600">
              Access professional mental health resources and emergency contacts
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
