import { motion } from "framer-motion";

export default function Episodes() {
  const eps = [
    { title: "EP01 — The Journey", text: "A year full of memories…" },
    { title: "EP02 — A Letter for You", text: "Tap to open your letter ❤️" },
    { title: "EP03 — Special Cameo", text: "A tiny surprise from someone you adore" },
    { title: "EP04 — Korean Words", text: "오늘의 단어 ✨" },
    { title: "EP05 — A Wish for You", text: "My hopes for your new year" },
  ];

  return (
    <section className="p-5">
      <h2 className="text-2xl mb-3 font-semibold">Episodes</h2>

      <div className="flex flex-col gap-4">
        {eps.map((ep, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 bg-white rounded-2xl shadow-md"
          >
            <p className="font-bold">{ep.title}</p>
            <p className="opacity-70">{ep.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
