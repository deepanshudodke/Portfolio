import "./Projects.css";
import myshop from "../img/myshop.png";
import city from "../img/city.png";
import ProjectDetails from "./ProjectDetails";
import SingleProject from "./SingleProject";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="heading">
                    <h4>PROJECTS</h4>
                </div>
                <div className="all-projects">
                    {ProjectDetails.map((detail, index) => {
                        return <SingleProject {...detail} key={index} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
