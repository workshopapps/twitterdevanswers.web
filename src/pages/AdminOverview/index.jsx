/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from 'react'
import styleCSS from './style.module.css'

function Overview() {

    const[questions,setQuestions] = useState()
    const[latestQuestionList,setLastestQuestionList]=useState([])
    const[answer,setAnswer] = useState([])

        const getQuestions = async () =>{
            const requestOptions={
                method:"GET",
                headers:{
                    "content-type": "application/json",
                    // Authorization: "Bearer " + token,
                },
            };
            const response = await fetch ('https://jsonplaceholder.typicode.com/users',requestOptions);
    
                const data = await response.json();
                console.log(data)

               setQuestions(Object(data).length)
        }

        const getLatestQuestionsList = async () =>{
            const requestOptions={
                method:"GET",
                headers:{
                    "content-type": "application/json"
                },
            };
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1/comments',requestOptions);
    
                const data = await response.json();
                setLastestQuestionList(data)

               
        }

    

    useEffect(() => {
      getQuestions();
      getLatestQuestionsList();
        console.log(questions)
      
    }, []);
  return (
    <div className={styleCSS.dashboard}>
        <div className={styleCSS.rowone}>
            <div className={styleCSS.questions}>
            <h2>Questions</h2><br/>
            <span>Unanswered Questions: {questions}</span><br/>
                <span>Answered Questions: {answer}</span>
            </div>
            <div className={styleCSS.users}>
                <h2>Users</h2><br/>
                <span>Total Users:</span><br/>
                <span>Users Online:</span>
            </div>
            <div className={styleCSS.wallet}>
                <h2>Wallet</h2><br/>
                <span>Total Amount:</span><br/>
            </div>
        </div>
        
        <div className={styleCSS.LatestQuestions}>
            <h2>Latest Questions</h2>
            <ul className={styleCSS.list}>
                {latestQuestionList.map((record, i)=>
                    <li key={i}>
                        <div className={styleCSS.questionList}>
                            {record.body}
                            <div className={styleCSS.points}>Amount Allocated: {record.id}</div>
                        </div>
                    </li> 
                    
                )}
            </ul>
        </div>
        <div className={styleCSS.tags}>
            <h2>Tags</h2>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default Overview