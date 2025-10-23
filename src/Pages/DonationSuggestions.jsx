import { useState } from "react";
import { FaLightbulb, FaSmile, FaRegSadTear } from "react-icons/fa";

export default function PremiumQuiz() {
  const questions = [
    {
      question: "What should you check before donating food?",
      options: ["Expiry date", "Packaging", "Quality of food", "All of the above"],
      answer: 3,
      suggestion: "Always check expiry, packaging, and quality before donating."
    },
    {
      question: "How can you help reduce food waste?",
      options: ["Donate excess food", "Throw food away", "Store food improperly", "Ignore leftovers"],
      answer: 0,
      suggestion: "Donating excess food regularly helps reduce waste."
    },
    {
      question: "Who benefits from food donation?",
      options: ["Needy people", "Community", "Environment", "All of the above"],
      answer: 3,
      suggestion: "Donations benefit everyone: people, community, and environment."
    },
    {
      question: "Which items should NOT be donated?",
      options: ["Expired food", "Fresh fruits", "Packaged snacks", "Bottled water"],
      answer: 0,
      suggestion: "Never donate expired or spoiled food."
    },
    {
      question: "Which type of food is ideal for donation?",
      options: ["Freshly cooked", "Packaged non-perishable", "Spoiled leftovers", "Expired products"],
      answer: 1,
      suggestion: "Packaged non-perishable foods are safest for donation."
    },
    {
      question: "How often should you check your fridge for donation?",
      options: ["Every day", "Once a week", "Once a month", "Never"],
      answer: 1,
      suggestion: "Check your fridge weekly for items that can be donated."
    },
    {
      question: "What increases the impact of donation?",
      options: ["Donating regularly", "Donating once a year", "Ignoring requests", "Donating spoiled food"],
      answer: 0,
      suggestion: "Regular donations maximize the positive impact."
    },
    {
      question: "Why is donating excess food important?",
      options: ["Reduce hunger", "Reduce waste", "Help environment", "All of the above"],
      answer: 3,
      suggestion: "Donations address hunger, reduce waste, and benefit the environment."
    },
    {
      question: "Which of these is unsafe for donation?",
      options: ["Bottled water", "Packaged snacks", "Expired milk", "Fresh vegetables"],
      answer: 2,
      suggestion: "Expired dairy and perishable items should never be donated."
    },
    {
      question: "How should you store food before donation?",
      options: ["Keep at room temperature", "Properly refrigerated", "Leave outside", "Mix with garbage"],
      answer: 1,
      suggestion: "Keep perishable food properly refrigerated before donation."
    },
  ];

  const [current, setCurrent] = useState(0);
  const [wrongSuggestions, setWrongSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleOptionClick = (index) => {
    const question = questions[current];
    if (index !== question.answer) {
      setWrongSuggestions([...wrongSuggestions, question.suggestion]);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-r from-[#3B1F2B] via-[#5C3A4D] to-[#9E8C95] text-white rounded-2xl shadow-2xl space-y-8">
      
      {/* --- Title & Description --- */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Food Donation Awareness Quiz</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Test your knowledge about responsible food donation. Learn how to make a greater impact by donating safely and efficiently. Select the correct answers and get personalized suggestions at the end.
        </p>
      </div>

      {!showSuggestions ? (
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold border-b border-gray-700 pb-2">
            Question {current + 1} of {questions.length}
          </h2>
          <p className="text-xl">{questions[current].question}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {questions[current].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 text-left font-medium"
              >
                <FaLightbulb className="text-gray-400" /> {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">Quiz Completed!</h2>
          {wrongSuggestions.length === 0 ? (
            <p className="text-green-400 flex items-center justify-center gap-3 text-lg">
              <FaSmile className="text-gray-100" /> Excellent! You answered all questions correctly.
            </p>
          ) : (
            <div className="space-y-4">
              <p className="text-yellow-400 flex items-center justify-center gap-3 text-lg">
                <FaRegSadTear className="text-gray-100" /> Suggestions for improvement:
              </p>
              <ul className="list-disc list-inside text-gray-300 max-w-lg mx-auto space-y-2 text-left">
                {wrongSuggestions.map((sug, idx) => (
                  <li key={idx} className="border-l-2 border-gray-600 pl-3">{sug}</li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-gray-400 mt-4 text-lg">
            Keep learning and donating responsibly to make a bigger impact!
          </p>
        </div>
      )}
    </div>
  );
}
