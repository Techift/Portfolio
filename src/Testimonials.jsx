const testimonials = [
  {
    quote: "Sanches is patient, responsive and helpful. I highly recommend and would be happy to use your service again, an efficient experience.",
    author: "Marie Rios",
    role: "Digital Product Owner",
    avatar: "/img/pic2.jpg", 
  },
  {
    quote: "Great communication and fast delivery. The results exceeded my expectations!",
    author: "John Smith",
    role: "Startup Founder",
    avatar: "/img/pic1.jpg",
  },
  {
    quote: "Professional and creative. Will definitely work together again.",
    author: "Lisa Wong",
    role: "Marketing Lead",
    avatar: "/img/pic2.jpg",
  },
];

function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">Testimonials</h2>
      <div className="bg-black/60 rounded-xl p-6 overflow-y-auto max-h-56 custom-scrollbar">
        {testimonials.map((t, idx) => (
          <div key={idx} className="mb-8 last:mb-0">
            <div className="flex items-start gap-4">
              <span className="text-4xl text-white/30 select-none">“</span>
              <div>
                <p className="text-lg text-white font-medium leading-snug mb-2">
                  {t.quote.split(". ").map((part, i) => (
                    <span key={i} className={i === 1 ? "font-bold" : ""}>{part}{i < t.quote.split(". ").length - 1 ? ". " : ""}</span>
                  ))}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <img src={t.avatar} alt={t.author} className="w-8 h-8 rounded-full object-cover border border-white/20" />
                  <div>
                    <span className="text-sm text-white font-semibold">{t.author}</span>
                    <span className="text-xs text-white/50 ml-2">{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          border-radius: 3px;
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #ec4899 0%, #a855f7 100%);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;