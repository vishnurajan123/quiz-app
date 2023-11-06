import React, { useEffect, useRef, useState } from 'react'
import Quiz from './Quiz'

function ViewQuiz() {
    const [qnno,setQnno]=useState(1)
    const [rightAns,setRightans]=useState("thettu")
    const [ansRight,setAnsRight]=useState(false)
    const [isReset,setIsreset]=useState(false)
    const [score,setScore]=useState(0)
    const [final,setFinal]=useState(false)
    const [countdown,setCountdown]=useState(15)
    const timerId=useRef()

    useEffect(()=>{
       if(!ansRight){ timerId.current=setInterval(()=>{
            setCountdown(prev=> prev-1)
        },1000)
    }
        return ()=> clearInterval(timerId.current)
    },[countdown])

    useEffect(()=>{
        if(countdown<=0){
            clearInterval(timerId.current)
            setIsreset(true)
        }
    },[countdown])

    const quiz=[
        {
            id:"1",
            qn:"Which movie won the Academy Award for Best Picture in 2020?",
            option1:{
                status:true,
                value:"Parasite"
            },
            option2:{
                status:false,
                value:"Joker"
            },
            option3:{
                status:false,
                value:"1917"
            },
            option4:{
                status:false,
                value:"The Irishman"
            }

        },
        {
            id:"2",
            qn:"Who won the Golden Ball for the best player in Fifa World Cup 2023?",
            option1:{
                status:false,
                value:" Jude Bellingham "
            },
            option2:{
                status:true,
                value:"Lionel Messi"
            },
            option3:{
                status:false,
                value:"Alexis Mac Allister"
            },
            option4:{
                status:false,
                value:"Luka Modric"
            }

        },
        {
            id:"3",
            qn:"Which film features the character Jack Dawson and Rose DeWitt Bukater?",
            option1:{
                status:false,
                value:"Gladiator"
            },
            option2:{
                status:false,
                value:"Braveheart"
            },
            option3:{
                status:false,
                value:"Avatar"
            },
            option4:{
                status:true,
                value:"Titanic"
            }

        },
        {
            id:"4",
            qn:"Which cricketer had scored the most runs at the ODI World Cup ?",
            option1:{
                status:true,
                value:"Sachin Tendulker"
            },
            option2:{
                status:false,
                value:"Rohit Sharma"
            },
            option3:{
                status:false,
                value:"Virat Kohli"
            },
            option4:{
                status:false,
                value:"  Saurav Ganguly  "
            }

        },
        {
            id:"5",
            qn:"What is the highest-grossing animated movie of all time?",
            option1:{
                status:false,
                value:"The Lion King"
            },
            option2:{
                status:false,
                value:"Frozen II"
            },
            option3:{
                status:true,
                value:"Avatar"
            },
            option4:{
                status:false,
                value:"Toy Story 4                "
            }

        },
        {
            id:"6",
            qn:"In which film did Heath Ledger portray the Joker?",
            option1:{
                status:false,
                value:"The Dark Knight Rises"
            },
            option2:{
                status:false,
                value:"Batman Begins"
            },
            option3:{
                status:false,
                value:"Suicide Squad"
            },
            option4:{
                status:true,
                value:"The Dark Knight"
            }

        },
        {
            id:"7",
            qn:"Which country has won most football World Cup?",
            option1:{
                status:false,
                value:"Argentina"
            },
            option2:{
                status:true,
                value:"Brazil"
            },
            option3:{
                status:false,
                value:" Spain"
            },
            option4:{
                status:false,
                value:"Germany"
            }

        },
        {
            id:"8",
            qn:"Who hits most number of international centuries in cricket?",
            option1:{
                status:true,
                value:"Sachin Tenduler"
            },
            option2:{
                status:false,
                value:"Virat Kohli"
            },
            option3:{
                status:false,
                value:"Don Bradman "
            },
            option4:{
                status:false,
                value:"Brian Lara"
            }

        },
        {
            id:"9",
            qn:"Who has scored the most international goals in history?",
            option1:{
                status:false,
                value:"Lionel Messi"
            },
            option2:{
                status:false,
                value:"Diego Maradona"
            },
            option3:{
                status:false,
                value:"Pele"
            },
            option4:{
                status:true,
                value:"Cristiano Ronaldo"
            }

        },
        {
            id:"10",
            qn:"what is the chemical formula of Gold",
            option1:{
                status:false,
                value:"O"
            },
            option2:{
                status:false,
                value:"Ag"
            },
            option3:{
                status:true,
                value:"Au"
            },
            option4:{
                status:false,
                value:"Sb"
            }

        },
        {
            id:"11",
            qn:"what is the chemical formula of Silver",
            option1:{
                status:false,
                value:"S"
            },
            option2:{
                status:false,
                value:"H"
            },
            option3:{
                status:true,
                value:"Ag"
            },
            option4:{
                status:false,
                value:"Si"
            }

        },
        {
            id:"12",
            qn:"What is the highest-grossing film directed by James Cameron?",
            option1:{
                status:false,
                value:"The Silence of the Lambs"
            },
            option2:{
                status:false,
                value:"Se7en"
            },
            option3:{
                status:true,
                value:"Avatar"
            },
            option4:{
                status:false,
                value:"The Exorcist"
            }

        },
        {
            id:"13",
            qn:"Who played the lead role of Tony Stark in the Marvel Cinematic Universe?",
            option1:{
                status:false,
                value:"Chris Evans"
            },
            option2:{
                status:true,
                value:"Robert Downey Jr."
            },
            option3:{
                status:false,
                value:"Chris Hemsworth"
            },
            option4:{
                status:false,
                value:"Mark Ruffalo"
            }

        },
        {
            id:"14",
            qn:"Who has second most international centuries after Sachin Tendulker",
            option1:{
                status:false,
                value:"Rohit Sharma "
            },
            option2:{
                status:false,
                value:"AB Devilliers"
            },
            option3:{
                status:true,
                value:"Virat Kohli"
            },
            option4:{
                status:false,
                value:"Brian Lara"
            }

        },
        {
            id:"15",
            qn:"Who has won the most number of Ballon d Or in football history?",
            option1:{
                status:false,
                value:" Cristiano Ronaldo"
            },
            option2:{
                status:true,
                value:"Lionel Messi"
            },
            option3:{
                status:false,
                value:"Pele"
            },
            option4:{
                status:false,
                value:" Diego Maradona"
            }

        }


    

    ]
    console.log(quiz);
    const NextQn=()=>{
        if(qnno<quiz.length)
        {
            setQnno(qnno+1)
        setRightans("thetu")
        setAnsRight(false)
        setIsreset(false)
        setCountdown(15)
    }
    else{
        setFinal(true)
    }
    }
    const restart=()=>{
        setQnno(1)
        setRightans("thetu")
        setAnsRight(false)
        setIsreset(false)
        setScore(0)
        setFinal(false)
        setCountdown(15)

    }
  return (
    <div style={{minHeight:"100vh"}}  className={isReset?"d-flex justify-content-center align-items-center flex-column flex-wrap start haha":"d-flex justify-content-center align-items-center flex-column flex-wrap start"}>
       <div className='st'>
            <h1>Score :{score}</h1>
            <h4 className='text-danger'>Remaining time : {countdown || "-"}</h4>
       </div>
       <div className='card'>{
quiz.filter((item)=>item.id==qnno).map(item=>(
    <Quiz setCountdown={setCountdown} score={score} setScore={setScore} setAnsRight={setAnsRight} rightAns={rightAns} setRightans={setRightans} quizz={item} setIsreset={setIsreset}/>
))
        }

        
          </div>
       <div className='d-flex justify-content-evenly w-50'>
        <button disabled={!ansRight?true:false} onClick={NextQn} className='mt-5 btn btn-success nextt mb-5'>Next</button>
       </div>
      { isReset &&
      <div className='final'>
        <h5>Oops..!</h5>
            <h3>You Lose...</h3>
            <h5>Score : <span className='text-dark fw-bold fs-3'>{ score} / 15 </span></h5>
            <button  onClick={restart} className=' btn '>Reset</button>

       </div>}
       { final &&
      <div className='final'>
        <h5>{final&& "Congratulations..!" || isReset&& "Oops..!"}</h5>
            <h3>{final&& "You Won" || isReset&& "You Lose"}</h3>
            <h5>Score :  <span className='text-dark fw-bold fs-3'>{ score} / 15 </span> </h5>
            <button  onClick={restart} className=' btn '>Reset</button>

       </div>}


    
    </div>
  )
}
export default ViewQuiz