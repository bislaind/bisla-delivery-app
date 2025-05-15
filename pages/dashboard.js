import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Label } from "../components/Label";
import Link from "next/link";

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Flyash Delivery Dashboard (Live Preview)</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-100 rounded-xl shadow">Today's Deliveries: <b>4</b></div>
        <div className="p-4 bg-gray-100 rounded-xl shadow">This Month: <b>28</b></div>
        <div className="p-4 bg-yellow-100 rounded-xl shadow">Pending Invoices: <b>3</b></div>
        <div className="p-4 bg-green-100 rounded-xl shadow">Completed: <b>25</b></div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mt-4">
        <Button onClick={() => setShowForm(!showForm)}>
          🚛 Add New Trip
        </Button>
        <Link href="/delivery-pending">
          <Button variant="outline">⏳ Delivery Pending</Button>
        </Link>
      </div>

      {/* Step 1 Form */}
      {showForm && (
        <div className="mt-6 bg-white border rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Start New Trip – Step 1</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><Label>Challan Number</Label><Input placeholder="Enter Challan Number" /></div>
            <div><Label>Challan Date</Label><Input type="date" /></div>
            <div><Label>Company</Label><Input placeholder="Select Company from Master" /></div>
            <div><Label>Vehicle Number</Label><Input placeholder="HR55AB1234" /></div>
            <div><Label>Source (Thermal)</Label><Input placeholder="Select Source from Master" /></div>
            <div><Label>Source Weight (MT)</Label><Input type="number" step="0.01" /></div>
            <div><Label>Party</Label><Input placeholder="Select Party from Master" /></div>
            <div><Label>Challan Weight (MT)</Label><Input type="number" step="0.01" /></div>
            <div><Label>Driver Name</Label><Input placeholder="Select Driver from Master" /></div>
            <div><Label>Fuel Given (₹)</Label><Input type="number" step="0.01" /></div>
            <div><Label>Cash Given (₹)</Label><Input type="number" step="0.01" /></div>

            <div className="col-span-full text-right">
              <Button type="submit">Save & Move to Delivery Pending</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
