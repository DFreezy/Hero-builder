import React, { useState } from "react";

//download videos and add to each day
export default function Challenges() {
  const [challenges, setChallenges] = useState([
    { id: 1, title: "10 Push-ups in public", unlocked: true, completed: false, url: "public/The Push-up Social Experiment (masked_mediator) - FitFix (360p, h264, youtube).mp4"},
    { id: 2, title: "Start a conversation with a stranger", unlocked: false, completed: false },
    { id: 3, title: "Give a genuine compliment to someone", unlocked: false, completed: false },
    { id: 4, title: "Go to a bar alone", unlocked: false, completed: false },
    { id: 5, title: "Join a group activity or class", unlocked: false, completed: false },
    {  id: 6, title: "Attend a social event alone", unlocked: false, completed: false },
    { id: 7, title: "Ask someone out for coffee", unlocked: false, completed: false },
    { id: 8, title: "Perform a random act of kindness", unlocked: false, completed: false },
    { id: 9, title: "Share a personal story with a group", unlocked: false, completed: false },
    { id: 10, title: "Give a public speech or presentation", unlocked: false, completed: false },
    { id: 11, title: "Host a small gathering or party", unlocked: false, completed: false },
    { id: 12, title: "Take a dance class", unlocked: false, completed: false },
    { id: 13, title: "Join a club or organization", unlocked: false, completed: false },
    { id: 14, title: "Volunteer for a community event", unlocked: false, completed: false },
    { id: 15, title: "Go on a group trip or outing", unlocked: false, completed: false },
    { id: 16, title: "Attend a networking event", unlocked: false, completed: false },
    { id: 17, title: "Start a blog or vlog", unlocked: false, completed: false },
    { id: 18, title: "Create and share art in public", unlocked: false, completed: false },
    { id: 19, title: "Join a public speaking club", unlocked: false, completed: false },
    { id: 20, title: "Organize a community project", unlocked: false, completed: false },
    { id: 21, title: "Take improv classes", unlocked: false, completed: false },
    { id: 22, title: "Participate in a flash mob", unlocked: false, completed: false },
    { id: 23, title: "Host a podcast", unlocked: false, completed: false },
    { id: 24, title: "Teach a class or workshop", unlocked: false, completed: false },
    { id: 25, title: "Run for a leadership position", unlocked: false, completed: false },
    { id: 26, title: "Organize a charity event", unlocked: false, completed: false },
    { id: 27, title: "Create a social media challenge", unlocked: false, completed: false },
    { id: 28, title: "Start a community garden", unlocked: false, completed: false },
    { id: 29, title: "Host a cultural exchange event", unlocked: false, completed: false },
    { id: 30, title: "Plan and lead a group hike", unlocked: false, completed: false },
  ]);

  const completeChallenge = (id) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((ch, index) => {
        if (ch.id === id) {
          return { ...ch, completed: true };
        }
        // unlock next challenge
        if (prevChallenges[index - 1]?.id === id) {
          return { ...ch, unlocked: true };
        }
        return ch;
      })
    );
  };

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
                onClick={() => completeChallenge(ch.id)}
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
