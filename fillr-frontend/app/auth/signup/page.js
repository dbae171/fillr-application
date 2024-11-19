// auth/signup/page.js
"use client";  // Add this at the very top

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with", { email, password });
    // Add signup logic here
  };

  return (
    <div className="bg-dot-grid flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="space-y-8 bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        
        {/* Centered Logo and Title */}
        <div className="flex flex-col items-center space-y-4">
          <Image src="/logo.png" alt="Fillr Logo" width={80} height={80} /> {/* Logo size */}
          <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
        </div>

        {/* Input Fields */}
        <div className="space-y-2">
          <p className="text-medium font-semibold text-slate-800">Enter your email:</p>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="space-y-2">
          <p className="text-medium font-semibold text-slate-800">Enter a password:</p>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded"
          />
        </div>
        
        

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-slate-800 text-white p-3 rounded">
          Sign Up
        </Button>
        
        {/* Login Link */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-bold text-slate-800">
            Log in here!
          </Link>
        </p>
      </form>
    </div>
  );
}
