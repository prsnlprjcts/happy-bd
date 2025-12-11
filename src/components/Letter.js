import { motion } from "framer-motion";
import { useState } from "react";
import "./Letter.css";

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <section className="w-full flex flex-col items-center p-6 mt-16 letter">
      <div className="w-72 flex flex-col items-center">
        <motion.div
          className="w-full bg-pink-50 border border-gray-300 rounded-lg shadow-lg cursor-pointer"
          initial={{ maxHeight: 150 }}
          animate={{ maxHeight: isOpen ? 1000 : 150 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={!isOpen ? handleOpen : undefined}
        >
          {/* Flap */}
          <motion.div
            className="w-full bg-pink-100 rounded-t-lg shadow-inner flex items-center justify-center px-4 py-6"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpen ? -90 : 0 }}
            transformOrigin="top"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {!isOpen && (
              <p className="text-gray-500 font-medium text-center text-lg">
                📩 Click to Open Letter
              </p>
            )}
          </motion.div>
          {/* Letter content */}
          {isOpen && (
            <div className="px-6 py-4 flex flex-col overflow-y-auto max-h-[60vh]">
              <p className="whitespace-pre-line leading-relaxed text-left">
                {'Dear Love, \n \n I know it hasn’t been easy with all the sudden changes going on, but i hope those changes will prove all your doubts wrong and you will only grow from here, even if it doesn’t feel like it right now.\n\n You have been an incredible human being this year, and might i add, very inspiring. You know what you want even when you say you don’t. Whatever path you choose, I wish for you to reach the very top of it. I will support every choice you make. I trust your gut and you should trust it too. Great things are only coming and you will slay it all. \n\n You are my sun, even when clouds try to hide you. And I’ll always try to be the plane that clears them away.☁️ \n\n I hope you stay as true to yourself as you are, never afraid to feel. \n Other than that, don’t stay small. Be whatever you wanna be and fly as high as your heart wants. And I plan to be right here while you’re achieving all your dreams. \n\n I know Thailand might be the most impressive journey for you, but I think the most impressive journey is the one that’s inside you. You’ve changed for the better, even if sometimes you don’t feel like it. I love all the versions you allow me to see and i hope you let yourself be the way you are.\n \n Я так горжусь тобой и верю что ты сможешь преодолеть любые трудности на своём пути. Но я тебе желаю чтобы причин ставать сильнее было меньше и ты смогла по настоящему насладиться жизнью, чего ты очень заслуживаешь. И конечно же, желаю крепкого здоровья и много много денег, чтобы ты смогла много много путешествовать. Никогда не забывай что ты слэй и лапочка и ангелочек и самый лучший человек на земле. И что у тебя вокруг много людей которые тебя любят. You are very appreciated and enough. \n \n Happy birthday, my love.\n I love you with my entire heart.\n \n Forever yours, \n M.'}
              </p>

              <button
                className="mt-4 px-4 py-2 button text-white rounded-md"
                onClick={handleClose}
              >
                Close Letter
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
