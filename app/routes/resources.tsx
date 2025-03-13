export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Emergency Resources
            </h1>
            <p className="text-red-600 font-medium">
              If you're having thoughts of suicide or experiencing a mental health crisis, please reach out:
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Crisis Hotlines
              </h2>
              <ul className="space-y-2">
                <li>
                  <strong>988 Suicide & Crisis Lifeline:</strong>
                  <br />
                  Call or text 988
                </li>
                <li>
                  <strong>Crisis Text Line:</strong>
                  <br />
                  Text HOME to 741741
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Find a Therapist
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.psychologytoday.com/us/therapists"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Psychology Today Therapist Finder
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.goodtherapy.org/find-therapist.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GoodTherapy Therapist Directory
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Additional Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.nami.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    National Alliance on Mental Illness (NAMI)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.samhsa.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Substance Abuse and Mental Health Services Administration
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800">
              Remember: This app is not a substitute for professional help. If you're experiencing severe symptoms or having thoughts of self-harm, please seek immediate professional assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
