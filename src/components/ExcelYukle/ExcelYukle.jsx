import React, { useState } from 'react';
import axios from 'axios';
import './ExcelYukle.css'; // Header bileşenine ait CSS dosyasını içe aktarıyoruz

function ExcelYukle() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setErrorMessage('Lütfen bir dosya seçin.');
            return;
        }
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            await axios.post('http://localhost:5000/api/ogrenciler', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setSuccessMessage('Dosya başarıyla yüklendi.');
        } catch (error) {
            setErrorMessage('Dosya yüklenirken bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='ExcelYukle'>
            <h1>Excel Dosyası Yükle</h1>
            {successMessage && <div className="success">{successMessage}</div>}
            {errorMessage && <div className="error">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit" disabled={loading}>Yükle</button>
            </form>
        </div>
    );
}

export default ExcelYukle;
