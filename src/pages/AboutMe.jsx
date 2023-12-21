import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const AboutMe = () => {
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          {/* <AiFillCheckCircle className="checkoutIcon" /> */}
          <h3>About Me</h3>
        </div>
        <span >
        At Tasty Meals, we believe that a delicious meal is not just about satisfying hunger; it's a journey of flavors, memories, and culinary artistry.
        </span>
      </div>
    </>
  );
};

export default AboutMe;
