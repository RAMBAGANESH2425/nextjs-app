import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Header />

      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to Inventory Management System
        </h1>

        <p className="mt-4 text-gray-700 text-lg">
          Tailwind CSS styling added successfully.
        </p>
      </div>
    </div>
  );
}