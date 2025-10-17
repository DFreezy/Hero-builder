import React from "react";

export default function Records({ completedChallenges = [], onReset, coins }) {
  return (
    <div className="p-4 text-center bg-amber-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Completed Challenges 🏅</h1>
      <p className="mb-4 text-yellow-800 font-semibold">Total Coins: 💰 {coins}</p>

      {completedChallenges.length === 0 ? (
        <p>No records yet! Start your confidence journey today!</p>
      ) : (
        completedChallenges.map((ch) => (
          <div key={ch.id} className="mb-6 border p-4 rounded-lg bg-white shadow-md">
            <h2 className="text-xl font-semibold mb-2">{ch.title}</h2>
            {ch.url && (
              <video controls className="mx-auto my-4 w-60 h-40 rounded-lg shadow-lg">
                <source src={ch.url} type="video/mp4" />
              </video>
            )}
          </div>
        ))
      )}

      {completedChallenges.length > 0 && (
        <button onClick={onReset} className="mt-6 bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded">
          Reset Progress
        </button>
      )}
    </div>
  );
}
