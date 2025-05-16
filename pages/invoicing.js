import React, { useEffect, useState } from "react";

export default function Invoicing() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function fetchTrips() {
      try {
        const response = await fetch("/api/completed-trips"); // replace with your actual API
        const data = await response.json();
        setTrips(data);
      } catch (err) {
        console.error("Error loading completed trips", err);
      }
    }

    fetchTrips();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Invoicing - Pending Trips</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100 text-sm text-left">
            <tr>
              <th className="border px-4 py-2">Challan No.</th>
              <th className="border px-4 py-2">Challan Date</th>
              <th className="border px-4 py-2">Delivery Date</th>
              <th className="border px-4 py-2">Client/Party</th>
              <th className="border px-4 py-2">Vehicle No.</th>
              <th className="border px-4 py-2">Challan Weight (MT)</th>
              <th className="border px-4 py-2">Unload Weight (MT)</th>
              <th className="border px-4 py-2">Weighbridge Slip</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {trips.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-4">No completed trips found</td>
              </tr>
            ) : (
              trips.map((trip, idx) => (
                <tr key={idx} className="border-t">
                  <td className="border px-4 py-2">{trip.challanNumber}</td>
                  <td className="border px-4 py-2">{trip.challanDate}</td>
                  <td className="border px-4 py-2">{trip.deliveryDate}</td>
                  <td className="border px-4 py-2">{trip.party}</td>
                  <td className="border px-4 py-2">{trip.vehicleNumber}</td>
                  <td className="border px-4 py-2">{trip.challanWeight}</td>
                  <td className="border px-4 py-2">{trip.unloadWeight}</td>
                  <td className="border px-4 py-2">
                    {trip.weighbridgeSlip ? (
                      <a
                        href={trip.weighbridgeSlip}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View Slip
                      </a>
                    ) : (
                      "Not uploaded"
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
