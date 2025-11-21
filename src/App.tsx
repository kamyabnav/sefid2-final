import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <SocialProof />
        <Offer />
        <HowItWorks />
        <Trust />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
