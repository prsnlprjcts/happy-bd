// App.jsx
import React from "react";
import { motion } from "framer-motion";
import CloudBackground from "./components/CloudBackground";
import Letter from "./components/Letter";
import Cake from "./components/Cake";

import img1 from "./img/1.1.jpg";
import vid from "./img/bp.MOV";
import img3 from "./img/3.1.jpg";


const episodes = [
  {
    id: 1,
    title: "EP01 - Intro",
    content: "Hello, my love. \n Happy birthday to you, precious. \n I hope this day is fun and you have no time for worries today! You deserve to just relax and feel the love people have for you. No words can explain how important you are to me, but here we are. \n Enjoy the slideshow, bestie",
  },
  {
    id: 2,
    title: "EP02 - 섹시한 남자",
    customSection: (
      <div className="flex flex-col items-center mt-4">
        <p className="max-w-xs text-center text-lg opacity-80">
          Тут какой то  섹시한 남자  тебе цветы передал... Сказал обязательно тебе показать..
        </p>

        <img
          src={img1}// put your photo in public/images/
          alt="Sexy man"
          className="mt-4 w-55 h-72 object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
  },

  {
    id: 3,
    title: "EP03 - Bangkok",
    customSection: (
      <div className="w-full mt-4 flex flex-col items-center">
        {/* Polaroids grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full px-2">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-36 bg-white rounded-md shadow-lg overflow-hidden border border-gray-200 relative"
              initial={{ rotate: Math.random() * 10 - 5, y: 20, opacity: 0 }}
              animate={{ rotate: [Math.random() * 5 - 2.5, Math.random() * 5 - 2.5], y: 0, opacity: 1 }}
              transition={{ duration: 1 + Math.random(), repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            >
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                Photo {i + 1}
              </div>
              <div className="absolute bottom-0 w-full bg-white/90 text-center text-[10px] py-1">
                Caption
              </div>
            </motion.div>
          ))}
        </div> */}

        <img
          src={img3}// put your photo in public/images/
          alt="us"
          className="mt-4 w-55 h-72 object-cover rounded-lg shadow-lg"
        />

        {/* Centered text after first 2 polaroids */}
        <p className="mt-4 text-center max-w-xs text-sm opacity-80">
          Мы в Бг когда наконец то встретимся!
        </p>
      </div>
    ),
  },


  {
    id: 4,
    title: "EP04 - Bunny's birthday",
    content: "This is a cake to celebrate how slay you are. (Try putting out the candles!) ",
    customSection: <Cake />
  },
  {
    id: 5,
    title: "EP05 - BLACKPINK Wrapped",
    content: "You’ve been a number one girl this year for 365 days. Blackpink has a special message for you.",
    video: vid
  },
  {
    id: 6,
    title: "EP06 - The Letter",
    customSection: <Letter />,
  }
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CloudBackground />

      {/* Fullscreen vertical snapping scroll */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {episodes.map((ep) => (
          <motion.section
            key={ep.id}
            className="h-screen flex flex-col justify-center items-center px-6 text-center snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold mb-4">{ep.title}</h2>
            <p className="max-w-xl text-lg opacity-80 whitespace-pre-line">{ep.content}</p>

            {ep.customSection && ep.customSection}

            {/* Add this to render video if present */}
            {ep.video && (
              <video
                src={ep.video}
                controls
                className="mt-4 w-72 h-48 object-cover rounded-lg shadow-lg"
              />
            )}
          </motion.section>
        ))}

      </div>
    </div>
  );
}
