import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Scan from "./pages/ScanPayment";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scan/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
