import React from 'react'

const QuizResult = (props) => {
  return (
    <>
      <div className='text-2xl'>Your score is : {props.score}</div>
      <div className='text-2xl'>Total score is : {props.totalScore}</div>
      <button className='mt-8' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult
