import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// This is the main component of the application
function App() {
  return (
    <Routes>
      {/* This route is for the home page */}
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
