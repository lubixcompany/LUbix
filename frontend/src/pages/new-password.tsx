import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setError("");

    try {
      // Aquí llamas a tu backend para guardar la nueva contraseña
      await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      alert("Contraseña restablecida con éxito");
      navigate("/login");
    } catch (err) {
      setError("Error al guardar la contraseña");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-50 relative">
      {/* Botón atrás */}
      <Link
        to="/"
        className="absolute top-4 left-4 text-gray-500 hover:text-green-500 text-xs px-2 py-1 rounded transition-colors duration-200"
      >
        ← Atrás
      </Link>

      {/* Card de Nueva Contraseña */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-green-600 mb-2 text-center">Lubix</h1>
        <h2 className="text-xl text-gray-800 mb-6 text-center">Nueva Contraseña</h2>
        <p className="text-gray-600 mb-6 text-center">
          Ingresa tu nueva contraseña y confírmala para completar el proceso.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Nueva contraseña *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="********"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Confirmar contraseña *</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="********"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full rounded bg-green-500 py-2 font-semibold text-white hover:bg-green-600 transition"
          >
            Guardar nueva contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
