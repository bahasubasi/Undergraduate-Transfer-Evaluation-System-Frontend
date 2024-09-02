import React, { useState } from 'react';
import axios from 'axios';
import './GirisYap.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('dekanlik'); // Default olarak dekanlık seçili
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/userlogin', {
                username,
                password,
                userType
            });
            window.location.href = `http://localhost:5173/anasayfa`; // Tokeni URL'ye ekle ve yönlendir
        } catch (error) {
            console.error('Giriş hatası:', error.response.data);
            setError(error.response.data); // Hata mesajını state'e kaydet
        }
    };

    return (
        <div className="loginContainer">
            <h2>Giriş Yap</h2>
            <div>
                <label>Kullanıcı Adı:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Şifre:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Kullanıcı Türü:</label>
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="dekanlik">Dekanlık</option>
                    <option value="bolum">Bölüm</option>
                </select>
            </div>
            {error && <div className="error">{error}</div>} {/* Hata varsa göster */}
            <button onClick={handleLogin}>Giriş Yap</button>
        </div>
    );
}

export default Login;
