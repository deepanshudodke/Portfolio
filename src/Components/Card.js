import web from "../img/web.png";
import java from "../img/java.png";
import problem from "../img/problem.png";
import vector from "../img/vector.png";
import cpp from "../img/cpp.png";
import video from "../img/video.png";

const Card = ({ image, title, desc }) => {
    return (
        <div className="single-card ">
            <img src={require(`../img/${image}.png`)} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default Card;
