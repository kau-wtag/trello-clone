// App.jsx
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <nav role="navigation" className="w-full bg-blue-600 p-4 text-white">
        Navbar
      </nav>
      <aside role="complementary" className="w-64 bg-gray-300 p-4">
        Sidebar
      </aside>
      <main role="main" className="flex-grow p-4 bg-white">
        Main Content
      </main>
    </div>
  );
};

export default App;
