import { useState, useEffect } from "react";
import leftArrow from "../assets/Icons/LeftArrow.svg";
import rightArrow from "../assets/Icons/RightArrow.svg";
const Pagination = ({ currentPage, setCurrentPage, numberOfPages }) => {
    const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(true);

    const displayPrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const displayNextPage = () => {
        if (currentPage !== numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        if (currentPage > 1) {
            setDisabledPrev(false);
        } else {
            setDisabledPrev(true);
        }

        if (currentPage === numberOfPages) {
            setDisabledNext(true);
        } else {
            setDisabledNext(false);
        }
    }, [currentPage, numberOfPages]);

    return (
        <div className='repos__pagination flex-row'>
            <button
                className={disabledPrev ? "disabled" : "btn-prev"}
                onClick={displayPrevPage}
            >
                <img src={leftArrow} alt='Previous' />
            </button>
            <div className='page-numbers flex-row'>
                {pageNumbers.map((number) => {
                    return (
                        <button className="page-number"
                            key={number}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>
                    );
                })}
            </div>
            <button
                className={disabledNext ? "disabled" : "btn-next"}
                onClick={displayNextPage}
            >
                <img src={rightArrow} alt='Next' />
            </button>
        </div>
    );
};
export default Pagination;
