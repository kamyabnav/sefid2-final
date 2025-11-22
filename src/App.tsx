import { useState } from 'react';
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
import Footer from './components/Footer';
import GetStartedPage from './components/GetStarted';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStartedClick={() => setCurrentPage('getstarted')} />
      {currentPage === 'home' ? (
        <>
          <main className="pt-16">
            <Hero onGetStartedClick={() => setCurrentPage('getstarted')} />
            <Offer onGetStartedClick={() => setCurrentPage('getstarted')} />
            <Problem />
            <Solution />
            <SocialProof />
            <HowItWorks />
            <Trust />
            <About />
            <FinalCTA onGetStartedClick={() => setCurrentPage('getstarted')} />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <main className="pt-16">
            <GetStartedPage />
          </main>
          <Footer />
          <div className="fixed bottom-8 left-8 z-40">
            <button
              onClick={() => setCurrentPage('home')}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
