import sadFace from "../assets/Icons/SadFace.svg";
import leftArrow from "../assets/Icons/LeftArrow.svg";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className='not-found flex-col'>
            <img src={sadFace} alt='sad face' />
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The Page you are looking for doesn't exist</p>
            <Link to='/' className='back-to-home flex-row'>
                <img src={leftArrow} alt='' />
                <span>Return to Home</span>
            </Link>
        </div>
    );
};
export default NotFound;
