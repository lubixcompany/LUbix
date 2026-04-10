import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate(); // 👈 Hook para navegar

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, remember });

    // Aquí podrías validar credenciales con tu backend
    // Si todo está correcto, rediriges al HomeUsuario
    navigate("/home-usuario");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-50 relative">
      <Link
        to="/"
        className="absolute top-4 left-4 text-gray-500 hover:text-green-500 text-xs px-2 py-1 rounded transition-colors duration-200"
      >
        ← Atrás
      </Link>

      {/* Card de Login */}
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-green-600 mb-2 text-center">Lubix</h1>
        <h2 className="text-xl text-gray-800 mb-6 text-center">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-gray-600">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="mr-2"
              />
              Recuérdame
            </label>
            <a href="/recover" className="text-green-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón que lleva al HomeUsuario */}
          <button
            type="submit"
            className="w-full rounded bg-green-500 py-2 font-semibold text-white hover:bg-green-600 transition"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
