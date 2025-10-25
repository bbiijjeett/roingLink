export default function Profile() {
  const addresses = [
    { label: "Home", detail: "123 Green Street, Pune" },
    { label: "Office", detail: "Tech Park Tower 3, Hinjewadi" },
  ];

  return (
    <div className="max-w-md mx-auto space-y-8 bg-grey-50 min-h-screen">
      {/* Profile Info */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src="https://i.pravatar.cc/100"
          alt="User"
          className="w-20 h-20 rounded-full border-4 border-blue-200"
        />
        <h2 className="text-lg font-semibold">John Doe</h2>
        <p className="text-sm text-gray-500">+91 98765 43210</p>
      </div>

      {/* Address List */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 className="text-lg font-semibold mb-3">My Addresses</h3>
        {addresses.map((addr, i) => (
          <div key={i} className="bg-white p-3 rounded-lg shadow-sm border mb-2">
            <h4 className="font-medium">{addr.label}</h4>
            <p className="text-sm text-gray-500">{addr.detail}</p>
          </div>
        ))}
        <button className="w-full bg-gray-100 py-2 rounded text-gray-600 text-sm">
          + Add New Address
        </button>
      </section>

      {/* Settings */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 className="text-lg font-semibold mb-3">Settings</h3>
        <div className="bg-white p-3 rounded-lg shadow-sm border space-y-2">
          <button className="w-full text-left text-sm text-gray-700">Language</button>
          <button className="w-full text-left text-sm text-gray-700">Notifications</button>
        </div>
      </section>

      {/* Logout */}
      <button className="w-full bg-red-100 text-red-600 py-2 rounded font-medium">
        Logout
      </button>
    </div>
  );
}
