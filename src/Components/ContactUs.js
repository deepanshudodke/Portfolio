import React from "react";
import "./ContactUs.css";
function ContactUs() {
    return (
        <section className="contact" id="contact">
            <div class="screen">
                <div class="screen-header">
                    <div class="screen-header-left">
                        <div class="screen-header-button close"></div>
                        <div class="screen-header-button maximize"></div>
                        <div class="screen-header-button minimize"></div>
                    </div>
                    <div class="screen-header-right">
                        <div class="screen-header-ellipsis"></div>
                        <div class="screen-header-ellipsis"></div>
                        <div class="screen-header-ellipsis"></div>
                    </div>
                </div>
                <div class="screen-body">
                    <div class="screen-body-item left">
                        <div class="app-title">
                            <span>CONTACT US</span>
                        </div>
                    </div>
                    <div class="screen-body-item">
                        <div class="app-form">
                            <div class="app-form-group">
                                <input
                                    class="app-form-control"
                                    placeholder="NAME"
                                />
                            </div>
                            <div class="app-form-group">
                                <input
                                    class="app-form-control"
                                    placeholder="EMAIL"
                                />
                            </div>
                            <div class="app-form-group">
                                <input
                                    class="app-form-control"
                                    placeholder="CONTACT NO"
                                />
                            </div>
                            <div class="app-form-group message">
                                <input
                                    class="app-form-control"
                                    placeholder="MESSAGE"
                                />
                            </div>
                            <div class="app-form-group buttons">
                                <button class="app-form-button">CANCEL</button>
                                <button class="app-form-button">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <a
                        href="https://www.linkedin.com/in/deepanshu-dodke-830887204/"
                        target="_blank"
                    >
                        <i class="fa fa-linkedin icons"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100085933196459&mibextid=ZbWKwL"
                        target="_blank"
                    >
                        <i class="fa fa-facebook icons"></i>
                    </a>
                    <a href="https://github.com/deepanshudodke" target="_blank">
                        <i class="fa fa-github icons"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/deepanshu_dodke/"
                        target="_blank"
                    >
                        <i class="fa fa-instagram icons"></i>
                    </a>
                </footer>
            </div>
        </section>
    );
}

export default ContactUs;
