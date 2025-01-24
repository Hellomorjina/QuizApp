
import './Quize.css'
import React, { useRef, useState } from 'react'
import { data } from '../assets/data';


const Quize = () => {
 
  let [index, setIndex] = useState(0);
  let [question,setquestion] = useState(data[index]);
  let [lock,setlock] = useState(false);
  let [score,setscore] = useState(0);
  let [result,setresult] = useState(false);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array =[option1,option2,option3,option4];
  const chckAns = (e,ans) => {

    if(lock === false){
      if(index === data.length -1){
          setresult(true);
          return 0;
      }


      if(question.ans===ans){
        e.target.classList.add('correct');
        setlock(true);
        setscore(prev=>prev+1);
      }else{
        e.target.classList.add('wrong');
        setlock(true);
        option_array[question.ans-1].current.classList.add('correct');
      }
    }

  }
  const Next = ()=>{
     if (lock===true){
       setIndex(++index);
       setquestion(data[index]);
       setlock(false);
       option_array.map((option)=>{
        option.current.classList.remove('wrong');
        option.current.classList.remove('correct');
        return null
       })
     }
  }
 const Reset = ()=>{
   setIndex(0);
   setquestion(data[0]);
   setlock(false);
   setresult(false);
   setscore(0);
  //  option_array.map((option)=>{
  //   option.current.classList.remove('wrong');
  //   option.current.classList.remove('correct');
  //   return null
  //  })
 }
  return (
    <div className='container'>
     <div className='headerlogo'>
        <h1>JS Quiz </h1><img style={{width:"50px",height:"50px"}} src="https://yt3.googleusercontent.com/10SsmrmKHz3hodF2RUeF2bhL5NuBOIwKEDrOGHTYu4bT07vRwlWaKlXeJ8Rd6GUa_-3J3Y7Q3xQ=s160-c-k-c0x00ffffff-no-rj" alt="" />
     </div>
     
       <hr/>
       {result?<></>:<>
            <h2> {index+1}.{question.question}</h2>
          <ul>
              <li ref={option1} onClick={(e)=>{chckAns(e,1)}}>{question.option1}</li>
              <li ref={option2} onClick={(e)=>{chckAns(e,2)}}> {question.option2}</li>
              <li ref={option3} onClick={(e)=>{chckAns(e,3)}}>{question.option3}</li>
              <li ref={option4} onClick={(e)=>{chckAns(e,4)}}>{question.option4}</li>
             
          </ul>
          <button onClick={Next}>Next 💎</button>
          <div className='index'>{index+1} of {data.length} Questions🥇</div>
       </>}
       {result?<>
        <h2> 😍 Your Score: {score} out fo {data.length} 🏆</h2>
        <h2>💕Well done 💕</h2>
        <button onClick={Reset}>Reset ✂</button>
       </>:<></>}
       
        
    </div>
  )
}

export default Quize