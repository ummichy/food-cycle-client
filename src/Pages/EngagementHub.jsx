import { FaLightbulb, FaHandsHelping, FaLeaf, FaRegCalendarAlt, FaBookOpen } from "react-icons/fa";

export default function EngagementHub() {
  const activities = [
    {
      icon: <FaHandsHelping />,
      title: "Daily Donation Challenge",
      description: "Pick one item from your fridge each day and donate it. Track your impact in a personal log."
    },
    {
      icon: <FaLeaf />,
      title: "Reduce Food Waste",
      description: "Keep a small journal of leftovers and plan meals to minimize waste effectively."
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Weekly Reflection",
      description: "Reflect on your donation habits weekly. Ask: Did I donate safely and on time?"
    },
    {
      icon: <FaBookOpen />,
      title: "Learn & Share",
      description: "Research local food banks or NGOs and share best practices with friends and family."
    },
    {
      icon: <FaLightbulb />,
      title: "Create a Habit",
      description: "Set recurring reminders to check your pantry. Small habits lead to bigger community impact."
    },
  ];

  return (
    <div className="bg-black mt-24 min-h-screen py-20 px-6 text-white font-sans">

      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold tracking-wide text-yellow-300">Engage & Learn: Food Donation Hub</h2>
        <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
          Go beyond the quiz. Explore interactive challenges, tips, and reflection exercises to improve your food donation practices.
        </p>
      </div>

      {/* Activities */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  mt-16">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className="group relative p-8 rounded-3xl border border-gray-700 flex flex-col items-start space-y-4 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:border-yellow-300"
          >
            <div className="text-yellow-300 text-5xl mb-2 transition-transform duration-500 group-hover:rotate-12">{act.icon}</div>
            <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-300">{act.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{act.description}</p>
            <div className="absolute inset-0 bg-yellow-400/10 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Reflection & Tips in one row */}
      <div className="flex flex-col lg:flex-row ml-12 gap-12 mt-20">
        
        {/* Reflection Questions */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-yellow-300 tracking-wide">Reflection Questions</h3>
          <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Weekly reflection helps improve your donation habits. Answer these honestly to track your progress.
          </p>
          <ul className="list-disc list-inside text-gray-400 max-w-xl mx-auto lg:mx-0 space-y-3 text-left text-lg">
            <li>Did I check the expiry dates and quality of the food I donated?</li>
            <li>Did I donate regularly, or only occasionally?</li>
            <li>What can I do to reduce food waste at home?</li>
            <li>Did I encourage others to donate responsibly?</li>
          </ul>
        </div>

        {/* Actionable Tips */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-yellow-300 tracking-wide">Actionable Tips</h3>
          <div className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 space-y-4 leading-relaxed">
            <p>• Keep perishables and non-perishables separate to maintain freshness.</p>
            <p>• Label all food items with preparation date and storage instructions.</p>
            <p>• Donate regularly instead of one-time contributions to create real impact.</p>
            <p>• Share knowledge with friends and family to encourage responsible donations.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
