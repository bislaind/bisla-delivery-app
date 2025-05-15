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

    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <div>
        <Label htmlFor="challanNumber">Challan Number</Label>
        <Input id="challanNumber" placeholder="Enter Challan Number" className="w-full" />
      </div>
      <div>
        <Label htmlFor="challanDate">Challan Date</Label>
        <Input id="challanDate" type="date" className="w-full" />
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" placeholder="Select Company from Master" className="w-full" />
      </div>
      <div>
        <Label htmlFor="vehicleNumber">Vehicle Number</Label>
        <Input id="vehicleNumber" placeholder="HR55AB1234" className="w-full" />
      </div>
      <div>
        <Label htmlFor="source">Source (Thermal)</Label>
        <Input id="source" placeholder="Select Source from Master" className="w-full" />
      </div>
      <div>
        <Label htmlFor="sourceWeight">Source Weight (MT)</Label>
        <Input id="sourceWeight" type="number" step="0.01" className="w-full" />
      </div>
      <div>
        <Label htmlFor="party">Party</Label>
        <Input id="party" placeholder="Select Party from Master" className="w-full" />
      </div>
      <div>
        <Label htmlFor="challanWeight">Challan Weight (MT)</Label>
        <Input id="challanWeight" type="number" step="0.01" className="w-full" />
      </div>
      <div>
        <Label htmlFor="driver">Driver Name</Label>
        <Input id="driver" placeholder="Select Driver from Master" className="w-full" />
      </div>
      <div>
        <Label htmlFor="fuel">Fuel Given (₹)</Label>
        <Input id="fuel" type="number" step="0.01" className="w-full" />
      </div>
      <div>
        <Label htmlFor="cash">Cash Given (₹)</Label>
        <Input id="cash" type="number" step="0.01" className="w-full" />
      </div>

      <div className="md:col-span-2 text-right pt-2">
        <Button type="submit">Save & Move to Delivery Pending</Button>
      </div>
    </form>
  </div>
)}
