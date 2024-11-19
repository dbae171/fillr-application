// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    
    <footer className="w-full bg-white-100 py-6">
      <div className="border-t border-slate-200 py-4"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Company Info */}
        <div className="text-xl font-bold text-slate-800 md:mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Fillr Logo" width={40} height={40} />
          <p className="items-center">Fillr</p>
        </Link>
          <p className="text-sm font-medium text-slate-500">
            An Inventory Management Software
            <br></br>
            that will change the game for 
            <br></br>
            your business today.
            <br></br>
            <br></br>- Daniel Bae
            </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 mt-4 md:mt-0 text-gray-800">
            <h2 className="font-bold text-gray-700">Start Here</h2>
            <div className="flex flex-col space-y-2 ">
                <Link href="/auth/login" className="text-gray-600 hover:text-gray-800 font-medium">
                   Sign In
                </Link>
                <Link href="/manager/dashboard" className="text-gray-600 hover:text-gray-800 font-medium">
                   Manager Dashboard
                </Link>
                <Link href="/employee/dashboard" className="text-gray-600 hover:text-gray-800 font-medium">
                    Employee Dashboard
                </Link>
            </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-gray-500 mt-2 md:mt-14 text-sm">
          &copy; {new Date().getFullYear()} Fillr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}