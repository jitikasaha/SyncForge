import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Workspace from "./pages/Workspace";
import Room from "./pages/Room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/workspace"
          element={<Workspace />}
        />

        <Route
          path="/room/:roomId"
          element={<Room />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;