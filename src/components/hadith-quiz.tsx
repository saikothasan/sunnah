"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const quizData = [
  {
    question: "Who compiled Sahih al-Bukhari?",
    options: ["Imam Bukhari", "Imam Muslim", "Imam Abu Dawud", "Imam Tirmidhi"],
    correctAnswer: 0,
  },
  // Add more questions here
]

export function HadithQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setQuizCompleted(true)
    }
  }

  if (quizCompleted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Completed!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Your score: {score} out of {quizData.length}
          </p>
          <Button
            onClick={() => {
              setCurrentQuestion(0)
              setSelectedAnswer(null)
              setScore(0)
              setQuizCompleted(false)
            }}
          >
            Restart Quiz
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hadith Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{quizData[currentQuestion].question}</p>
        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
        >
          {quizData[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleAnswer} disabled={selectedAnswer === null} className="mt-4">
          {currentQuestion + 1 === quizData.length ? "Finish Quiz" : "Next Question"}
        </Button>
      </CardContent>
    </Card>
  )
}

