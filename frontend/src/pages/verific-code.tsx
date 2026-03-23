import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const VerificationCode: React.FC = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShow(true);
  }, []);

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
    <div className="flex w-full h-screen items-center justify-center bg-gradient-to-tr from-emerald-950 to-gray-900">
      <div
        className={`w-full max-w-lg min-h-[500px] rounded-2xl bg-gray-800 p-12 shadow-2xl relative transform transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Link
          to="/recover"
          className="absolute top-2 left-4 text-gray-400 hover:text-green-400 text-sm"
        >
          ← Volver
        </Link>

        <h1 className="text-3xl font-bold text-green-400 mb-4">Lubix</h1>
        <h2 className="text-xl text-white mb-6">Verificación</h2>
        <p className="text-gray-300 mb-8">
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
                className="w-12 h-12 text-center text-xl font-bold border-2 border-green-500 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
          >
            Verificar código
          </button>
        </form>

        <p className="mt-8 text-center text-gray-400">
          ¿No recibiste el código?{" "}
          <button
            type="button"
            onClick={() => alert("Reenviar código")}
            className="text-green-400 hover:underline"
          >
            Reenviar
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerificationCode;
