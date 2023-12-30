import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import Financial from "./pages/Financial/Financial";
import Login from "./pages/Login/Login";
import Movements from "./pages/Movements/Movements";
import Register from "./pages/Register/Register";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Stock from "./pages/Stock/Stock";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movements" element={<Movements />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/stock" element={<Stock />} />
          </Routes>
        </Menu>
      </BrowserRouter>
    </div>
  );
}

export default App;
