<<<<<<< Updated upstream
=======
import Homepage from "./Homepage";
import AuthorDetail from "./AuthorDetail";
import { Route, Routes } from "react-router-dom";
>>>>>>> Stashed changes
import "./App.css";
import "./Portfolio.css"


export default function App() {
<<<<<<< Updated upstream
  return <div>
    <AuthorDetail/>
  </div>;
=======

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/author/:username" element={<AuthorDetail />} />
      </Routes>
    </>
  );
>>>>>>> Stashed changes
}
