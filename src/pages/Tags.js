import Devask from '../components/Devask'
import Devask2 from '../components/Devask2'

import {Data} from '../components/assets/Data'
import {Data2} from '../components/assets/Data2'

import Pagination from '../components/Tags/Pagination.jsx'
import Button from '../components/Tags/Button/Button'
import {BUTTON_TYPES} from '../components/Tags/Button/Data'
import './Tag.css'
 import { useState } from 'react'

const Tags = () => {
   
   const [show, setShow] = useState(false);

const handleClick = () => { 
  setShow(!show)

}

  return (
    <div className='container'>
      <div className = 'container1'>
       <h1>Tags</h1>   

       <div className = 'container3'> 
       <Button type = {BUTTON_TYPES.SECONDARY} btnText ='project'/>
     <div onClick = {handleClick}> <Button  type = {BUTTON_TYPES.PRIMARY} btnText ='grid'/> </div>
       </div>
       </div>

      <div className = 'button__field'>
    <Button type = {BUTTON_TYPES.SECONDARY} btnText ='Java'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='Python'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='Android'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='Php'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='C++'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='ajax'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='mySQL'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='Node.js'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='C#'/>
        <Button type = {BUTTON_TYPES.PRIMARY} btnText ='React.js'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='Swift'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='Linux'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='r'/>
    <Button type = {BUTTON_TYPES.PRIMARY} btnText ='View all'/>
    


    </div>
    
   < div>   
           <div className = 'grid'>
      { !show &&
      Data.map((item, index) => { return <Devask key ={index} Data = {item} /> })
      }
      </div>
         
      <div className = 'grid2'>
      { show &&
        Data2.map((item, index) => { return <Devask2 key ={index} Data2 = {item} /> })
      }
       </div>  
 </div>
      <Pagination />
 </div>
  );
}

export default Tags;
