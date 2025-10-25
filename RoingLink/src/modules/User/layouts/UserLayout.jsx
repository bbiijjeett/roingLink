import { Outlet, NavLink } from "react-router-dom";
import { Home, ClipboardList, MessageCircle, User } from "lucide-react";
import logo from "../../../assets/logo_n.png"

export default function UserLayout() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 ">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-b-2xl sticky top-0 z-20">
        {/* <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-rose-500 tracking-tight">
          RoingLink
        </h1> */}
        <a href="#" className="flex items-center space-x-2 p-1 rounded-lg transition duration-200">
            <img src={logo} className="h-8 w-8 text-rose-500" />
            <span className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-tight">
              Roing<span className="text-rose-600">Link</span>
            </span>
        </a>
        {/* <span className="text-gray-600 text-xs sm:text-sm font-medium">
          👋 Hello, User
        </span> */}
        <button
          className="
            flex items-center  
            p-2 bg-rose-50 text-rose-700 
            rounded-full transition duration-150 
            hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-500
          "
        >
          {/* Text is hidden on very small screens */}
          <span className="hidden sm:inline font-semibold text-sm mr-2">
            👋 Hello, User
          </span>
          <img
            src="https://placehold.co/32x32/f43f5e/ffffff?text=U"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover border border-rose-300"
          />
        </button>

      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-5">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.05)] border-t border-gray-100 flex justify-around sm:justify-evenly md:justify-center md:gap-10 items-center py-2 md:py-3 rounded-t-2xl z-20">
        {[
          { to: "/", icon: Home, label: "Home" },
          { to: "/task-form", icon: ClipboardList, label: "Create" },
          { to: "/my-tasks", icon: ClipboardList, label: "Tasks" },
          { to: "/chat", icon: MessageCircle, label: "Chat" },
          { to: "/profile", icon: User, label: "Profile" },
        ].map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2 text-[11px] sm:text-xs md:text-sm font-medium transition-all ${
                isActive
                  ? "text-rose-500 scale-105"
                  : "text-gray-500 hover:text-rose-400"
              }`
            }
          >
            <Icon size={22} strokeWidth={2} className="mb-0.5 md:mb-0" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
