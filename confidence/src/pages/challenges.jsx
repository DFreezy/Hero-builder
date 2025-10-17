import React, { useState, useEffect } from "react";

export default function Challenges({ challenges, onComplete, coins }) {
  const [showModal, setShowModal] = useState(false);
  const [completedTitle, setCompletedTitle] = useState("");

  const completedCount = challenges.filter((ch) => ch.completed).length;
  const progress = Math.round((completedCount / challenges.length) * 100);

  const handleComplete = (id) => {
    const challenge = challenges.find((ch) => ch.id === id);
    setCompletedTitle(challenge.title);
    setShowModal(true);
    onComplete(id);
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="p-4 text-center text-2xl font-bold bg-amber-200 shadow">
        <h1>Confidence Challenges 💪</h1>
        <p className="text-gray-700">Earn coins and unlock confidence one step at a time!</p>
      </div>

      {/* Progress Bar */}
      <div className="w-11/12 mx-auto mt-6">
        <div className="w-full bg-gray-300 rounded-full h-5 overflow-hidden shadow-inner">
          <div className="bg-green-500 h-5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-center mt-2 text-gray-700 font-semibold">
          {progress}% Complete ({completedCount}/{challenges.length}) | 💰 {coins} Coins
        </p>
      </div>

      {/* Challenge Cards */}
      <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {challenges.map((ch) => (
          <div key={ch.id} className="p-4 border rounded-lg shadow-md flex flex-col items-center bg-white">
            <span className="text-lg font-semibold mb-2 text-center">
              {ch.title} {ch.completed && <span className="text-green-600">✅</span>} {!ch.unlocked && <span className="text-gray-400"> 🔒</span>}
            </span>
            {ch.url && (
              <video controls className="rounded-lg shadow-md w-full h-auto mb-3 object-cover">
                <source src={ch.url} type="video/mp4" />
              </video>
            )}
            {ch.unlocked && !ch.completed && (
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2" onClick={() => handleComplete(ch.id)}>
                Complete
              </button>
            )}
            {ch.completed && <button className="bg-gray-300 text-black px-4 py-2 rounded mt-2" disabled>Done</button>}
            {!ch.unlocked && <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded mt-2" disabled>Locked</button>}
          </div>
        ))}
      </div>

      {/* Completion Modal */}
      {showModal && (
        <dialog open className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl w-96 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-3">Challenge Complete! 🎉</h2>
            <p className="text-gray-700 mb-2">You completed:</p>
            <p className="font-semibold mb-4 text-lg">{completedTitle}</p>
            <p className="text-yellow-600 font-semibold">💰 +10 Coins earned!</p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={() => setShowModal(false)}>Continue</button>
          </div>
        </dialog>
      )}
    </div>
  );
}
