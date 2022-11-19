import React from 'react'
import './Pagination.css' 

const Pagination = () => {
  return (
    <div className='pagination'>
        <button className='pagination__item'>Prev</button>
        <div className='pagination__item'>1</div>
        <div className='pagination__item-active'>2</div>
        <div className='pagination__item'>3</div>
         <span className='pagination__item'>...</span>
         <div className='pagination__item'>942</div>
         <button className='pagination__item'>Next</button>
    </div>
  )
}

export default Pagination