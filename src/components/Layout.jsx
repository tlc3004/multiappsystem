export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="25" cy="25" r="1" fill="white" />
          <circle cx="75" cy="25" r="1" fill="white" />
          <circle cx="25" cy="75" r="1" fill="white" />
          <circle cx="75" cy="75" r="1" fill="white" />
        </svg>
      </div>

      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">MultiAppSystem</h1>
        <p className="text-sm text-gray-400">
          Explora las Aplicaciones sin salir de la experiencia
        </p>
      </header>

      <main className="z-10 relative">{children}</main>

      <footer className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} – Aplicacion Creada Por Antonio Martín León Chong
      </footer>
    </div>
  );
}
