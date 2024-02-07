import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/Home";
import DetailNews from "./pages/DetailNews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/details/:id" element={<DetailNews />} />
    </Routes>
  );
}

export default App;
