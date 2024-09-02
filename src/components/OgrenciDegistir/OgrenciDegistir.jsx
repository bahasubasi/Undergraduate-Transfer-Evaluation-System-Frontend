import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OgrenciDegistir.css';

function OgrenciDegistir() {
    const [students, setStudents] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        getStudentData();
    }, []);

    const getStudentData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/ogrenciler');
            setStudents(response.data);
        } catch (error) {
            console.error('Öğrenci verilerini getirme hatası:', error);
        }
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditedData({ ...students[index] });
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/api/ogrenciler/${editedData._id}`, editedData);
            setEditingIndex(null);
            setEditedData({});
            getStudentData();
        } catch (error) {
            console.error('Öğrenci bilgilerini güncelleme hatası:', error);
        }
    };

    const handleDelete = async (studentId) => {
        try {
            await axios.delete(`http://localhost:5000/api/ogrenciler/${studentId}`);
            getStudentData(); // Öğrenci verilerini yeniden al
        } catch (error) {
            console.error('Öğrenci silme hatası:', error);
        }
    };

    const handleChange = (e, key) => {
        setEditedData({ ...editedData, [key]: e.target.value });
    };

    return (
        <div className="OgrenciDegistirContainer">
            <h2>Öğrenci Bilgileri</h2>
            <table className="studentTable">
                <thead>
                    <tr>
                        <th>Adı Soyadı</th>
                        <th>Kayıtlı Olduğu Kurum</th>
                        <th>Kayıtlı Olduğu Program</th>
                        <th>Kayıtlı Olduğu Sınıf</th>
                        <th>Yüksek Öğretime Yerleştiği Yıl</th>
                        <th>Yerleştirmede Kullanılan Puan</th>
                        <th>Yerleştirmede Kullanılan Puan Türü</th>
                        <th>Not Sistemi</th>
                        <th>AGNO</th>
                        <th>Başvurduğu Program</th>
                        <th>Başvurduğu Öğretim Türü</th>
                        <th>Başvurduğu Sınıf</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student._id}>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.Adi_Soyadi || ''}
                                        onChange={(e) => handleChange(e, 'Adi_Soyadi')}
                                    />
                                ) : (
                                    student.Adi_Soyadi
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.Kayitli_Oldugu_Kurum || ''}
                                        onChange={(e) => handleChange(e, 'Kayitli_Oldugu_Kurum')}
                                    />
                                ) : (
                                    student.Kayitli_Oldugu_Kurum
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.Kayitli_Oldugu_Program || ''}
                                        onChange={(e) => handleChange(e, 'Kayitli_Oldugu_Program')}
                                    />
                                ) : (
                                    student.Kayitli_Oldugu_Program
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.Kayitli_oldugu_Sinif || ''}
                                        onChange={(e) => handleChange(e, 'Kayitli_oldugu_Sinif')}
                                    />
                                ) : (
                                    student.Kayitli_oldugu_Sinif
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.Yerlestigi_Yil || ''}
                                        onChange={(e) => handleChange(e, 'Yerlestigi_Yil')}
                                    />
                                ) : (
                                    student.Yerlestigi_Yil
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.Puani || ''}
                                        onChange={(e) => handleChange(e, 'Puani')}
                                    />
                                ) : (
                                    student.Puani
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.PuanTuru || ''}
                                        onChange={(e) => handleChange(e, 'PuanTuru')}
                                    />
                                ) : (
                                    student.PuanTuru
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.NotSisteni || ''}
                                        onChange={(e) => handleChange(e, 'NotSisteni')}
                                    />
                                ) : (
                                    student.NotSisteni
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.AGNO || ''}
                                        onChange={(e) => handleChange(e, 'AGNO')}
                                    />
                                ) : (
                                    student.AGNO
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.Basvurdugu_Program || ''}
                                        onChange={(e) => handleChange(e, 'Basvurdugu_Program')}
                                    />
                                ) : (
                                    student.Basvurdugu_Program
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.Basvurdugu_OgretimTuru || ''}
                                        onChange={(e) => handleChange(e, 'Basvurdugu_OgretimTuru')}
                                    />
                                ) : (
                                    student.Basvurdugu_OgretimTuru
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedData.Basvurdugu_Sinif || ''}
                                        onChange={(e) => handleChange(e, 'Basvurdugu_Sinif')}
                                    />
                                ) : (
                                    student.Basvurdugu_Sinif
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <button onClick={handleSave} className='saveButton'>Kaydet</button>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(index)} className='editButton'>Düzenle</button>
                                        <button onClick={() => handleDelete(student._id)} className='deleteButton'>Sil</button> 
                                    </>
                                )}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OgrenciDegistir;