import React from 'react';
import './Header.css'; // Header bileşenine ait CSS dosyasını içe aktarıyoruz
import logo from '../../assets/koulogo.png'; // Örnek dosya yolu
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div>
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <nav className="navbar">
        {location.pathname !== '/' && (
          <ul className="nav-list">
            <li className="nav-item"><Link to="/tabanpuanlarinigoruntule">Bölüm Taban Puanlarını Görüntüle</Link></li>
            <li className="nav-item"><Link to="/exceldosyasiniyukle">Excel Dosyası Yükle</Link></li>
            <li className="nav-item"><Link to="/ogrencilerigoruntule">Öğrencileri Görüntüle</Link></li>
            <li className="nav-item"><Link to="/ogrencidosyalarigoruntule">Öğrenci Dosyalarını Görüntüle</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
