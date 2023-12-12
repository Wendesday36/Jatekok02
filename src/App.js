import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jatekok from './pages/Jatekok';
import TictactoeApp from './pages/TictactoeApp';
import Layout from './layout0';
import NoPage from './pages/NoPage';
import LighOutApp from './pages/LighOutApp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< Jatekok />} />
          <Route path="tictactoe" element={<TictactoeApp />} />
          <Route path="lightout" element={<LighOutApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
