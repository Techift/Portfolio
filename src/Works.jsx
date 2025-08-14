import { ArrowUpRightIcon } from "lucide-react";

const works = [
  {
    title: "Creative Studio Website",
    icon: true,
    badge: true,
    img: "/img/pic1.jpg", // Example image, replace as needed
    badgeText: "View work",
  },
  {
    title: "Course App",
    icon: true,
    badge: true,
    img: "/img/pic1.jpg", // Example image, replace as needed
    badgeText: "View work",
  },
  {
    title: "Money Management App",
    icon: true,
    badge: true,
    img: "/img/pic1.jpg", // Example image, replace as needed
    badgeText: "View work",
  },
  {
    title: "Real Estate App",
    icon: true,
    badge: true,
    img: "/img/pic1.jpg", // Example image, replace as needed
    badgeText: "View work",
  },
];

function Works() {
  return (
    <div className="max-w-5xl m-auto mx-auto py-20 px-4">
      <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">SELECTED WORKS</h2>
      <ul className="divide-y divide-white/10 bg-black/60 rounded-xl overflow-hidden">
        {works.map((work, idx) => (
          <li
            key={work.title}
            className="flex items-center gap-4 py-4 px-2 text-white hover:bg-white/5 transition relative"
          >
            {work.img && (
              <img
                src={work.img}
                alt="thumbnail"
                className="w-8 h-8 object-cover rounded-md"
              />
            )}
            <span className="flex-1 text-base font-medium">{work.title}</span>
            {work.badge && (
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md ml-2">
                {work.badgeText}
              </span>
            )}
            {work.icon && (
              <ArrowUpRightIcon size={18} className="ml-2 text-pink-300" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Works;