import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Habilidades/Hero";
import Habilidades from "./components/Habilidades/Habilidades";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
          <section className="flex flex-col gap-16">
            <Hero />
            <Habilidades />
          </section>
        </div>
      </main>
    </div>
  )
}

