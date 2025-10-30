// export default function Home() {
//   const categories = [
//     "Home Services",
//     "Errands",
//     "Delivery",
//     "Repairs",
//     "Medicine Pickup",
//   ];

//   return (
//     <div className="max-w-md mx-auto space-y-8 bg-grey-50 min-h-screen">

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto px-5 sm:px-6 md:px-8 py-6 space-y-8">
//         {/* Banner / Carousel */}
//         <section className="h-36 sm:h-40 bg-gradient-to-r from-rose-100 to-pink-50 rounded-2xl shadow-sm flex items-center justify-center text-rose-600 font-medium text-base sm:text-lg">
//           🌟 Promotional Offers or Sponsor Ads
//         </section>

//         {/* Service Grid */}
//         <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
//           <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
//             What do you need help with?
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 className="bg-white hover:bg-rose-50 text-gray-700 border border-gray-100 rounded-xl py-4 text-sm sm:text-base font-medium shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200"
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Quick Request */}
//         <div className="pt-4">
//           <button className="w-full bg-gradient-to-r from-rose-500 to-rose-400 text-white py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300">
//             + Create Custom Task
//           </button>
//         </div>
//       </main>

//     </div>
//   );
// }


import { useState,useEffect,useRef } from "react";
import { motion } from "framer-motion";

const ads = [
  "https://camphouse.io/wp-content/uploads/share-a-coke-2-1024x576.webp",
  "https://i.pinimg.com/originals/ee/24/de/ee24deaa91b12fa6061f29e51c795704.jpg",
  "https://i.pinimg.com/736x/e4/05/74/e40574a33c7788c0a20f217a1482687f.jpg",
];


export default function Home() {
  // const categories = [
  //   "Home Services",
  //   "Errands",
  //   "Delivery",
  //   "Repairs",
  //   "Medicine Pickup",
  // ];

const categories = [
  {
    name: "Home Services",
    icon: (
      <svg className="w-10 h-10 transition-all duration-300 group-hover:scale-105" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" fill="#FFE4E6"/>
        <circle cx="32" cy="26" r="10" fill="#F9C9A2"/>
        <path d="M22 44C22 36 42 36 42 44V50H22V44Z" fill="#60A5FA"/>
        <path d="M18 34L32 20L46 34" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },

  {
    name: "Errands",
    icon: (
      <svg className="w-10 h-10 transition-all duration-300 group-hover:scale-105" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" fill="#FFF7CC"/>
        <circle cx="32" cy="24" r="9" fill="#F9C9A2"/>
        <path d="M22 42C22 34 42 34 42 42V50H22V42Z" fill="#FBBF24"/>
        <rect x="20" y="33" width="24" height="8" rx="2" fill="#E11D48"/>
      </svg>
    ),
  },

  {
    name: "Delivery",
    icon: (
      <svg className="w-10 h-10 transition-all duration-300 group-hover:scale-105" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" fill="#E0F2FE"/>
        <circle cx="32" cy="23" r="9" fill="#F9C9A2"/>
        <path d="M20 40C20 32 44 32 44 40V50H20V40Z" fill="#3B82F6"/>
        <rect x="28" y="35" width="18" height="10" rx="2" fill="#E11D48"/>
        <circle cx="28" cy="50" r="3" fill="#1E293B"/>
        <circle cx="46" cy="50" r="3" fill="#1E293B"/>
      </svg>
    ),
  },

  {
    name: "Repairs",
    icon: (
      <svg className="w-10 h-10 transition-all duration-300 group-hover:scale-105" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" fill="#E3FDF5"/>
        <circle cx="32" cy="24" r="9" fill="#F9C9A2"/>
        <path d="M22 42C22 34 42 34 42 42V50H22V42Z" fill="#34D399"/>
        <path d="M40 20C42 22 42 25 40 27L32 35L29 32L37 24C39 22 38 20 40 20Z" fill="#E11D48"/>
      </svg>
    ),
  },

  {
    name: "Medicine Pickup",
    icon: (
      <svg className="w-10 h-10 transition-all duration-300 group-hover:scale-105" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" fill="#E0F7EC"/>
        <circle cx="32" cy="24" r="9" fill="#F9C9A2"/>
        <path d="M22 42C22 34 42 34 42 42V50H22V42Z" fill="#4ADE80"/>
        <rect x="26" y="30" width="20" height="12" rx="3" fill="#E11D48"/>
        <rect x="32" y="32" width="2" height="8" fill="white"/>
        <rect x="29" y="36" width="8" height="2" fill="white"/>
      </svg>
    ),
  },
];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((i) => (i + 1) % ads.length);
      }
    }, 10000); // 10s per slide (≈30s full loop)
    return () => clearInterval(id);
  }, []);



  return (
    <div className="max-w-md mx-auto space-y-8 bg-gray-50 min-h-screen">

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-5 sm:px-6 md:px-8 py-6 space-y-8">
        
        {/* Banner / Carousel */}
        {/* <section className="h-36 sm:h-40 bg-gradient-to-r from-rose-100 to-pink-50 rounded-2xl shadow-sm flex items-center justify-center text-rose-600 font-medium text-base sm:text-lg">
          🌟 Promotional Offers or Sponsor Ads
        </section> */}
        
    <section
      className="relative w-full h-36 sm:h-40 rounded-2xl shadow-sm overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* Track */}
      <motion.div
        className="flex h-full"
        style={{ width: `${ads.length * 100}%` }}
        animate={{ x: `-${index * (100 / ads.length)}%` }}
        transition={{ duration: 1, ease: "easeInOut" }} // smooth slide
      >
        {ads.map((src, i) => (
          <div key={i} className="w-full h-full">
            <img
              src={src}
              alt={`Ad ${i + 1}`}
              className="block w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </motion.div>

      {/* Optional dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {ads.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-1.5 rounded-full transition-opacity ${
              i === index ? "opacity-100 bg-white" : "opacity-50 bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>


        {/* Service Grid */}
        {/* <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            What do you need help with?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`border rounded-xl py-4 text-sm sm:text-base font-medium shadow-sm transition-all duration-200
                  ${selectedCategory === cat 
                    ? "bg-rose-100 text-rose-700 shadow-md" 
                    : "bg-white text-gray-700 hover:bg-rose-50 hover:shadow-md active:scale-[0.98]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>


          {selectedCategory && (
            <div className="mt-5">
              <button className="w-full bg-rose-500 text-white py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300">
                Next
              </button>
            </div>
          )}
        </section> */}

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
  <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
    What do you need help with?
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
  {categories.map((cat) => (
    <button
  key={cat.name}
  onClick={() => setSelectedCategory(cat.name)}
  className={`group border rounded-xl px-3 py-4 text-sm sm:text-base font-medium shadow-sm flex flex-col items-center justify-center gap-2 transition-all duration-200
    ${
      selectedCategory === cat.name
        ? "bg-rose-100/50 text-rose-700 shadow-md"
        : "bg-white text-gray-700 hover:bg-rose-50 hover:shadow-md active:scale-[0.98]"
    }`}
>
  <div className="flex justify-center items-center h-12 w-12">
    {cat.icon}
  </div>
  <span className="leading-tight text-center">{cat.name}</span>
</button>

  ))}
</div>

  {selectedCategory && (
    <div className="mt-5">
      <button className="w-full bg-rose-500 text-white py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300">
        Next
      </button>
    </div>
  )}
</section>

        {/* Quick Request */}
        <div className="pt-4">
          <button className="w-full bg-gradient-to-r from-rose-500 to-rose-400 text-white py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300">
            + Create Custom Task
          </button>
        </div>
      </main>

    </div>
  );
}
