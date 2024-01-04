import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Financial from "./pages/Financial/Financial";
import Login from "./pages/Login/Login";
import Movements from "./pages/Movements/Movements";
import Register from "./pages/Register/Register";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Stock from "./pages/Stock/Stock";
import useAuth from "./hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? Item : <Login />;
}; 

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Private Item={<Home/>}/>} />
            <Route exact path="*" element={<Private Item={<Home/>}/>} />
            <Route exact path="%" element={<Private Item={<Home/>}/>} />
            <Route exact path="/financial" element={<Private Item={<Financial/>}/>} />
            <Route exact  path="/movements" element={<Private Item={<Movements/>}/>} />
            <Route exact  path="/register" element={<Private Item={<Register/>}/>} />
            <Route exact  path="/reports" element={<Private Item={<Reports/>}/>} />
            <Route exact  path="/settings" element={<Private Item={<Settings/>}/>} />
            <Route exact  path="/stock" element={<Private Item={<Stock/>}/>} />
            <Route exact  path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
