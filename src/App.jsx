import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const App = () => {
  const boards = useSelector((state) => state.boards.boards);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="flex flex-grow ">
          <Sidebar />
          <main className="flex-grow p-4">
            <Routes>
              <Route
                path="/"
                element={<Navigate to={`/board/${boards[0]?.id}`} />}
              />
              <Route path="/board/:id" element={<Board />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
