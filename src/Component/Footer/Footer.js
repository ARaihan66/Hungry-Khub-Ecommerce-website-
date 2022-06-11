import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faGoogle,faInstagram,faTwitter, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div>

            <div>


                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#1c2331" }}
                >

                    <section
                        className="d-flex justify-content-between p-4"
                        style={{ backgroundColor: "#6351ce" }}
                    >

                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>



                        <div>
                            <a href="" className="text-white me-4">
                            <FontAwesomeIcon icon={faFacebook} style={{margin:"10px",height:"30px"}}/>
                            </a>
                            <a href="" className="text-white me-4">
                            <FontAwesomeIcon icon={faTwitter} style={{margin:"10px",height:"30px"}}/>
                            </a>
                            <a href="" className="text-white me-4">
                            <FontAwesomeIcon icon={faYoutube} style={{margin:"10px",height:"30px"}}/>
                            </a>
                            <a href="" className="text-white me-4">
                            <FontAwesomeIcon icon={faGoogle} style={{margin:"10px",height:"30px"}}/>
                            </a>
                            <a href="" className="text-white me-4">
                            <FontAwesomeIcon icon={faInstagram} style={{margin:"10px",height:"30px"}}/>
                            </a>
                            <a href="" className="text-white me-4">
                            <FontAwesomeIcon icon={faWhatsapp} style={{margin:"10px",height:"30px"}}/>
                            </a>
                        </div>

                    </section>



                    <section className="">
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 className="fw-bold">Hungry Khub</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p style={{textAlign:"justify"}}>
                                        Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office
                                        or looking to avoid the weekly shop? Then Hungry Khub Bangladesh is the right destination for you! Hungry Khub offers you
                                        a long and detailed list of the best restaurants and shop. Check out Hungry Khub shops for favourite partners like Unimart,
                                        Suborno, Shwapno, Bengal Meat, and much more.
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Products</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="#!" className="text-white">Burger</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Pizza</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Pasta</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Kacchi</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Sweets</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Chicken Fry</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Beaf</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Chicken Biryani</a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="#!" className="text-white">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Help</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p><i className="fas fa-home mr-3"></i> Malibag, 102/24, Dhaka</p>
                                    <p><i className="fas fa-envelope mr-3"></i>Email: info@hungrykhub.com</p>
                                    <p><i className="fas fa-phone mr-3"></i>Hot Line: +88 01767013859</p>
                                    <p><i className="fas fa-print mr-3"></i>Hot Line: +88 01704843884</p>
                                    <p><i className="fas fa-print mr-3"></i>TelePhone: 99 456 786</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2022 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/"
                        > Hungry Khub.com</a
                        >
                    </div>

                </footer>

            </div>

        </div>
    );
}

export default Footer;