import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Flyash Delivery Dashboard</h1>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-100 rounded-xl shadow">Today's Deliveries: <b>4</b></div>
        <div className="p-4 bg-gray-100 rounded-xl shadow">This Month: <b>28</b></div>
        <div className="p-4 bg-yellow-100 rounded-xl shadow">Pending Invoices: <b>3</b></div>
        <div className="p-4 bg-green-100 rounded-xl shadow">Completed: <b>25</b></div>
      </div>

      {/* Toggle Start Trip Form */}
      <Button className="mt-4" onClick={() => setShowForm(!showForm)}>
        ➕ Start New Trip
      </Button>

      {showForm && (
        <div className="mt-6 p-6 border rounded-xl bg-white shadow">
          <h2 className="text-xl font-semibold mb-4">Start New Trip - Step 1</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><Label>Challan Number</Label><Input placeholder="Enter Challan Number" /></div>
            <div><Label>Challan Date</Label><Input type="date" /></div>
            <div><Label>Company</Label><Input placeholder="Select Company from Master" /></div>
            <div><Label>Vehicle Number</Label><Input placeholder="HR55AB1234" /></div>
            <div><Label>Source (Thermal)</Label><Input placeholder="Select Source from Master" /></div>
            <div><Label>Source Weight (MT)</Label><Input type="number" /></div>
            <div><Label>Party</Label><Input placeholder="Select Party from Master" /></div>
            <div><Label>Challan Weight (MT)</Label><Input type="number" /></div>
            <div><Label>Driver Name</Label><Input placeholder="Select Driver from Master" /></div>
            <div><Label>Fuel Given (₹)</Label><Input type="number" /></div>
            <div><Label>Cash Given (₹)</Label><Input type="number" /></div>

            <div className="col-span-full text-right">
              <Button type="submit">Save & Move to Delivery Pending</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}