import React, { useEffect, useState } from 'react'
import './Quiz.css'

function Quiz({quizz,rightAns,setRightans,setAnsRight,setIsreset,setScore,score,setCountdown}) {
    const handleAnswer=(status)=>{
        setRightans("seri") 
        if(status){
            setAnsRight(true)
            setScore(score+1)
            setCountdown()
        }
        else{
            setIsreset(true)
        }
        
    }
   
    
  return (
    <div className='w-100 d-flex justify-content-center align-items-center flex-column flex-wrap'>
            <div className='  qn'>
                <p>{quizz.id} . {quizz.qn}</p>

            </div>
            <div className=' d-flex justify-content-between flex-wrap optns mt-5'>
                <button className={rightAns=="seri"&& (quizz.option1.status?"bg-success text-light border-light":"bg-light text-dark border-light")} onClick={()=>handleAnswer(quizz.option1.status)}>{quizz.option1.value}</button>
                <button className={rightAns=="seri"&& (quizz.option2.status?"bg-success text-light border-light":"bg-light text-dark border-light")} onClick={()=>handleAnswer(quizz.option2.status)}>{quizz.option2.value}</button>
            </div>
            <div className=' d-flex justify-content-between flex-wrap optns mt-lg-3'>
                <button className={rightAns=="seri"&& (quizz.option3.status?"bg-success text-light border-light":"bg-light text-dark border-light")} onClick={()=>handleAnswer(quizz.option3.status)}>{quizz.option3.value}</button>
                <button className={rightAns=="seri"&& (quizz.option4.status?"bg-success text-light border-light":"bg-light text-dark border-light")} onClick={()=>handleAnswer(quizz.option4.status)}>{quizz.option4.value}</button>
            </div>



    </div>
  )
}

export default Quiz