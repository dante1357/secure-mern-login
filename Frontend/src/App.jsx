import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/user" element={<Welcome />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
