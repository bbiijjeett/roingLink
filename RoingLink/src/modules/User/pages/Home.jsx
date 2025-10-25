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


import { useState } from "react";

export default function Home() {
  const categories = [
    "Home Services",
    "Errands",
    "Delivery",
    "Repairs",
    "Medicine Pickup",
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="max-w-md mx-auto space-y-8 bg-gray-50 min-h-screen">

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-5 sm:px-6 md:px-8 py-6 space-y-8">
        
        {/* Banner / Carousel */}
        <section className="h-36 sm:h-40 bg-gradient-to-r from-rose-100 to-pink-50 rounded-2xl shadow-sm flex items-center justify-center text-rose-600 font-medium text-base sm:text-lg">
          🌟 Promotional Offers or Sponsor Ads
        </section>

        {/* Service Grid */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
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

          {/* Next Button appears only after selecting a category */}
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
