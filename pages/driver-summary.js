import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import Link from "next/link";

const mockDriverList = [
  "Ramesh Kumar",
  "Suresh Verma",
  "Amit Singh",
  "Pawan Yadav",
  "Deepak Bisla",
];

const mockTrips = [
  {
    challan: "CH1234",
    date: "2024-05-20",
    vehicle: "HR55AB1234",
    tripAmount: 1500,
    cashGiven: 1800,
    remarks: "Extra tip included",
    driver: "Ramesh Kumar",
  },
  {
    challan: "CH5678",
    date: "2024-05-19",
    vehicle: "HR26XY7890",
    tripAmount: 1200,
    cashGiven: 1000,
    remarks: "Diesel adjusted",
    driver: "Ramesh Kumar",
  },
];

export default function DriverSummary() {
  const [selectedDriver, setSelectedDriver] = useState("");
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    if (selectedDriver) {
      const filtered = mockTrips.filter((trip) => trip.driver === selectedDriver);
      setFilteredTrips(filtered);
    } else {
      setFilteredTrips([]);
    }
  }, [selectedDriver]);

  const totalTripAmount = filteredTrips.reduce((sum, trip) => sum + trip.tripAmount, 0);
  const totalCash = filteredTrips.reduce((sum, trip) => sum + trip.cashGiven, 0);
  const netSettlement = totalCash - totalTripAmount;

  return (
    <div className="p-6 space-y-6">
      <Link href="/dashboard">
        <Button className="bg-gray-200 text-black hover:bg-gray-300">⬅️ Return to Dashboard</Button>
      </Link>

      <h1 className="text-2xl font-bold">Driver-wise Summary</h1>

      <div className="max-w-sm">
        <Label>Select Driver</Label>
        <select
          value={selectedDriver}
          onChange={(e) => setSelectedDriver(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">-- Choose Driver --</option>
          {mockDriverList.map((name, idx) => (
            <option key={idx} value={name}>{name}</option>
          ))}
        </select>
      </div>

      {selectedDriver && (
        <>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Trip Breakdown</h2>
            <table className="min-w-full table-auto border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-3 py-2">Challan</th>
                  <th className="border px-3 py-2">Date</th>
                  <th className="border px-3 py-2">Vehicle</th>
                  <th className="border px-3 py-2">Trip Amount</th>
                  <th className="border px-3 py-2">Cash Given</th>
                  <th className="border px-3 py-2">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrips.map((trip, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border px-2 py-1">{trip.challan}</td>
                    <td className="border px-2 py-1">{trip.date}</td>
                    <td className="border px-2 py-1">{trip.vehicle}</td>
                    <td className="border px-2 py-1">₹{trip.tripAmount}</td>
                    <td className="border px-2 py-1">₹{trip.cashGiven}</td>
                    <td className="border px-2 py-1">{trip.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-xl shadow max-w-md">
            <h2 className="text-lg font-semibold">Summary</h2>
            <p>Total Trips: {filteredTrips.length}</p>
            <p>Total Trip Amount: ₹{totalTripAmount}</p>
            <p>Total Cash Given: ₹{totalCash}</p>
            <p className="font-bold text-blue-700">Net Settlement: ₹{netSettlement}</p>
          </div>
        </>
      )}
    </div>
  );
}
