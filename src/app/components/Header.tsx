export default function Header() {
  return (
    <div className="text-center py-16 bg-white shadow-md m-6 rounded-xl">
      <h1 className="text-5xl font-extrabold text-gray-800">
        Welcome
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Tailwind CSS Utility Classes Practice
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
        Explore More
      </button>
    </div>
  );
}