// app/manager/dashboard/page.js
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ManagerDashboard() {
  const [submittedReports, setSubmittedReports] = useState([]);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [time, setTime] = useState("");

  // Fetch submitted reports from backend
  const fetchReports = async () => {
    try {
      const response = await fetch("/api/reports");
      const data = await response.json();
      setSubmittedReports(data);
    } catch (error) {
      console.error("Failed to fetch reports:", error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []); //effect only runs once when the component mounts

  const handleManualRequest = async () => {
    // Placeholder for sending an immediate request
    try {
      await fetch("/api/request/manual", { method: "POST" });
      alert("Request sent to employee.");
    } catch (error) {
      console.error("Failed to send request:", error);
    }
  };

  const handleScheduleRequest = async () => {
    // Placeholder for scheduling request
    try {
      await fetch("/api/request/schedule", {
        method: "POST",
        body: JSON.stringify({ dayOfWeek, time }),
        headers: { "Content-Type": "application/json" },
      });
      alert("Schedule set.");
    } catch (error) {
      console.error("Failed to set schedule:", error);
    }
  };

  const handleDownloadReport = () => {
    // Placeholder for downloading a report
    console.log("Downloading inventory list as PDF/CSV.");
  };

  return (
    
    <div className="bg-dot-grid p-8 space-y-8">
      
      <Card className="bg-slate-200">
        <CardHeader>
          <CardTitle className="text-xl">Request Inventory Check</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleManualRequest} className=" bg-slate-800 text-white">
            Send Immediate Request
          </Button>
          <div className="space-y-4 mt-14">
            <p className="text-xl font-semibold text-gray-800">Schedule Recurring Inventory Checks</p>
            <Input
              type="text"
              placeholder="E.g., Monday, Wednesday"
              value={dayOfWeek}
              onChange={(e) => setDayOfWeek(e.target.value)}
            />
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <Button onClick={handleScheduleRequest} className=" bg-slate-800 text-white mt-2">
              Set Schedule
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-200">
        <CardHeader>
          <CardTitle className="text-xl">Submitted Reports</CardTitle>
        </CardHeader>
        <CardContent>
          {submittedReports.map((report, index) => (
            <p key={index} className="text-sm">
              <strong>Report {index + 1}:</strong> Submitted on {report.date} at {report.time}
            </p>
          ))}
          <Button onClick={handleDownloadReport} className=" bg-slate-800 text-white mt-2">
            Download Inventory List
          </Button>
        </CardContent>
      </Card>
    </div>
    
  );
}
