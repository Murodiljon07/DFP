import "../index.css";
import "../assets/styles/hero.css";

/* components */
import Btn from "../components/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-containe container">
        <div className="hero-description">
          <h2 className="title">Heading</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Btn text="Our Products"></Btn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
