/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import styleCSS from './style.module.css'

function Users() {

    const[userList,setUserList]=useState([])

    const getUserList = async () =>{
        const requestOptions={
            method:"GET",
            headers:{
                "content-type": "application/json"
            },
        };
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1/comments',requestOptions);

            const data = await response.json();
            setUserList(data)

           
    }
    useEffect(() => {
        getUserList();
        
      }, []);
  return (
    <div className={styleCSS.table_container}>
        <table className={styleCSS.table}>
            <thead className={styleCSS.tablehead}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            
            <tbody className={styleCSS.tablehead}>
                {userList.map((record, i)=>
                    <tr key={i}>
                        <td>{record.id}</td>
                        <td>{record.name}</td>
                        <td>{record.email}</td>
                        <td className={styleCSS.button_container}>
                            <button type='button' className={styleCSS.edbutton}>Edit</button>
                            <button type='button' className={styleCSS.dlbutton}>Delete</button>
                        </td>
                    </tr>
                    )}
            
            </tbody>
        </table>
    </div>
  )
}

export default Users