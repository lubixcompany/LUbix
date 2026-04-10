import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#162238] w-full">
      {/* Logo */}
      <div className="text-green-500 text-2xl font-bold">Lubix</div>

      {/* Barra de búsqueda */}
      <div className="flex w-[500px] bg-[#1c2a4a] rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        <button className="bg-green-500 px-5 text-white">🔍</button>
      </div>

      {/* Links de navegación */}
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-white hover:text-green-400">
          👤 Iniciar sesión
        </Link>
        <Link
          to="/register"
          className="bg-green-500 text-black font-bold px-4 py-2 rounded-full hover:bg-green-600"
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
}
