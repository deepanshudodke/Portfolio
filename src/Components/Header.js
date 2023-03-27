import React from "react";
import "./Header.css";
import { useState } from "react";
const Header = () => {
    console.log("header render");
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 60);
    });

    const [Mobile, setMobile] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="logo d_flex">
                        KNIGHT
                        <div className="ghost">
                            <i
                                class="bx bx-ghost bx-rotate-270 bx-tada"
                                style={{ color: "#fefefe" }}
                            ></i>
                        </div>
                    </div>

                    <div className="navlink">
                        <ul
                            className={
                                Mobile
                                    ? "nav-link-mobile"
                                    : "link f_flex uppercase"
                            }
                            onClick={() => setMobile(false)}
                        >
                            <li>
                                <a href="#home">home</a>
                            </li>
                            <li>
                                <a href="#skills">skills</a>
                            </li>
                            <li>
                                <a href="#projects">projects</a>
                            </li>
                            <li>
                                <a href="#coding">coding profile</a>
                            </li>
                            <li>
                                <a href="#art">art gallary</a>
                            </li>
                            <li>
                                <a href="#contact">contact</a>
                            </li>
                            <li>
                                <button className="home-btn">RESUME</button>
                            </li>
                        </ul>
                        <button
                            className="toggle ghum "
                            onClick={() => setMobile(!Mobile)}
                        >
                            {Mobile ? (
                                <i
                                    class="bx bxs-radiation bx-spin bx-rotate-270"
                                    style={{ color: "#fefefe" }}
                                ></i>
                            ) : (
                                <i
                                    class="bx bxs-radiation bx-spin bx-rotate-270"
                                    style={{ color: "#fefefe" }}
                                ></i>
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
