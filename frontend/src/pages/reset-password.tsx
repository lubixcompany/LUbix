import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RecoverPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
    navigate("/verify");
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

      {/* Card de Recuperar contraseña */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-green-600 mb-2 text-center">Lubix</h1>
        <h2 className="text-xl text-gray-800 mb-6 text-center">Recuperar Contraseña</h2>
        <p className="text-gray-600 mb-6 text-center">
          Ingresa tu correo electrónico y te enviaremos un código para restablecer tu contraseña.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full rounded bg-green-500 py-2 font-semibold text-white hover:bg-green-600 transition"
          >
            Enviar código
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          ¿Ya recuerdas tu contraseña?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RecoverPassword;
