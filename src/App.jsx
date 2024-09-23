import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import { useSelector } from "react-redux";

const App = () => {
  const selectedBoard = useSelector((state) => state.boards.selectedBoard);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-grow ">
        <Sidebar />
        <main className="flex-grow p-4">
          <Board selectedBoard={selectedBoard} />{" "}
        </main>
      </div>
    </div>
  );
};

export default App;
