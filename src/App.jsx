import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
