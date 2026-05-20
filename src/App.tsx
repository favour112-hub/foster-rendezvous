import React from "react";
import { Toaster } from "sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { BookingForm } from "./components/BookingForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Toaster position="top-center" theme="dark" richColors />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;