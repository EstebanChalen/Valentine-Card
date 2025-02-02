import { useState } from "react";
import { motion } from "framer-motion";

export default function ValentineCard() {
  const [response, setResponse] = useState(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 200) - 100;
    const randomLeft = Math.floor(Math.random() * 200) - 100;
    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-200 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-4">💌 Para Ti 💌</h1>
        <img
          src="https://img.freepik.com/vector-gratis/pareja-enamorados-sosteniendo-globo-forma-corazon-feliz-dia-san-valentin-ilustracion-personaje-dibujos-animados_56104-387.jpg"
          alt="Valentine"
          className="mx-auto mb-4 rounded-xl shadow-md"
        />
        <p className="text-gray-700 text-lg">
          Hola, he estado pensando en cómo decirte esto de una forma especial... 🌹
        </p>
        <p className="text-gray-700 text-lg mt-4">
          ¿Quieres ser mi Valentine? ❤️
        </p>

        {!response && (
          <div className="mt-6 space-x-4 relative">
            <button
              onClick={() => setResponse("yes")}
              className="px-4 py-2 bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 transition"
            >
              ¡Sí! 💖
            </button>
            <motion.button
              onMouseEnter={moveNoButton}
              onClick={() => setResponse("no")}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl shadow-md hover:bg-gray-400 transition absolute"
              style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
            >
              Mmm... No 😢
            </motion.button>
          </div>
        )}

        {response === "yes" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-pink-600 text-2xl font-semibold mt-6"
          >
            ¡Yeiiiiii te amo amor de mi vida ❤️!
          </motion.p>
        )}

        {response === "no" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-xl mt-6"
          >
            Oh... está bien, igual seguiré pensando en ti ❤️
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}


