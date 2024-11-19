// components/StatusUpdateForm.js
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function StatusUpdateForm({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), name: itemName, status, quantity };
    onAddItem(newItem);
    setItemName("");
    setStatus("");
    setQuantity("");
  };

  return (
    <div className="mt-6">
      <Card className="bg-slate-200 flex-col items-center text-center space-y-7">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-800">Add New Item</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleAdd} className="space-y-4">
            <Input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Item Name"
              required
            />
            <Input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Status (e.g., In Stock, Low Stock)"
              required
            />
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
              required
            />
            <Button type="submit" className="bg-slate-800 text-white p-2 rounded">
              Add Item
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
