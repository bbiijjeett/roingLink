import TaskCard from "../components/TaskCard";

export default function MyTasks() {
  const ongoing = [
    { type: "Delivery", helper: "Ravi Kumar", status: "Ongoing" },
    { type: "Home Services", helper: "Sunita Devi", status: "Pending" },
  ];

  const past = [{ type: "Errand", helper: "Aman Sharma", status: "Completed" }];

  return (
    <main className="max-w-md mx-auto  space-y-8 bg-gray-50 min-h-screen">
      {/* Ongoing Tasks */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 tracking-tight">Ongoing Tasks</h2>
          <span className="text-sm text-gray-500">{ongoing.length} active</span>
        </header>
        <div className="space-y-3">
          {ongoing.map((task, i) => (
            <TaskCard key={i} {...task} />
          ))}
        </div>
      </section>

      {/* Past Tasks */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 tracking-tight">Past Tasks</h2>
          <span className="text-sm text-gray-500">{past.length} completed</span>
        </header>
        <div className="space-y-3">
          {past.map((task, i) => (
            <TaskCard key={i} {...task} />
          ))}
        </div>
        <button className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200">
          View Full History
        </button>
      </section>
    </main>
  );
}
