import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";

const mockData = [
  {
    challanNumber: "CH001",
    deliveryDate: "2024-05-12",
    vehicleNumber: "HR55AB1234",
    party: "ABC Constructions",
    unloadWeight: "18.35",
    challanUrl: "https://drive.google.com/view?id=example-challan",
    weighbridgeUrl: "https://drive.google.com/view?id=example-weighbridge"
  },
  {
    challanNumber: "CH002",
    deliveryDate: "2024-05-14",
    vehicleNumber: "HR29CD5678",
    party: "XYZ Infra",
    unloadWeight: "19.20",
    challanUrl: "https://drive.google.com/view?id=example-challan2",
    weighbridgeUrl: "https://drive.google.com/view?id=example-weighbridge2"
  }
]

export default function Invoicing() {
  const [invoiceData, setInvoiceData] = useState([])

  useEffect(() => {
    // This would be replaced with actual fetch from Google Sheets
    setInvoiceData(mockData)
  }, [])

  const handleChange = (index, field, value) => {
    const updated = [...invoiceData]
    updated[index][field] = value
    setInvoiceData(updated)
  }

  const handleSubmit = (index) => {
    const data = invoiceData[index]
    console.log("Saving Invoice:", data)
    // Send to Google Sheet logic here
    alert("Invoice marked complete: " + data.invoiceNumber)
    const updated = invoiceData.filter((_, i) => i !== index)
    setInvoiceData(updated)
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Pending Invoices</h1>

      {invoiceData.length === 0 ? (
        <p>No pending invoices.</p>
      ) : (
        <div className="space-y-4">
          {invoiceData.map((item, index) => (
            <div key={item.challanNumber} className="border rounded-lg p-4 shadow bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                <div><Label>Challan No</Label><div>{item.challanNumber}</div></div>
                <div><Label>Delivery Date</Label><div>{item.deliveryDate}</div></div>
                <div><Label>Vehicle No</Label><div>{item.vehicleNumber}</div></div>
                <div><Label>Party</Label><div>{item.party}</div></div>
                <div><Label>Unload Weight (MT)</Label><div>{item.unloadWeight}</div></div>
                <div>
                  <Label>Challan Copy</Label>
                  <a href={item.challanUrl} className="text-blue-600 underline" target="_blank">View</a>
                </div>
                <div>
                  <Label>Weighbridge Slip</Label>
                  <a href={item.weighbridgeUrl} className="text-blue-600 underline" target="_blank">View</a>
                </div>
                <div>
                  <Label>Invoice Number</Label>
                  <Input
                    value={item.invoiceNumber || ""}
                    onChange={(e) => handleChange(index, "invoiceNumber", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Invoice Date</Label>
                  <Input
                    type="date"
                    value={item.invoiceDate || ""}
                    onChange={(e) => handleChange(index, "invoiceDate", e.target.value)}
                  />
                </div>
              </div>
              <div className="text-right">
                <Button onClick={() => handleSubmit(index)}>
                  ✅ Mark as Invoiced
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
