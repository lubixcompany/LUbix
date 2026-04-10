import { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword, acceptTerms });
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

      {/* Card de Registro */}
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-green-600 mb-2 text-center">Lubix</h1>
        <h2 className="text-xl text-gray-800 mb-6 text-center">Crear Cuenta</h2>
        <p className="text-gray-600 mb-6 text-center">Únete a nuestra comunidad</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Nombre completo *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Juan Pérez"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Correo electrónico *</label>
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
            <label className="block text-gray-700 mb-1">Contraseña *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="••••••"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Confirmar contraseña *</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded bg-gray-100 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="••••••"
              required
            />
          </div>

          <div className="flex items-center text-gray-700">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className="mr-2"
              required
            />
            <span>
              Acepto los{" "}
              <a href="#" className="text-green-600 hover:underline">
                términos y condiciones
              </a>{" "}
              y la{" "}
              <a href="#" className="text-green-600 hover:underline">
                política de privacidad
              </a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-green-500 py-2 font-semibold text-white hover:bg-green-600 transition"
          >
            Crear Cuenta
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
