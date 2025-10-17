import React, { useState, useEffect } from "react";

const quotes = [
  "Confidence comes not from always being right but from not fearing to be wrong.",
  "You gain strength, courage, and confidence by every experience in which you stop to look fear in the face.",
  "Believe in yourself and you will be unstoppable.",
  "Each small step you take builds your courage.",
  "Don’t wait for confidence to come — create it with action.",
];

export default function Motivation() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(random);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 text-center bg-gradient-to-b from-amber-100 to-amber-300 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Daily Motivation 🌟</h1>
      <blockquote className="text-xl italic text-gray-800 bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-xl">
        “{quote}”
      </blockquote>
      <p className="mt-6 text-gray-600">New quote every 5 seconds 💬</p>
    </div>
  );
}
