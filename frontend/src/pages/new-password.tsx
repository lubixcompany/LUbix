import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setError("");
    console.log("Nueva contraseña:", password);

    // Aquí podrías llamar a tu backend para guardar la nueva contraseña
    alert("Contraseña restablecida con éxito");
  };

  return (
    <div className="flex w-full h-screen items-center justify-center bg-gradient-to-tr from-emerald-950 to-gray-900">
      <div
        className={`w-full max-w-lg min-h-[500px] rounded-2xl bg-gray-800 p-12 shadow-2xl relative transform transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Link
          to="/"
          className="absolute top-2 left-4 text-gray-400 hover:text-green-400 text-sm"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold text-green-400 mb-4">Lubix</h1>
        <h2 className="text-xl text-white mb-6">Nueva Contraseña</h2>
        <p className="text-gray-300 mb-8">
          Ingresa tu nueva contraseña y confírmala para completar el proceso.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Nueva contraseña *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg bg-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="********"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Confirmar contraseña *</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full rounded-lg bg-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="********"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
          >
            Guardar nueva contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
