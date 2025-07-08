"use client";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import "./globals.css";

const restaurants = [
  "Carnivore", "Talisman", "Urban Eatery", "Lord Delamere Terrace",
  "Lucca Restaurant", "Tamarind Nairobi", "Mawimbi Seafood Restaurant",
  "About Thyme", "Fogo Gaucho", "Nyama Mama", "Mercado - Mexican Kitchen and Bar",
  "Seven Seafood & Grill", "Mediterraneo Ristorante", "Baluba Restaurant", "Tin Roof Café Karen"
];

const cafes = [
  "Artcaffe", "Java House", "CJ's", "News Cafe", "Wasp & Sprout",
  "Le Grenier à Pain", "Connect Coffee Roasters", "Zucchini Greengrocers & Coffee Shop",
  "Pallet Cafe", "Coffee Casa", "River Cafe", "Point Zero Cafe",
  "Kaldis Coffee House", "Kesh Kesh Coffee House", "Boho Eatery"
];

// Free Unsplash images:
const slides = [
  "https://unsplash.com/photos/a-room-filled-with-furniture-and-lots-of-windows-sYpq2Fhy4mY",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhZmV8ZW58MHx8MHx8fDA%3D",
];

export default function Home() {
  const [result, setResult] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload all images on mount
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Slide change interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Reset image loading state on slide change
  useEffect(() => {
    setImageLoaded(false);
  }, [activeSlide]);

  const displayResult = (place: string, type: "restaurant" | "cafe" | "surprise") => {
    const emojis = { restaurant: "🍽️", cafe: "☕", surprise: "✨" };
    setResult(`${emojis[type]} ${place}`);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#8b4513", "#cd853f", "#6b8e23", "#a0522d", "#daa520"],
      gravity: 0.8,
      scalar: 1.1,
    });

    setTimeout(() => setResult(""), 7000);
  };

  const getRandomChoice = (list: string[]) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-rose-100 to-lime-100 text-gray-800 p-8">
    
      <p className="text-center max-w-xl mb-8 text-lg">
        Can't decide where to dine today? Choose your preference below and let us guide you to the perfect culinary adventure.
      </p>

      <div className="flex flex-col gap-6 w-full max-w-md mb-10">
        <button
          className="bg-white bg-opacity-70 backdrop-blur-md border border-amber-500 text-amber-800 rounded-2xl p-5 shadow-lg hover:scale-105 hover:bg-opacity-80 transition-all"
          onClick={() => displayResult(getRandomChoice(restaurants), "restaurant")}
        >
          Restaurant
          <div className="text-xs opacity-70">Fine dining & casual eats</div>
        </button>

        <button
          className="bg-white bg-opacity-70 backdrop-blur-md border border-lime-500 text-lime-800 rounded-2xl p-5 shadow-lg hover:scale-105 hover:bg-opacity-80 transition-all"
          onClick={() => displayResult(getRandomChoice(cafes), "cafe")}
        >
          Cafe
          <div className="text-xs opacity-70">Coffee & light bites</div>
        </button>

        <button
          className="bg-white bg-opacity-70 backdrop-blur-md border border-rose-500 text-rose-800 rounded-2xl p-5 shadow-lg hover:scale-105 hover:bg-opacity-80 transition-all"
          onClick={() => displayResult(getRandomChoice([...restaurants, ...cafes]), "surprise")}
        >
          Surprise Me
        </button>
      </div>

      <div className="min-h-[60px] text-center text-lg mb-8">
        {result || "Make your choice above to discover your destination"}
      </div>

      <div className="relative w-full max-w-lg h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
        <img
          src={slides[activeSlide]}
          alt="Slide"
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
