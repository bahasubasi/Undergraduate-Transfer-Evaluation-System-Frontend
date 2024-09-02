import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OgrenciDosya.css';

const OgrenciDosya = () => {
    const [students, setStudents] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState({});
    const [fileNames, setFileNames] = useState({});
    const [errorMessage, setErrorMessage] = useState({});

    // Öğrenci bilgilerini ve dosya adlarını alma
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Öğrenci bilgilerini alma
                const studentsResponse = await axios.get('http://localhost:5000/api/ogrenciler');
                setStudents(studentsResponse.data);

                // Dosya adlarını alma
                const fileNamesResponse = await axios.get('http://localhost:5000/api/ogrenciler/dosyalar');
                setFileNames(fileNamesResponse.data);
            } catch (error) {
                console.error('Veri alınırken hata oluştu:', error);
                setErrorMessage({}); // Hata durumunda hata mesajlarını sıfırla
            }
        };

        fetchData();
    }, []);

    // Dosya seçimi işlemi
    const handleFileSelect = (event, studentId) => {
        setSelectedFiles({ ...selectedFiles, [studentId]: event.target.files[0] });
        setErrorMessage({ ...errorMessage, [studentId]: '' }); // Dosya seçildiğinde hata mesajını sıfırla
    };

    // Dosya yükleme işlemi
    const handleFileUpload = async (studentId) => {
        try {
            const formData = new FormData();
            formData.append('studentId', studentId);
            formData.append('file', selectedFiles[studentId]);
    
            const response = await axios.post('http://localhost:5000/api/ogrenciler/dosyalar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            console.log('Dosya başarıyla yüklendi:', response.data);
    
            // Dosya yüklendikten sonra dosya adlarını yeniden al ve güncelle
            const updatedFileNamesResponse = await axios.get('http://localhost:5000/api/ogrenciler/dosyalar');
            const updatedFileNamesData = updatedFileNamesResponse.data;
            setFileNames(updatedFileNamesData);

            // Hata mesajını sıfırla
            setErrorMessage({ ...errorMessage, [studentId]: '' });
        } catch (error) {
            console.error('Dosya yüklenirken hata oluştu:', error);
            setErrorMessage({ ...errorMessage, [studentId]: 'Dosya yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' });
        }
    };

    return (
        <div className="OgrenciDosyaContainer">
            <h2>Öğrenci Dosyaları</h2>
            <table className="studentTable">
                <thead>
                    <tr>
                        <th>Öğrenci Adı Soyadı</th>
                        <th>Dosya Yükle</th>
                        <th>Dosya Adları</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student._id}>
                            <td>{student.Adi_Soyadi}</td>
                            <td>
                                <input type="file" onChange={(e) => handleFileSelect(e, student._id)} />
                                <button className='uploadbutton' onClick={() => handleFileUpload(student._id)}>Dosya Yükle</button>
                                {errorMessage[student._id] && <div className="errorMessage">{errorMessage[student._id]}</div>}
                            </td>
                            <td>
                                {fileNames[student._id] && fileNames[student._id].map(fileName => (
                                    <div key={fileName}>
                                        <a className='link' href={`http://localhost:5000/api/ogrenciler/dosyalar/${fileName}`} target="_blank" rel="noopener noreferrer">{fileName}</a>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OgrenciDosya;
