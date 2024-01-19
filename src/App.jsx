import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Playlist } from "./Components/Playlist/Playlist";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Playlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
