import { useState } from "react";

const MOODS = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😤", label: "Angry" },
  { emoji: "😰", label: "Anxious" },
  { emoji: "😴", label: "Tired" },
  { emoji: "🤗", label: "Grateful" },
];

export default function Mood() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            How are you feeling today?
          </h1>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {MOODS.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedMood === mood.label
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-200"
                }`}
              >
                <div className="text-4xl mb-2">{mood.emoji}</div>
                <div className="text-gray-700">{mood.label}</div>
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Would you like to share more about why you're feeling {selectedMood.toLowerCase()}?
              </h2>
              <textarea
                className="w-full h-32 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Write your thoughts here..."
              />
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Save Entry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
