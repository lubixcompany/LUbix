import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VerificationCode: React.FC = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const navigate = useNavigate();

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // mover el foco automáticamente al siguiente input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    console.log("Código ingresado:", fullCode);

    navigate("/new-password");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-50 relative">
      {/* Botón atrás */}
      <Link
        to="/recover"
        className="absolute top-4 left-4 text-gray-500 hover:text-green-500 text-xs px-2 py-1 rounded transition-colors duration-200"
      >
        ← Atrás
      </Link>

      {/* Card de Verificación */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-green-600 mb-2 text-center">Lubix</h1>
        <h2 className="text-xl text-gray-800 mb-6 text-center">Verificación</h2>
        <p className="text-gray-600 mb-6 text-center">
          Ingresa el código de 6 dígitos que enviamos a tu correo electrónico.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-3">
            {code.map((digit, i) => (
              <input
                key={i}
                id={`code-${i}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                className="w-12 h-12 text-center text-xl font-bold border-2 border-green-500 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full rounded bg-green-500 py-2 font-semibold text-white hover:bg-green-600 transition"
          >
            Verificar código
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          ¿No recibiste el código?{" "}
          <button
            type="button"
            onClick={() => alert("Reenviar código")}
            className="text-green-600 hover:underline"
          >
            Reenviar
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerificationCode;
