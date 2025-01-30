import React, {Component} from "react";
import Brandlogo from "../assets/shop-logo-one-1.jpg"


export default class Footer extends Component{
    render(){
        return(
            <footer className="custom-footer">
                <div className="container footer-container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12  col-xs-3 footer-col logo-contact-info">
                            <div className="logofooter">
                                <img className="brand-logo-footer" alt="Brand" src={Brandlogo} height="100px" width="100px"/>
                                <p className="footer-intro">Kota Babe - A House of Lolo</p>
                            </div>
                            <div className="addressfooter">
                                <p><span className="address-label">Address:</span>&nbsp;37 Stanrich, EastGate, Johannesburg</p>
                                <p><span className="address-label">Phone:</span>&nbsp;(+27)8 444 5619</p>
                                <p><span className="address-label">Email:</span>&nbsp;zaza@gmail.com</p>
                            </div>
                            
                        </div>
                        <div className="col-md-4 col-sm-12 footer-col">
                            <h6 className="heading7">GENERAL LINKS</h6>
                            <ul className="footer-ul">
                            <li><a href="/"> Career</a></li>
                            <li><a href="/"> Home Delivery</a></li>
                    
                            <li><a href="/"> Donate A Meal</a></li>
                            <li><a href="/"> Frequently Ask Questions</a></li>
                            <li><a href="/"> Reviews</a></li>
                            <li><a href="/"> Gallery</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 footer-col">
                            <h6 className="heading7">LATEST POST</h6>
                            <li><a className="footer-a-tag" href="/">About us</a></li>
                            <li><a className="footer-a-tag" href="/"> Privacy Policy</a></li>
                            <li><a className="footer-a-tag" href="/"> Terms & Conditions</a></li>
                            <li><a className="footer-a-tag" href="/">Join Us</a></li>
                            <li><a className="footer-a-tag" href="/">Contact us</a></li>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="copyright-section">
                        <div className="copyright-text">
                            <span>© 2023 - All Rights with Kota Babe</span>
                        </div>
                        <div className="copyright-email">
                            <a className="footer-a-tag" href="/">www.kotababe.com / </a>
                            {/* <a className="footer-a-tag site-map-link" href="/">Site Map</a> */}
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}