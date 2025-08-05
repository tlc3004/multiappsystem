export default function AppCard({ nombre, logo, onSelect }) {
   console.log("Props recibidas por AppCard:", { nombre, onSelect, logo });

  return (
    <div
      onClick={onSelect}
      className="bg-white/10 p-4 rounded-lg cursor-pointer hover:scale-105 transition-all shadow-md hover:shadow-xl text-center"
    >
      <img src={logo} alt={nombre} className="w-20 h-20 mx-auto mb-3 object-contain" />
      <h3 className="text-lg font-bold">{nombre}</h3>
      <p className="text-sm text-sky-300">abrir</p>
    </div>
  );
}
