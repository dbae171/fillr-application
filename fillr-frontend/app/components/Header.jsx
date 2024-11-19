// components/Header.js
export default function Header({ title }) {
    return (
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <button className="text-blue-600 hover:underline">Logout</button>
      </header>
    );
  }
  