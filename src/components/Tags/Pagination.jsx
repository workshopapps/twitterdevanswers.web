import React from 'react'
import styles from './pagination.module.css' 

const Pagination = () => {
  return (
    <div className={styles.pagination}>
        <button className={styles.pagination__item}>Prev</button>
        <div className={styles.pagination__item}>1</div>
        <div className={styles.pagination__itemactive}>2</div>
        <div className={styles.pagination__item}>3</div>
         <span className={styles.pagination__item}>...</span>
         <div className={styles.pagination__item}>942</div>
         <button className={styles.pagination__item}>Next</button>
    </div>
  )
}

export default Pagination