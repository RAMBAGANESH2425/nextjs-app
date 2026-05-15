export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">
        Inventory System
      </h1>

      <ul className="flex gap-6">
        <li className="hover:text-yellow-300 cursor-pointer">
          Home
        </li>

        <li className="hover:text-yellow-300 cursor-pointer">
          About
        </li>

        <li className="hover:text-yellow-300 cursor-pointer">
          Services
        </li>

        <li className="hover:text-yellow-300 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
}