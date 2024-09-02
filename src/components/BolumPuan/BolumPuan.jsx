import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BolumPuan.css';

function BolumPuan() {
    const [bolum, setBolum] = useState('');
    const [yil, setYil] = useState('');
    const [tabanPuani, setTabanPuani] = useState('');
    const [bolumler, setBolumler] = useState([]);
    const [yillar, setYillar] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/api/tabanpuanlari/${bolum}/${yil}`);
            setTabanPuani(response.data.tabanPuani);
        } catch (error) {
            console.error("Hata:", error);
            setTabanPuani('Bulunamadı');
        }
    };

    useEffect(() => {
        axios.post('http://localhost:5000/api/tabanpuanlari/')
        axios.get('http://localhost:5000/api/tabanpuanlari/bolumler')
            .then(response => setBolumler(response.data))
            .catch(error => console.error('Hata:', error));

        axios.get('http://localhost:5000/api/tabanpuanlari/yillar')
            .then(response => setYillar(response.data))
            .catch(error => console.error('Hata:', error));
    }, []);

    return (
        <div className="BolumPuan">
            <h1>Taban Puanları</h1>
            <form onSubmit={handleSubmit}>
                <select value={bolum} onChange={(e) => setBolum(e.target.value)}>
                    <option value="">Bölüm Seçiniz!</option>
                    {bolumler.map((bolum, index) => (
                        <option key={index} value={bolum}>{bolum}</option>
                    ))}
                </select>
                <select value={yil} onChange={(e) => setYil(e.target.value)}>
                    <option value="">Yıl Seçiniz!</option>
                    {yillar.map((yil, index) => (
                        <option key={index} value={yil}>{yil}</option>
                    ))}
                </select>
                <button type="submit">Göster</button>
            </form>
            {tabanPuani && (
                <div>
                    <p className='p2'>Taban Puanı: {tabanPuani}</p>
                    <p className='p1'>Bölüm: {bolum}</p>
                    <p className='p1'>Yıl: {yil}</p>
                </div>
            )}
        </div>
    );
}

export default BolumPuan;
