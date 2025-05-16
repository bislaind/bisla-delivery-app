// pages/invoicing.js
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";

const dummyTrips = [
  { id: 1, challanNo: "CH001", vehicle: "HR55AB1234", status: "Completed", invoiced: false },
  { id: 2, challanNo: "CH002", vehicle: "HR55AB5678", status: "Completed", invoiced: false },
];

export default function Invoicing() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [invoiceData, setInvoiceData] = useState({});

  const handleInputChange = (e) => {
    setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setInvoiceData({ ...invoiceData, invoiceFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Invoice for:", selectedTrip, invoiceData);
    setSelectedTrip(null);
    setInvoiceData({});
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Invoicing</h1>

      <div className="space-y-4">
        {dummyTrips.filter(t => !t.invoiced).map(trip => (
          <div key={trip.id} className="p-4 border rounded-xl bg-gray-50 shadow">
            <div className="flex justify-between">
              <div>
                <p><b>Challan:</b> {trip.challanNo}</p>
                <p><b>Vehicle:</b> {trip.vehicle}</p>
              </div>
              <Button onClick={() => setSelectedTrip(trip)}>
                🧾 Create Invoice
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedTrip && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow w-full max-w-xl">
            <h2 className="text-xl font-semibold mb-4">Create Invoice for {selectedTrip.challanNo}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Invoice Number</Label>
                <Input name="invoiceNumber" required onChange={handleInputChange} />
              </div>
              <div>
                <Label>Invoice Date</Label>
                <Input name="invoiceDate" type="date" required onChange={handleInputChange} />
              </div>
              <div>
                <Label>Billing Amount (₹)</Label>
                <Input name="billingAmount" type="number" required onChange={handleInputChange} />
              </div>
              <div>
                <Label>Upload Invoice</Label>
                <Input name="invoiceFile" type="file" accept=".pdf,image/*" onChange={handleFileChange} />
              </div>
              <div className="flex justify-end gap-4">
                <Button type="button" onClick={() => setSelectedTrip(null)} className="bg-red-500 hover:bg-red-600">
                  Cancel
                </Button>
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  Save Invoice
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
