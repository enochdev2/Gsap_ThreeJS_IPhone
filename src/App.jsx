import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';


const Models = React.lazy(() => import('./components/Model'));
const  HowItWork = React.lazy(()=> import("./components/HowItWorks"));
const  Feature = React.lazy(()=> import("./components/Features"));

// import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />

      <Suspense fallback={<div>Loading...</div>}>
        <Models />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
      <Feature />
      </Suspense>


      <Suspense fallback={<div>Loading...</div>}>
        <HowItWork />
      </Suspense>
      <Footer />
    </main>
  )
}

export default App;
// export default Sentry.withProfiler(App);
