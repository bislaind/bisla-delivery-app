// pages/driver-summary.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

export default function DriverSummary() {
  const router = useRouter();
  const [selectedMonth, setSelectedMonth] = useState("2024-05");

  // Sample Data (Replace with actual DB data)
  const trips = [
    {
      date: "2024-05-01",
      challan: "CH001",
      vehicle: "HR55AB1234",
      driver: "Ravi Kumar",
      tripAmount: 2200,
      cashGiven: 2500,
      fuelGiven: 600,
    },
    {
      date: "2024-05-05",
      challan: "CH002",
      vehicle: "HR55CD5678",
      driver: "Ravi Kumar",
      tripAmount: 1800,
      cashGiven: 2000,
      fuelGiven: 500,
    },
  ];

  const summary = trips.reduce(
    (acc, trip) => {
      acc.totalTrips++;
      acc.totalTripAmount += trip.tripAmount;
      acc.totalCash += trip.cashGiven;
      acc.totalFuel += trip.fuelGiven;
      return acc;
    },
    { totalTrips: 0, totalTripAmount: 0, totalCash: 0, totalFuel: 0 }
  );

  const netSettlement = summary.totalCash - summary.totalTripAmount;

  return (
    <div className="p-6 space-y-6">
      <Link href="/dashboard">
        <Button className="bg-gray-500 hover:bg-gray-600">⬅ Return to Dashboard</Button>
      </Link>

      <h1 className="text-2xl font-bold">Driver-Wise Monthly Summary</h1>

      <div className="flex gap-4 items-end">
        <div>
          <Label>Select Month</Label>
          <Input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">🔍 Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded shadow">
        <div><b>Total Trips:</b> {summary.totalTrips}</div>
        <div><b>Total Trip Amount:</b> ₹{summary.totalTripAmount}</div>
        <div><b>Total Cash Given:</b> ₹{summary.totalCash}</div>
        <div><b>Total Fuel Given:</b> ₹{summary.totalFuel}</div>
        <div><b>Net Settlement:</b> ₹{netSettlement}</div>
      </div>

      <h2 className="text-xl font-semibold mt-8">Trip Breakdown</h2>
      <table className="w-full border mt-2 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Date</th>
            <th className="border p-2">Challan</th>
            <th className="border p-2">Vehicle</th>
            <th className="border p-2">Trip Amount</th>
            <th className="border p-2">Cash Given</th>
            <th className="border p-2">Fuel Given</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, idx) => (
            <tr key={idx}>
              <td className="border p-2">{trip.date}</td>
              <td className="border p-2">{trip.challan}</td>
              <td className="border p-2">{trip.vehicle}</td>
              <td className="border p-2">₹{trip.tripAmount}</td>
              <td className="border p-2">₹{trip.cashGiven}</td>
              <td className="border p-2">₹{trip.fuelGiven}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <Label>Remarks</Label>
        <Input placeholder="Enter settlement remarks..." />
      </div>

      <div className="text-right">
        <Button className="bg-green-600 hover:bg-green-700 mt-4">✅ Mark as Settled</Button>
      </div>
    </div>
  );
}
