import "./Home.css";
import phomtu from "../img/deepanshu.jpg";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
    return (
        <>
            <section className="hero" id="home">
                <div className="container f_flex top">
                    <div className="left top">
                        <h3>世界に認めてもらう</h3>
                        <h1>
                            Hi , I am{" "}
                            <span>
                                DEEPANSHU <br />
                                DODKE
                            </span>
                        </h1>
                        <h2>
                            a
                            <span>
                                <Typewriter
                                    words={[
                                        " おたく",
                                        " Developer",
                                        " Student",
                                        " Coder"
                                    ]}
                                    loop
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>
                        <p>
                            I am a hard working, honest individual. I am a good
                            timekeeper, always willing to learn new skills. I am
                            friendly, helpful and polite, have a good sense of
                            humour. I am able to work independently in busy
                            environments and also within a team setting. I am
                            outgoing and tactful, and able to listen effectively
                            when solving problems.{" "}
                        </p>
                        <div className="social">
                            <h4>Follow Me</h4>
                            <div className=" icons f_flex">
                                <a
                                    href="https://www.instagram.com/deepanshu_dodke/"
                                    target="_blank"
                                >
                                    <i
                                        class="bx bxl-instagram-alt"
                                        style={{ color: "#f9f5f5" }}
                                    ></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/deepanshu-dodke-830887204/"
                                    target="_blank"
                                >
                                    <i
                                        class="bx bxl-linkedin-square"
                                        style={{ color: "#f9f5f5" }}
                                    ></i>
                                </a>
                                <a
                                    href="https://github.com/deepanshudodke"
                                    target="_blank"
                                >
                                    <i
                                        class="bx bxl-github"
                                        style={{ color: "#f9f5f5" }}
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_image">
                            <img src={phomtu}></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
