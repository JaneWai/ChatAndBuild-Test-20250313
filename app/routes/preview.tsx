export default function Preview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="mb-4 text-gray-900">
            Welcome to Your Safe Space
          </h1>
          <p className="text-xl text-gray-600 font-light">
            A gentle reminder that you're not alone on this journey.
          </p>
        </section>

        <section className="bg-white rounded-xl p-8 shadow-sm space-y-8">
          <div className="space-y-6 border-b pb-6">
            <h2 className="text-gray-800">Font Weights</h2>
            <div className="space-y-4">
              <p className="text-2xl font-light text-gray-700">Light Weight (300)</p>
              <p className="text-2xl font-normal text-gray-700">Normal Weight (400)</p>
              <p className="text-2xl font-medium text-gray-700">Medium Weight (500)</p>
            </div>
          </div>

          <div className="space-y-6 border-b pb-6">
            <h2 className="text-gray-800">Text Sizes</h2>
            <div className="space-y-4">
              <p className="text-xs text-gray-600">Extra Small Text (xs)</p>
              <p className="text-sm text-gray-600">Small Text (sm)</p>
              <p className="text-base text-gray-600">Base Text (base)</p>
              <p className="text-lg text-gray-600">Large Text (lg)</p>
              <p className="text-xl text-gray-600">Extra Large Text (xl)</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-gray-800">Paragraph Styles</h2>
            <div className="space-y-6">
              <p className="font-light text-gray-600">
                Light weight paragraph with improved letter spacing and line height.
                Notice how this text appears softer and more gentle on the eyes.
              </p>
              <p className="font-normal text-gray-600">
                Normal weight paragraph showing the default reading experience.
                This weight provides good readability for longer text sections.
              </p>
              <p className="font-medium text-gray-600">
                Medium weight paragraph demonstrating slightly stronger emphasis.
                Used sparingly for important information or highlights.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 shadow-sm">
          <blockquote className="border-l-4 border-blue-200 pl-4 italic text-xl font-light text-gray-600">
            "Sometimes the smallest step in the right direction ends up being the
            biggest step of your life."
          </blockquote>
        </section>
      </div>
    </div>
  );
}
