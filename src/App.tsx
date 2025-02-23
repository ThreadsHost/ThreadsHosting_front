import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MinecraftPlans from './components/Minecraft-Hosting';

function App() {
  // Obtener el subdominio
  const subdomain = window.location.hostname.split('.')[0];

  return (
    <Router>
      <Routes>
        {subdomain === "minecraft" ? (
          <Route path="*" element={<MinecraftPlans />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/minecraft" element={<MinecraftPlans />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
