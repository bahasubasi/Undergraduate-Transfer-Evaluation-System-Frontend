import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import OgrenciDegistir from "../components/OgrenciDegistir/OgrenciDegistir";

const Ogrenci = () => {
  return (
    <React.Fragment>
      <Header />
      <OgrenciDegistir />
      <Footer />
    </React.Fragment>
  );
};

export default Ogrenci