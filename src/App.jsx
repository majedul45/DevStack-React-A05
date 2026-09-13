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


// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Technologies from "./components/Technologies";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <main>
//         <Hero />
//         <Technologies />
        
//         <section id="projects" className="anchor-section" aria-label="Projects" />
//         <section id="about" className="anchor-section" aria-label="About" />
//       </main>
//       <Footer />
//     </div>
//   );
// }


