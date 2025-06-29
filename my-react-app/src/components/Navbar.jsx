export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-8 py-4 bg-pink-100">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="logo" className="h-8 w-8" />
          <h1 className="font-bold text-xl">RECIPEE'S</h1>
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>Home</li>
          <li>Mobile App</li>
          <li>Recipes</li>
          <li>Blogs</li>
          <li>Gallery</li>
        </ul>
        <button className="bg-white border-2 border-black rounded-full px-4 py-2 shadow">
          Download App
        </button>
      </nav>
    );
  }
  