import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroGate from './components/HeroGate';
import MainWorkspace from './components/MainWorkspace';

function App() {
  const [showWorkspace, setShowWorkspace] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!showWorkspace && (
          <HeroGate onEnter={() => setShowWorkspace(true)} />
        )}
      </AnimatePresence>

      {showWorkspace && (
        <MainWorkspace />
      )}
    </>
  );
}

export default App;
