import React, { useState } from "react"
import { questionData } from "./questionData"
import Button from "./Button"

import "./Card.css"

const Card = () => {
  const [question, setQuestion] = useState(questionData.hardQuestions[0])

  const [displayAnswer, setDisplayAnswer] = useState(false)

  const getNewQuestion = (e) => {
    e.stopPropagation()
    if (!displayAnswer) return
    const i = Math.floor(Math.random() * questionData.hardQuestions.length)
    setQuestion(questionData.hardQuestions[i])
    setDisplayAnswer(false)
  }
  return (
    <div
      className="card"
      onClick={() => {
        setDisplayAnswer(true)
      }}
    >
      <div className="card-question">
        <h3>{question.question}</h3>
      </div>
      <div className="card-answer">
        {displayAnswer && <p>{question.answer}</p>}
      </div>
      <div className="card-btns">
        <Button onClick={getNewQuestion} text="Easy" color="#14CC60" />
        <Button onClick={getNewQuestion} text="Medium" color="#E2DE84" />
        <Button onClick={getNewQuestion} text="Hard" color="#D91E36" />
      </div>
    </div>
  )
}

export default Card
