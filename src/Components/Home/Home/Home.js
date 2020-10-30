import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Mywork from '../Mywork/Mywork';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Mywork/>
            <Footer/>
        </div>
    );
};

export default Home;