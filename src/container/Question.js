import  {useState} from 'react'
import React from 'react-icons';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/fa';


const Question = ({title,info}) => {
const [showInfo,setShowinfo] =useState(false);
    return (
    <article className="question">
<header>
    <h4>{title}</h4>
    <button className="btn" onClick={()=>setShowinfo(!showInfo)}>
        {showInfo ? 'minus' : 'plus'} </button>
</header>
<p>{showInfo && info}</p>
    </article>
    )
}

export default Question
