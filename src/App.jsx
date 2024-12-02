import Homepage from "./Homepage";
import AuthorDetail from "./AuthorDetail";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import "./Portfolio.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/author/:username" element={<AuthorDetail />} />
      </Routes>
    </>
  );
}
