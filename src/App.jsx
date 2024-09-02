import './App.css'
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Puan from "./pages/Puan";
import Excel from "./pages/Excel";
import Ogrenci from  "./pages/Ogrenci";
import Dosyalar from "./pages/OgrenciDosyaGoruntule";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/anasayfa" element={<HomePage />} />
      <Route path="/tabanpuanlarinigoruntule" element={<Puan />} />
      <Route path="/exceldosyasiniyukle" element={<Excel />} />
      <Route path="/ogrencilerigoruntule" element={<Ogrenci />} />
      <Route path="/ogrencidosyalarigoruntule" element={<Dosyalar />} />
    </Routes>
  );
}

export default App
