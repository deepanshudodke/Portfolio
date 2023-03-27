import React from "react";
import "./ArtGallary.css";
import art1 from "../img/art (1).png";

import art2 from "../img/art (2).png";

import art3 from "../img/art (3).png";

import art4 from "../img/art (4).png";

import art5 from "../img/art (5).png";

import art6 from "../img/art (6).png";

import art7 from "../img/art (7).png";

import art8 from "../img/art (8).png";

import art9 from "../img/art (9).png";

import art10 from "../img/art (10).png";

import art11 from "../img/art (11).png";

import art12 from "../img/art (12).png";
function ArtGallary() {
    return (
        <section className="art" id="art">
            <div className="container">
                <div className="heading">
                    <h4>ART GALLARY</h4>
                </div>
                <div className="all-images">
                    <div class="gallery">
                        <div class="gallery__column">
                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art4} class="gallery__image" />
                                </figure>
                            </a>

                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art1} class="gallery__image" />
                                </figure>
                            </a>

                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art2} class="gallery__image" />
                                </figure>
                            </a>
                        </div>

                        <div class="gallery__column">
                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art12} class="gallery__image" />
                                </figure>
                            </a>

                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art7} class="gallery__image" />
                                </figure>
                            </a>

                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art10} class="gallery__image" />
                                </figure>
                            </a>
                        </div>

                        <div class="gallery__column">
                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art11} class="gallery__image" />
                                </figure>
                            </a>

                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art8} class="gallery__image" />
                                </figure>
                            </a>

                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art9} class="gallery__image" />
                                </figure>
                            </a>
                        </div>

                        <div class="gallery__column">
                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art6} class="gallery__image" />
                                </figure>
                            </a>

                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art5} class="gallery__image" />
                                </figure>
                            </a>

                            <a href="JavaScript:void(0)" class="gallery__link">
                                <figure class="gallery__thumb">
                                    <img src={art3} class="gallery__image" />
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArtGallary;
