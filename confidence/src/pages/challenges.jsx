import React from "react";

export default function Challenges({ challenges, onComplete }) {
  return (
    <div>
      <div className="p-4 text-center text-2xl font-bold bg-amber-200">
        <h1>Challenges</h1>
        <p>Complete challenges to earn points and level up!</p>
      </div>

      <div className="p-4">
        {challenges.map((ch) => (
          <div
            key={ch.id}
            className="p-4 my-2 border rounded-lg flex justify-between items-center"
          >
            <span>
              {ch.title}{" "}
              {ch.completed && <span className="text-green-600">✅</span>}
              {!ch.unlocked && <span className="text-gray-400"> 🔒</span>}
            </span>

            {ch.url && (
              <video width="300" height="200" controls className="mx-auto my-4">
                <source src={ch.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {ch.unlocked && !ch.completed && (
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded"
                onClick={() => onComplete(ch.id)}
              >
                Complete
              </button>
            )}

            {ch.completed && (
              <button className="bg-gray-300 text-black px-4 py-1 rounded" disabled>
                Done
              </button>
            )}

            {!ch.unlocked && (
              <button className="bg-gray-200 text-gray-500 px-4 py-1 rounded" disabled>
                Locked
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
