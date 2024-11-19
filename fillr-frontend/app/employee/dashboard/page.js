"use client"; // Enable client-side functionality

import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import EmployeeDashboardNavbar from "../../components/EmployeeDashboardNavbar";
import InventoryList from "../../components/InventoryList";
import StatusUpdateForm from "../../components/StatusUpdateForm";
import { Button } from "@/components/ui/button";

export default function EmployeeDashboard() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch initial inventory data (from backend)
  const fetchInventory = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/inventory");
      setInventoryItems(response.data); // Set fetched data to state
    } catch (error) {
      console.error("Failed to fetch inventory:", error);
    } finally {
      setLoading(false);
    }
  };

  // Use Effect to fetch inventory on component mount
  useEffect(() => {
    fetchInventory();
  }, []);

  const handleAddItem = async (item) => {
    try {
      const response = await axios.post("http://localhost:8080/api/inventory", item, {
        headers: { "Content-Type": "application/json" },
      });
      setInventoryItems((prev) => [...prev, response.data]); // Append new item from the response
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/inventory/${updatedItem.id}`, updatedItem, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        setInventoryItems((items) =>
          items.map((item) => (item.id === updatedItem.id ? response.data : item))
        ); // Update the state with the updated item
      }
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/inventory/${id}`);
      if (response.status === 200) {
        setInventoryItems((items) => items.filter((item) => item.id !== id)); // Remove deleted item from state
      }
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleSubmitToManager = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/inventory/submit", inventoryItems, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        alert("Inventory list sent to manager.");
      }
    } catch (error) {
      console.error("Failed to submit inventory:", error);
    }
  };

  return (
    <div className="bg-dot-grid flex min-h-screen bg-gray-100 flex-col">
      <EmployeeDashboardNavbar />
      <main className="p-10 space-y-6 flex-grow">
        <StatusUpdateForm onAddItem={handleAddItem} />
        <InventoryList
          inventoryItems={inventoryItems}
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
        />
        <Button onClick={handleSubmitToManager} className="bg-slate-800 text-white p-2 rounded">
          Submit Inventory
        </Button>
      </main>
    </div>
  );
}
