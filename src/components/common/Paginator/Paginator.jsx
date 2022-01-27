import style from "./Paginator.module.css"
import { useState } from 'react';


const Paginator = ({ totalItemsCount, pageSize, currentPage, setCurrentPage, addNewUsers, portionSize = 10 }) => {

    let numberOfPages = Math.ceil(totalItemsCount / pageSize) /10;

    let numberOfPagesArray = [];

    for (let index = 1; index <= numberOfPages; index++) {
        numberOfPagesArray.push(index)
    }

    let portionCount = Math.ceil(numberOfPages / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;




    return (
        <div className={style.numberOfPage}>
            { portionNumber > 1 &&  <button onClick={() => setPortionNumber(portionNumber - 1)}  > Prev</button>}
            {numberOfPagesArray.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(number => <h3 className={currentPage === number ? style.activ : ""} onClick={() => {
                    setCurrentPage(number)
                    addNewUsers(number)

                }} >{number}</h3>)}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)} >Next</button>}
        </div>
    )
};

export default Paginator;
