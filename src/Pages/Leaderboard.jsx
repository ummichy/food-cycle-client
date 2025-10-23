import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    fetch("https://assignment-no-eleven-server.vercel.app/leaderboard")
      .then((res) => res.json())
      .then((data) => {
        setLeaders(data.slice(0, 11));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading leaderboard:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500">
        <p className="text-xl font-semibold text-gray-200 animate-pulse">
          Loading leaderboard...
        </p>
      </div>
    );
  }

  if (leaders.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500">
        <p className="text-lg text-gray-200">No donations yet.</p>
      </div>
    );
  }

  const topLeader = leaders[0];
  const otherLeaders = leaders.slice(1);

  const getBadge = (index) => {
    if (index === 0) return { emoji: "🥇", bg: "bg-yellow-400" };
    if (index === 1) return { emoji: "🥈", bg: "bg-gray-400" };
    // if (index === 2) return { emoji: "🥉", bg: "bg-orange-500" };
    return null;
  };

  return (
    <section className="min-h-screen py-24 px-6 md:px-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      {/* Title & Description */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-100 animate-gradient-x drop-shadow-lg">
          Honoring Our Generous Donors
        </h1>
        <p className="mt-3 text-gray-300 text-md md:text-lg">
          Celebrating the individuals who fuel positive change in our community with their extraordinary generosity.
        </p>
      </div>

      {/* Top Donor (spans two columns visually) */}
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto mb-10 relative p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300 flex justify-between items-center"
      >
        <div className="text-left space-y-2 md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
            {topLeader.donorName}
          </h2>
          <p className="text-sm text-gray-300 truncate">{topLeader._id}</p>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Total Donations</p>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-100">
            {topLeader.totalDonations}
          </p>
        </div>
        <div className="px-6 py-3 rounded-full font-bold text-white text-3xl shadow-glow bg-yellow-400">
          🥇
        </div>
      </div>

      {/* Other Donors */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
        {otherLeaders.map((leader, index) => {
          const badge = getBadge(index);
          return (
            <div
              key={leader._id}
              data-aos="fade-up"
              className="relative p-4 md:p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-md hover:scale-105 transition-transform duration-300 flex justify-between items-center"
            >
              <div className="text-left space-y-1">
                <h2 className="text-xl md:text-2xl font-bold text-gray-100">{leader.donorName}</h2>
                <p className="text-xs text-gray-300 truncate">{leader._id}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Total Donations</p>
                <p className="text-2xl md:text-3xl font-extrabold text-gray-100">{leader.totalDonations}</p>
              </div>
              {badge && (
                <div className={`px-4 py-2 rounded-full font-bold text-white text-xl shadow-glow ${badge.bg}`}>
                  {badge.emoji}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .shadow-glow {
          box-shadow: 0 0 16px rgba(255,255,255,0.4), 0 0 28px rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
}
