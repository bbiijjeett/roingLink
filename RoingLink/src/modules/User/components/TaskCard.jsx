export default function TaskCard({ type, helper, status }) {
  const statusStyles = {
    Pending: "bg-amber-100 text-amber-700",
    Ongoing: "bg-blue-100 text-blue-700",
    Completed: "bg-emerald-100 text-emerald-700",
  };

  return (
    <article className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-center mb-1.5">
        <h3 className="text-base font-semibold text-gray-800 tracking-tight">{type}</h3>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[status] || "bg-gray-100 text-gray-500"}`}
        >
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-500">Helper: <span className="text-gray-700 font-medium">{helper || "Not assigned"}</span></p>
    </article>
  );
}
