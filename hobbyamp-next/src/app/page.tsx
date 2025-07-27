"use client";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

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

const slides = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhZmV8ZW58MHx8MHx8fDA%3D",
];

export default function Home() {
  const [result, setResult] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const displayResult = (place: string) => {
    setResult(place);
    
    confetti({
      particleCount: 50,
      spread: 45,
      origin: { y: 0.6 },
      colors: ["#000000", "#333333", "#666666"],
      gravity: 1,
      scalar: 0.8,
    });

    setTimeout(() => setResult(""), 6000);
  };

  const getRandomChoice = (list: string[]) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="pt-16 pb-8 px-8">
        <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-center text-4xl font-light tracking-tight mb-6">
            Hey there, where are you dining or relaxing today?
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Choose your preference and discover your next culinary destination.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-8">
        <div className={`w-full max-w-md space-y-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            className="w-full py-6 px-8 border border-gray-200 hover:border-black transition-all duration-300 group"
            onClick={() => displayResult(getRandomChoice(restaurants))}
          >
            <div className="text-left">
              <div className="text-lg font-medium mb-1 group-hover:translate-x-2 transition-transform duration-300">
                Restaurant
              </div>
              <div className="text-sm text-gray-500">
                Fine dining & casual eats
              </div>
            </div>
          </button>

          <button
            className="w-full py-6 px-8 border border-gray-200 hover:border-black transition-all duration-300 group"
            onClick={() => displayResult(getRandomChoice(cafes))}
          >
            <div className="text-left">
              <div className="text-lg font-medium mb-1 group-hover:translate-x-2 transition-transform duration-300">
                Café
              </div>
              <div className="text-sm text-gray-500">
                Coffee & light bites
              </div>
            </div>
          </button>

          <button
            className="w-full py-6 px-8 bg-black text-white hover:bg-gray-800 transition-all duration-300 group"
            onClick={() => displayResult(getRandomChoice([...restaurants, ...cafes]))}
          >
            <div className="text-left">
              <div className="text-lg font-medium mb-1 group-hover:translate-x-2 transition-transform duration-300">
                Surprise me
              </div>
              <div className="text-sm text-gray-300">
                Let us choose for you
              </div>
            </div>
          </button>
        </div>

        {/* Result Display */}
        <div className="h-16 flex items-center justify-center mb-12">
          <div className={`text-2xl font-light transition-all duration-500 ${result ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {result && (
              <span className="border-b-2 border-black pb-1">
                {result}
              </span>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        <div className={`relative w-full max-w-2xl h-80 overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Dining atmosphere ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === activeSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-gray-400 font-light">
            Nairobi's finest dining experiences
          </p>
        </div>
      </footer>
    </div>
  );
}