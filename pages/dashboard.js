export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-100 rounded-xl shadow">Today's Deliveries: <b>4</b></div>
        <div className="p-4 bg-gray-100 rounded-xl shadow">This Month: <b>28</b></div>
        <div className="p-4 bg-yellow-100 rounded-xl shadow">Pending Invoices: <b>3</b></div>
        <div className="p-4 bg-green-100 rounded-xl shadow">Completed: <b>25</b></div>
      </div>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">➕ Start New Trip</button>
      </div>
    </div>
  );
}