// components/InventoryList.js
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InventoryList({ inventoryItems, onUpdateItem, onDeleteItem }) {
  return (
    <div className="mt-4">
      <h2 className="border-t text-xl font-bold mb-3">Current Inventory List</h2>
      <ul className="space-y-4">
        {inventoryItems.map((item) => (
          <li key={item.id} className="p-4 bg-slate-200 rounded shadow ">
            <p className="font-semibold text-lg">{item.name}</p>
            <p className="text-slate-600">Status: {item.status}</p>
            <p className="text-slate-600">Quantity: {item.quantity}</p>
            
            <div className="flex items-center space-y-1 mt-4 ">
              <Input
                type="text"
                placeholder="New Status"
                onChange={(e) => (item.newStatus = e.target.value)}
                className="flex-grow"
              />
              <Input
                type="number"
                placeholder="New Quantity"
                onChange={(e) => (item.newQuantity = e.target.value)}
                className="flex-grow"
              />
              <Button onClick={() => onUpdateItem({ ...item, status: item.newStatus, quantity: item.newQuantity })}>
                Update
              </Button>
              <Button variant="destructive" onClick={() => onDeleteItem(item.id)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
