import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const RecoverPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShow(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });

    navigate("/verify");
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
        <h2 className="text-xl text-white mb-6">Recuperar Contraseña</h2>
        <p className="text-gray-300 mb-8">
          Ingresa tu correo electrónico y te enviaremos un código para
          restablecer tu contraseña.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="tu@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
          >
            Enviar código
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400">
          ¿Ya recuerdas tu contraseña?{" "}
          <Link to="/" className="text-green-400 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RecoverPassword;
