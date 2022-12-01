
import React from 'react'
import  propTypes from 'prop-types';
import styleCSS from './style.module.css'

function PaginationQuestion({questionPerPage,totalQuestion,setCurrentPage,currentPage}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalQuestion/questionPerPage); i+=1 ){
        pageNumbers.push(i)
    }

    return(
        <div>
            <button className={styleCSS.button}  type='button'   onClick={()=> setCurrentPage(currentPage-1)}>Previous</button>  
               {pageNumbers.map((number)=>(
                    <button className={styleCSS.button_list}  type='button'   key={number} onClick={() => setCurrentPage(number)}>
                        {number}
                    </button>  
                ))}
             <button className={styleCSS.button}  type='button'   onClick={()=> setCurrentPage(currentPage+1)}>Next</button>  

        </div>
             
    )
}

PaginationQuestion.propTypes = {
    questionPerPage: propTypes.number.isRequired
}
PaginationQuestion.propTypes={
    totalQuestion: propTypes.number.isRequired
}
PaginationQuestion.propTypes={
    setCurrentPage: propTypes.string.isRequired
}
PaginationQuestion.propTypes={
    currentPage: propTypes.number.isRequired
}

export default PaginationQuestion