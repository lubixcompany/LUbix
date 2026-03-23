import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="flex w-full h-screen">
      {/* Mitad izquierda */}
      <div className="relative w-full flex items-center justify-center lg:w-1/2 bg-gradient-to-tr from-emerald-950 to-gray-900 overflow-y-auto">
        {/* Volver al inicio arriba */}
        <a
          href="/"
          className="absolute top-4 left-4 text-gray-500 hover:text-green-400 text-xs px-2 py-1 rounded transition-colors duration-200"
        >
          ← Atrás
        </a>

        <div className="w-full max-w-sm rounded-2xl bg-gray-800 p-6 shadow-lg my-8">
          <h1 className="text-2xl font-bold text-green-400 mb-2">Lubix</h1>
          <h2 className="text-xl text-white mb-6">Iniciar Sesión</h2>

          <button className="w-full mb-4 flex items-center justify-center rounded bg-white py-2 text-gray-800 font-medium hover:bg-gray-200">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continuar con Google
          </button>

          <p className="text-center text-gray-400 mb-4">
            O continúa con el correo electrónico
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between text-gray-300">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="mr-2"
                />
                Recuérdame
              </label>
              <a href="#" className="text-green-400 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded bg-green-500 py-2 font-semibold text-white hover:bg-green-600"
            >
              Iniciar Sesión
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-green-400 hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>

      {/* Mitad derecha */}
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">

        <div className="relative flex flex-col items-center">
        <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-800 shadow-[0_0_60px_rgba(16,185,129,0.6)] animate-bounce"></div>
        <div className="w-40 h-16 bg-emerald-500/40 rounded-full blur-md animate-pulse"></div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
