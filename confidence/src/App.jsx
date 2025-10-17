import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Records from "./pages/records";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Challenges from "./pages/challenges";
import Motivation from "./pages/motivation"; // new page

function App() {
  const initialChallenges = [
    { id: 1, title: "10 Push-ups in public", unlocked: true, completed: false, url: "/pushup.mp4" },
    { id: 2, title: "Start a conversation with a stranger", unlocked: false, completed: false, url: "/Talktostranger.mp4" },
    { id: 3, title: "Give a genuine compliment to someone", unlocked: false, completed: false },
    { id: 4, title: "Go to a bar alone", unlocked: false, completed: false },
    { id: 5, title: "Join a group activity or class", unlocked: false, completed: false },
    { id: 6, title: "Attend a social event alone", unlocked: false, completed: false },
    { id: 7, title: "Ask someone out for coffee", unlocked: false, completed: false },
    { id: 8, title: "Perform a random act of kindness", unlocked: false, completed: false },
    { id: 9, title: "Share a personal story with a group", unlocked: false, completed: false },
    { id: 10, title: "Give a public speech or presentation", unlocked: false, completed: false },
  ];

  // Load from localStorage
  const [challenges, setChallenges] = useState(() => {
    const saved = localStorage.getItem("challenges");
    return saved ? JSON.parse(saved) : initialChallenges;
  });

  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem("coins");
    return saved ? JSON.parse(saved) : 0;
  });

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("challenges", JSON.stringify(challenges));
  }, [challenges]);

  useEffect(() => {
    localStorage.setItem("coins", JSON.stringify(coins));
  }, [coins]);

  // Handle challenge completion
  const completeChallenge = (id) => {
    setChallenges((prev) =>
      prev.map((ch, index) => {
        if (ch.id === id) {
          setCoins((c) => c + 10); // earn 10 coins per challenge
          return { ...ch, completed: true };
        }
        if (prev[index - 1]?.id === id) {
          return { ...ch, unlocked: true };
        }
        return ch;
      })
    );
  };

  const completedChallenges = challenges.filter((ch) => ch.completed);

  // Reset all progress
  const resetProgress = () => {
    localStorage.removeItem("challenges");
    localStorage.removeItem("coins");
    setChallenges(initialChallenges);
    setCoins(0);
  };

  return (
    <BrowserRouter>
      <Navbar coins={coins} />
      <main className="min-h-screen bg-amber-50 text-center p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route
            path="/records"
            element={
              <Records
                completedChallenges={completedChallenges}
                onReset={resetProgress}
                coins={coins}
              />
            }
          />
          <Route
            path="/challengeApp"
            element={
              <Challenges
                challenges={challenges}
                onComplete={completeChallenge}
                coins={coins}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
