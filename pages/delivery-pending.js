import React, { useState } from "react";
import Input from '../components/Input';
import Button from '../components/Button';
import Label from '../components/Label';

const mockPendingDeliveries = [
  {
    id: 1,
    challanNumber: "CH1234",
    vehicleNumber: "HR55AB1234",
    party: "Jain Infra",
    challanDate: "2025-05-15",
  },
  {
    id: 2,
    challanNumber: "CH5678",
    vehicleNumber: "HR29CD5678",
    party: "ABC Constructions",
    challanDate: "2025-05-14",
  },
];

export default function DeliveryPending() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [unloadWeight, setUnloadWeight] = useState("");
  const [challanCopy, setChallanCopy] = useState(null);
  const [weighbridgeSlip, setWeighbridgeSlip] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Step 2 Submitted:", {
      unloadWeight,
      challanCopy,
      weighbridgeSlip,
    });
    setSelectedTrip(null); // Reset form after submission
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Delivery Pending</h1>

      <div className="grid gap-4">
        {mockPendingDeliveries.map((trip) => (
          <div key={trip.id} className="border p-4 rounded shadow bg-white flex justify-between items-center">
            <div>
              <p><b>Challan:</b> {trip.challanNumber}</p>
              <p><b>Vehicle:</b> {trip.vehicleNumber}</p>
              <p><b>Party:</b> {trip.party}</p>
              <p><b>Date:</b> {trip.challanDate}</p>
            </div>
            <Button onClick={() => setSelectedTrip(trip)}>Complete Delivery</Button>
          </div>
        ))}
      </div>

      {selectedTrip && (
        <div className="mt-8 bg-white border rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Step 2 – Complete Delivery</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><Label>Challan Number</Label><Input value={selectedTrip.challanNumber} readOnly className="bg-gray-100" /></div>
            <div><Label>Vehicle Number</Label><Input value={selectedTrip.vehicleNumber} readOnly className="bg-gray-100" /></div>
            <div><Label>Party</Label><Input value={selectedTrip.party} readOnly className="bg-gray-100" /></div>
            <div><Label>Unload Weight (MT)</Label><Input type="number" step="0.01" value={unloadWeight} onChange={(e) => setUnloadWeight(e.target.value)} required /></div>
            <div><Label>Upload Challan Copy (PDF)</Label><Input type="file" accept="application/pdf" onChange={(e) => setChallanCopy(e.target.files[0])} required /></div>
            <div><Label>Upload Weighbridge Slip (PDF)</Label><Input type="file" accept="application/pdf" onChange={(e) => setWeighbridgeSlip(e.target.files[0])} required /></div>
            <div className="col-span-full text-right">
              <Button type="submit">✅ Submit Delivery</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
