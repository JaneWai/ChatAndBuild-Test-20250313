import { useState } from "react";

const AFFIRMATIONS = [
  "You are stronger than you know",
  "This moment is temporary",
  "You deserve peace and happiness",
  "Take it one step at a time",
  "Your feelings are valid",
  "You are not alone in this journey",
];

const STRATEGIES = [
  {
    title: "Deep Breathing",
    description: "Take 5 deep breaths, counting to 4 on inhale and 6 on exhale",
  },
  {
    title: "Grounding Exercise",
    description: "Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste",
  },
  {
    title: "Progressive Relaxation",
    description: "Tense and relax each muscle group, starting from your toes up to your head",
  },
];

export default function Guidance() {
  const [currentAffirmation] = useState(() => 
    AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)]
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Today's Affirmation
            </h2>
            <p className="text-xl text-blue-600 italic">
              "{currentAffirmation}"
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Coping Strategies
            </h2>
            <div className="grid gap-6">
              {STRATEGIES.map((strategy) => (
                <div
                  key={strategy.title}
                  className="border rounded-lg p-6 text-left hover:border-blue-500 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
