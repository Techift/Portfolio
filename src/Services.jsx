import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
// import { Link } from "react-scroll";


function Services() {
  const services = [
    { title: "Design", desc: "We do design..." },
    { title: "Development", desc: "We build stuff..." },
    { title: "Branding", desc: "We brand..." },
    { title: "Marketing", desc: "We market..." },
    { title: "Building", desc: "We brand..." },
    { title: "Financing", desc: "We market..." },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  // Responsive items per page: 1 on mobile, 2 on md and up
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 2);

  // Update itemsPerPage on resize
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const visibleServices = services.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if ((currentPage + 1) * itemsPerPage < services.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <section id="services">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col justify-between">
          <div className="px-6 py-12  text-white">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-6 gap-4">
              <h2 className="text-7xl text-center sm:text-left w-full sm:w-auto">SERVICES</h2>
              <div className="flex gap-4 w-full justify-center sm:justify-end">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="px-4 py-2 border rounded hover:bg-white hover:text-black transition disabled:opacity-30 flex items-center justify-center"
                >
                  <ArrowLeftIcon size={20} />
                </button>
                <button
                  onClick={nextPage}
                  disabled={(currentPage + 1) * itemsPerPage >= services.length}
                  className="px-4 py-2 border rounded hover:bg-white hover:text-black transition disabled:opacity-30 flex items-center justify-center"
                >
                  <ArrowRightIcon size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="p-0 rounded-xl shadow-lg text-white min-h-60 sm:min-h-72 flex flex-col justify-between border border-white/30 bg-transparent relative overflow-hidden transition-colors duration-300 hover:bg-[#18181b]/80 w-11/12 mx-auto sm:w-full sm:mx-0"
              style={{
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.25)'
              }}
            >
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                }}
              />
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 px-3 sm:px-6 pt-4 sm:pt-6 text-center sm:text-left">
                <img
                  src={`/img/pic${index + 1}.jpg`}
                  alt={service.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mx-auto sm:mx-0"
                />
                <p className="text-l sm:text-2xl text-white/80 leading-snug">{service.desc}</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between px-3 sm:px-6 pb-4 sm:pb-6 pt-8 sm:pt-10 w-full text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-sm">{service.title}</h3>
                <span className="text-base sm:text-lg font-medium text-white/40">{String(startIndex + index + 1).padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
export default Services 