import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    useEffect(() => {
        console.log('Footer page!')
    }, [])
    return (
        <div id='footer' className='container-fluid'>
            <hr />
            <div className="row">
                <div className="col-6 d-flex flex-row-reverse align-items-start text-end footer-brand sky-blue-color">CM</div>
                <div className="col-6 footer-logo">
                    <p>Celebrity</p>
                    <p>Managers</p>
                </div>
            </div>
            <p className="text-center copyright-text">Copyright &copy; 2022 Celebrity Managers. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;