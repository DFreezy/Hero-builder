import React from "react";

export default function Records({ completedChallenges = [] }) {
  return (
    <div className="p-4 text-center bg-amber-100">
      <h1 className="text-2xl font-bold mb-4">Completed Challenges</h1>

      {completedChallenges.length === 0 ? (
        <p>No records yet! Go forth and earn your pie crust of glory!</p>
      ) : (
        completedChallenges.map((ch) => (
          <div key={ch.id} className="mb-6 border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{ch.title}</h2>
            {ch.url && (
              <video
                controls
                width="600"
                height="400"
                loop
                className="mx-auto my-4"
              >
                <source src={ch.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))
      )}
    </div>
  );
}
