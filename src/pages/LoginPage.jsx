import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GirisYap from "../components/GirisYap/GirisYap";

const LoginPage = () => {
  return (
    <React.Fragment>
      <Header />
      <GirisYap />
      <Footer />
    </React.Fragment>
  );
};

export default LoginPage