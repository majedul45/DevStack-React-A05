import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Technologies />
      </main>
    </div>
  );
}
