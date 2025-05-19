import React from 'react';
    import { Toaster } from '@/components/ui/toaster';
    import WakuPayLandingPage from '@/pages/WakuPayLandingPage';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<WakuPayLandingPage />} />
          </Routes>
          <Toaster />
        </Router>
      );
    }

    export default App;