import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./component/Books";
import Category from "./component/Category";

function App() {
  const [mode, setMode] = useState("Light");
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar setMode={setMode} mode={mode} />
        <Routes>
        <Route path="/" element={<Dashboard mode={mode} />} />
          <Route path="/dashboard" element={<Dashboard mode={mode} />} />
          <Route path="/books" element={<Books mode={mode} />} />
          <Route path="/category" element={<Category mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
