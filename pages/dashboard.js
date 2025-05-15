import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Label } from "../components/Label";

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Flyash Delivery Dashboard (Live Preview)</h1>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-100 rounded-xl shadow">Today's Deliveries: <b>4</b></div>
        <div className="p-4 bg-gray-100 rounded-xl shadow">This Month: <b>28</b></div>
        <div className="p-4 bg-yellow-100 rounded-xl shadow">Pending Invoices: <b>3</b></div>
        <div className="p-4 bg-green-100 rounded-xl shadow">Completed: <b>25</b></div>
      </div>

      {/* Toggle Start Trip Form */}
      <Button className="mt-4" onClick={() => setShowForm(!showForm)}>
        🚛 Add New Trip
      </Button>

     {showForm && (
  <div className="mt-6 bg-white border rounded-xl shadow p-6">
    <h2 className="text-xl font-semibold mb-6">Start New Trip – Step 1</h2>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
      <div>
        <Label htmlFor="challanNumber">Challan Number</Label>
        <input id="challanNumber" type="text" placeholder="Enter Challan Number" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="challanDate">Challan Date</Label>
        <input id="challanDate" type="date" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <input id="company" type="text" placeholder="Select Company from Master" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="vehicleNumber">Vehicle Number</Label>
        <input id="vehicleNumber" type="text" placeholder="HR55AB1234" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="source">Source (Thermal)</Label>
        <input id="source" type="text" placeholder="Select Source from Master" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="sourceWeight">Source Weight (MT)</Label>
        <input id="sourceWeight" type="number" step="0.01" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="party">Party</Label>
        <input id="party" type="text" placeholder="Select Party from Master" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="challanWeight">Challan Weight (MT)</Label>
        <input id="challanWeight" type="number" step="0.01" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="driver">Driver Name</Label>
        <input id="driver" type="text" placeholder="Select Driver from Master" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="fuel">Fuel Given (₹)</Label>
        <input id="fuel" type="number" step="0.01" className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <Label htmlFor="cash">Cash Given (₹)</Label>
        <input id="cash" type="number" step="0.01" className="mt-1 w-full border rounded px-3 py-2" />
      </div>

      <div className="md:col-span-2 text-right pt-4">
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Save & Move to Delivery Pending
        </button>
      </div>
    </form>
       </div>
  )}
</div>
  );
}

