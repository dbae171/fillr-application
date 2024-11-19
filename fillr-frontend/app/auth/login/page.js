// auth/login/page.js
"use client";  // Add this at the very top

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login authentication logic here
    console.log("Logging in with", { email, password });
  };

  return (
    <div className=" bg-dot-grid flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="space-y-4 bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="flex flex-col items-center space-y-4">
          <Image src="/logo.png" alt="Fillr Logo" width={80} height={80} />
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Login</h2>
        </div>
        
        
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <Button type="submit" className="w-full bg-slate-800 text-white p-2 rounded">
          Login
        </Button>
        <p className="flex flex-col items-center space-y-4">Dont have an account with us? <Link href="/auth//signup" className="font-bold">Click here!</Link></p>
      </form>
    </div>
  );
}
