import { Link } from "react-router-dom";
import sadFace from "../assets/Icons/SadFace.svg";
import leftArrow from "../assets/Icons/LeftArrow.svg";
const ErrorFallback = () => {
    return (
        <div role='alert' className='not-found flex-col'>
            <img src={sadFace} alt='sad face' />
            <h1>Oops...</h1>
            <h2>Something went wrong</h2>
            <p>Refresh the page to try again</p>
            <Link to='/' className='back-to-home flex-row'>
                <img src={leftArrow} alt='' />
                <span>Return to Home</span>
            </Link>
        </div>
    );
};
export default ErrorFallback;
