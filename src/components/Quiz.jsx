import React, { useState } from "react";
import Data from "../data";
import QuizResult from "./QuizResult";
const Quiz = () => {
              const [currentQuestion,setCurrentQuestion]=useState(0);
              const [clickedoption,setClickedoption]=useState(0);
              const [score,setScore]=useState(0);
              const [showResult,setShowresult]=useState(false);
              const submit=()=>{
                            updateScore();
                            if(currentQuestion< Data.length-1){
                               setCurrentQuestion(currentQuestion+1)    
                               setClickedoption(0)
                            }
                            else{
                                          setShowresult(true)
                            }
                            
              }
              const updateScore=()=>{
                            if(clickedoption===Data[currentQuestion].answer){
                                setScore(score+1)          
                            }
              }
              const resetAll=()=>{
                    setShowresult(false);
                    setCurrentQuestion(0);
                    setClickedoption(0);
                    setScore(0);       
              }
  return (
    <>
      <div className="">
        <h1 className="mb-4">QUIZ APP</h1>
        <div className="border border-[rgba(243,243,241,0.2)] w-[400px] h-full rounded-lg shadow-[rgba(243,243,241,0.6)] shadow-md p-6">
        {
              showResult?(
              <QuizResult score={score} totalScore={Data.length} tryAgain={resetAll}/>
              ):(
              <>
          <h2 className="text-2xl text-left shadow-xl border p-3.5  border-[rgba(243,243,241,0.2)] cursor-pointer">
              <span>{currentQuestion+1}.</span>
              <span>{Data[currentQuestion].question}</span>
          </h2>
          <div>
          {Data[currentQuestion].choices.map((option, i) => {
            return (
              <p className={`border border-[rgba(243,243,241,0.5)] mt-8 p-2 hover:bg-blue-700 rounded-md cursor-pointer ${clickedoption== i+1?"bg-blue-700":null}`} key={i} 
              onClick={()=>setClickedoption(i+1)}>      {option}
              </p>
            );
          })}
          </div>

          <button type="button" className="mt-5 border-2 border-white"
          onClick={submit}
          >Next</button>
          </>
              )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
