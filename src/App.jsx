import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="w-full bg-blue-600 p-4 text-white">Navbar</nav>
      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-300 p-4">Sidebar</aside>
        <main className="flex-grow p-4 bg-white">Main Content</main>
      </div>
    </div>
  );
};

export default App;
