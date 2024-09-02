import React from 'react';
import './Footer.css'; // Header bileşenine ait CSS dosyasını içe aktarıyoruz
import twitlogo from '../../assets/icons8-twitterx.svg';
import instalogo from '../../assets/icons8-instagram.svg/';
import facelogo from '../../assets/icons8-facebook.svg';
import linkedinlogo from '../../assets/icons8-linkedin.svg';
import { useLocation } from 'react-router-dom'; // useLocation hook'unu içe aktarıyoruz

function Footer() {
    const location = useLocation(); // Mevcut URL'yi almak için useLocation hook'unu kullanıyoruz

    // Eğer URL "/anasayfa" ise marginTop 500px, değilse 0 olarak ayarlanacak
    const marginTop = location.pathname === '/anasayfa' ? '510px' : '0';
    
    return (
        <footer style={{ marginTop }}>
            <div className="container">
                <div className="footer-content">
                    <h3>İletişim</h3>
                    <ul className="list">
                        <li><a href="">Kocaeli Üniversitesi</a></li>
                        <li><a href="">+90 (262) 303 10 00</a></li>
                        <li><a href="">+90 (262) 303 10 33</a></li>
                        <li><a href="">rekiletisim@kocaeli.edu.tr</a></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Bağlantılar</h3>
                    <ul className="list">
                        <li><a href="">Akademik Veri Yönetim Sistemi</a></li>
                        <li><a href="">Mezun Bilgi Sistemi</a></li>
                        <li><a href="">Teknopark</a></li>
                        <li><a href="">Öğrenci Kulüpleri</a></li>
                    </ul>
                </div>
                <div className="footer-content1">
                    <h3>Bizi Takip Edin</h3>
                    <ul className="list">
                        <li><img className="logo" src={twitlogo} alt="Logo" /></li>
                        <li><img className="logo" src={instalogo} alt="Logo" /></li>
                        <li><img className="logo" src={facelogo} alt="Logo" /></li>
                        <li><img className="logo" src={linkedinlogo} alt="Logo" /></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; 2024 Kocaeli Üniversitesi . Tüm hakları saklıdır</p>
            </div>
        </footer>
    );
}

export default Footer;
