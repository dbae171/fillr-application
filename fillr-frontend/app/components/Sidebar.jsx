// components/Sidebar.js

export default function Sidebar() {
    return (
      <div className="w-64 bg-slate-800 text-white flex flex-col p-4 space-y-4">
        <h2 className="text-xl font-semibold">Manager Menu</h2>
        <nav className="flex flex-col space-y-2">
          <a href="#" className="text-slate-300 hover:text-white">Dashboard</a>
          <a href="#" className="text-slate-300 hover:text-white">Previous Dates</a>
          {/* Add more links as needed */}
        </nav>
      </div>
    );
  }
  