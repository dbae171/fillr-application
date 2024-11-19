// components/Navbar.jsx
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"; // Import shadcn Button component

export default function Navbar() {
  return (
    <nav className="w-full bg-slate shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Fillr Logo" width={40} height={40} />
        </Link>
        </div>
        
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          
          
          <Link href="/auth/login">
            <Button variant="outline" className="font-bold">Login</Button>
          </Link>
          <Link href="/auth/signup">
            <Button variant="outline" className="font-bold">Create an Account</Button>
          </Link>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-slate-200"></div>
    </nav>
  );
}