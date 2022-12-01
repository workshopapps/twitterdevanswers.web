/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import PaginationQuestion from '../../components/AdminPagination/QuestionPagination'
import styleCSS from './style.module.css'

function Questions() {
    const[currentPage, setCurrentPage]= useState(1)
    const[questionPerPage, setQuestionPerPage]= useState(5)

    const[questionList,setQuestionList]=useState([])
    const getQuestionList = async () =>{
        const requestOptions={
            method:"GET",
            headers:{
                "content-type": "application/json"
            },
        };
        const response = await fetch ('https://jsonplaceholder.typicode.com/comments',requestOptions);

            const data = await response.json();

           setQuestionList(data)
    }
    useEffect(() => {
        getQuestionList();
        
      }, []);

      const lastQuestionIndex = currentPage * questionPerPage
      const firstQuestionIndex = lastQuestionIndex - questionPerPage
      const currentQuestionIndex = questionList.slice(firstQuestionIndex, lastQuestionIndex)

  return (
    <div className={styleCSS.container}>
        <button type='button' className={styleCSS.createbtn}>Create Question+</button>
        <div>
            {currentQuestionIndex.map((record, i)=>
                    <div className={styleCSS.questionscontainer} key={i}>
                        <div className={styleCSS.question_container}>
                            {record.body}
                            <div className={styleCSS.points}>Amount Allocated: {record.id}</div>
                        </div>
                    </div> 
                    
                )}
        </div>
        <PaginationQuestion questionPerPage={questionPerPage} totalQuestion={questionList.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  )
}

export default Questions