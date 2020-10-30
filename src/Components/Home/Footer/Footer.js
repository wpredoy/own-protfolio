import React from 'react';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: 'Emergency Website Create', link: '/emergency'},
        {name: 'Service', link: '/Service'},
        {name: "Personal Diseases" , link: "/Personal-Diseases"},
        {name: "Visit Profile" , link: "/Visit-Profile"}

    ]
    const ourAddress = [
        {name: 'Rajshahi, Bangladeshi', link: '/google.com/map'},
        {name: 'Service', link: '/Service'}

    ]
    const emergency = [
        {name: 'Emergency Website Create', link: '/emergency'},
        {name: 'Service', link: '/Service'},
        {name: "Personal Diseases" , link: "/Personal-Diseases"},
        {name: "Visit Profile" , link: "/Visit-Profile"}

    ]
    const services = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Service" , link: "/Service"},
        {name: "Service" , link: "/Service"},
        {name: "Service" , link: "/Service"}
    ]
    return (
        <footer className='footer-area clear-both'>
            <div className='container pt-5'>
                <div className='row py-5'>
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle={"services"} menuItems={services}/>
                    <FooterCol key={3} menuTitle={"emergency"} menuItems={emergency}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}/> 
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;