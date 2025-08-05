import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Layout from './components/Layout'
import AppCard from './components/AppCard'
import useAppSounds from "./components/hooks/useAppSounds";

function App() {
  const [apps, setApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);

  const { playSlide, playPass } = useAppSounds(); // SE USAN LOS SONIDOS

  useEffect(() => {
    fetch("/data/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const abrirApp = (app) => {
    playSlide();
    setActiveApp(app);
  };

  const cerrarApp = () => {
    playPass();
    setActiveApp(null);
  };

  return (
    <Layout>
      {!activeApp && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <AppCard key={i} {...app} onSelect={() => abrirApp(app)} />
          ))}
        </div>
      )}

      {activeApp && (
        <div className="relative h-[80vh] border border-white/20 rounded-lg overflow-hidden">
          <button
            className="absolute top-1 right-4 bg-gray-300 hover:bg-red-300 text-white px-3 py-1 rounded-full z-10"
            onClick={cerrarApp}
          >
            ⮌
          </button>

          <motion.iframe
            key={activeApp.url}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            src={activeApp.url}
            title={activeApp.nombre}
            className="w-full h-full border-none"
          />
        </div>
      )}
    </Layout>
  );
}

export default App;
