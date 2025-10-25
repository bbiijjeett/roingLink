export default function TaskForm() {
  return (
    <form className="max-w-md mx-auto shadow-md rounded-2xl p-6 space-y-5 pb-20 border border-gray-100 bg-grey-50">
      <h2 className="text-xl font-semibold text-gray-800 tracking-tight">Request a Task</h2>

      <div className="space-y-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-600 mb-1">Service Type</label>
          <select
            className="w-full appearance-none p-3 pr-10 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-gray-800 font-medium"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service type
            </option>
            <option>Home Services</option>
            <option>Errands</option>
            <option>Delivery</option>
            <option>Repairs</option>
            <option>Medicine Pickup</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-10 h-5 w-5 text-gray-400 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Task Details</label>
          <textarea
            rows={3}
            placeholder="Describe your task..."
            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Pickup Location</label>
          <input
            type="text"
            placeholder="Enter pickup location"
            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Drop Location (optional)</label>
          <input
            type="text"
            placeholder="Enter drop location"
            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Schedule</label>
            <input
              type="datetime-local"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Budget (optional)</label>
            <input
              type="number"
              placeholder="₹"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-200"
        >
          Submit Request
        </button>
        <button
          type="button"
          className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all duration-200"
        >
          Cancel
        </button>
      </div>
    </form>


  );
}
