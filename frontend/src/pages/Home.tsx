import { Link } from "react-router-dom";

function Bienvenida() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-950 to-gray-900 text-white">
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#162238] w-full">
        <div className="text-green-500 text-2xl font-bold">Lubix</div>

        <div className="flex w-[500px] bg-[#1c2a4a] rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="bg-green-500 px-5 text-white">🔍</button>
        </div>

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

      {/* HERO */}
      <section className="flex justify-between items-center px-16 py-20 min-h-[calc(100vh-80px)]">
        <div className="max-w-lg">
          <div className="text-yellow-400 mb-2 text-sm">🏷 Oferta Especial</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Mega Sale de Tecnología
          </h1>
          <p className="text-lg text-blue-200 mb-6">
            Hasta 50% de descuento en productos seleccionados
          </p>
          <Link
            to="/ofertas"
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-500"
          >
            Ver ofertas
          </Link>
        </div>

        <div className="bg-gray-200 rounded-2xl w-[480px] h-[360px] flex items-center justify-center p-4">
          <img
            src="/lubix-logo.png"
            alt="Logo Lubix"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>

      {/* INFO */}
      <section className="flex flex-wrap justify-center gap-6 px-6 py-12">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex-1 min-w-[300px] hover:-translate-y-1 transition">
          <h2 className="text-green-500 mb-3 text-xl font-semibold">¿Qué es Lubix?</h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            Lubix es una plataforma digital que conecta a los usuarios con diferentes empresas, permitiendo descubrir, comparar y adquirir productos de manera rápida y segura.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex-1 min-w-[300px] hover:-translate-y-1 transition">
          <h2 className="text-green-500 mb-3 text-xl font-semibold">¿Qué hacemos?</h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            Facilitamos la compra en línea con recogida en tienda, ofreciendo una experiencia práctica tanto para clientes como para empresas.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex-1 min-w-[300px] hover:-translate-y-1 transition">
          <h2 className="text-green-500 mb-3 text-xl font-semibold">Nuestra misión</h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            Impulsar el comercio digital local mediante tecnología moderna, brindando herramientas que mejoren la visibilidad y ventas de los negocios.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex-1 min-w-[300px] hover:-translate-y-1 transition">
          <h2 className="text-green-500 mb-3 text-xl font-semibold">Beneficios para clientes</h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            Encuentra las mejores ofertas locales, compara precios fácilmente y recoge tus compras en minutos sin esperas de envío.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex-1 min-w-[300px] hover:-translate-y-1 transition">
          <h2 className="text-green-500 mb-3 text-xl font-semibold">Ventajas para empresas</h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            Aumenta tus ventas online, llega a más clientes cercanos y gestiona pedidos con nuestro sistema integrado simple.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex-1 min-w-[300px] hover:-translate-y-1 transition">
          <h2 className="text-green-500 mb-3 text-xl font-semibold">Empieza hoy</h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-4">
            Regístrate gratis, explora productos y únete a la revolución del comercio local digital con Lubix.
          </p>
          <Link
            to="/register"
            className="bg-green-500 text-black font-bold px-4 py-2 rounded-full hover:bg-green-600"
          >
            Comenzar
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Bienvenida;
