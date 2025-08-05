import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import AppCard from "./components/AppCard";

function App() {
  const [apps, setApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);

  useEffect(() => {
    fetch("/data/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  return (
    <Layout>
      {!activeApp && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <AppCard key={i} {...app} onSelect={() => setActiveApp(app)} />
          ))}
        </div>
      )}

      {activeApp && (
        <div className="relative h-[80vh] border border-white/20 rounded-lg overflow-hidden">
          <button
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full z-10"
            onClick={() => setActiveApp(null)}
          >
            ✖ Cerrar
          </button>

          <iframe
            key={activeApp.url}
            src={activeApp.url}
            title={activeApp.nombre}
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}
    </Layout>
  );
}

export default App;
