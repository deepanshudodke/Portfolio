import React from "react";

function SingleProject({ image, title, tech, live, git }) {
    return (
        <div class="single-project">
            <div class="slide slide1">
                <div class="content">
                    <div class="icon">
                        <img src={require(`../img/${image}.png`)}></img>
                    </div>
                </div>
            </div>

            <div class="slide slide2">
                <div class="content">
                    <h3>{title}</h3>

                    <p>{tech}</p>
                    <div className="live-link">
                        <a href={live} target="_blank">
                            Live
                        </a>
                        <a href={git} target="_blank">
                            Git
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProject;
