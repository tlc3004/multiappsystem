import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Layout from './components/Layout'
import AppCard from './components/AppCard'
import useAppSounds from "./hooks/useAppSounds";

function App() {
  const [apps, setApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);

  const { playElectric, playArcade } = useAppSounds(); 

  useEffect(() => {
    fetch("/data/apps.json")
      .then((res) => res.json())
      .then((data) => {
        console.log('Apps cargadas:', data);
        setApps(data);
      });
  }, []);

  const abrirApp = (app, setFullscreen) => {
    playElectric();
    setActiveApp(app);
    setFullscreen(true); 
  };

  const cerrarApp = (setFullscreen) => {
    playArcade();
    setActiveApp(null);
    setFullscreen(false); 
  };

  return (
    <Layout>
      {({ setFullscreen }) => (
        <>
          {!activeApp && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {apps.map((app, i) => (
                <AppCard key={i} {...app} onSelect={() => abrirApp(app, setFullscreen)} />
              ))}
            </div>
          )}

          {activeApp && (
            <div className="fixed inset-0 z-50 bg-black">
              <button
                className="absolute top-3 right-4 bg-gray-700 hover:bg-red-500 px-3 py-1 rounded-full text-white z-10"
                onClick={() => cerrarApp(setFullscreen)}
              >
                ⮌
              </button>

              <motion.iframe
                key={activeApp.url}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                src={activeApp.url}
                title={activeApp.nombre}
                className="w-screen h-screen border-none"
              />
            </div>
          )}
        </>
      )}
    </Layout>
  );
}

export default App;
