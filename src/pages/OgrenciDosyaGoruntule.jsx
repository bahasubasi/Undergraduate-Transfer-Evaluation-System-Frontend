import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import OgrenciDosya from "../components/OgrenciDosya/OgrenciDosya";

const OgrenciDosyaGoruntule = () => {
  return (
    <React.Fragment>
      <Header />
      <OgrenciDosya />
      <Footer />
    </React.Fragment>
  );
};

export default OgrenciDosyaGoruntule