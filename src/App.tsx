import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Cili planet është më afër Diellit?",
    options: ["Mars", "Merkur", "Venus", "Jupiter"],
    answer: "Merkur",
    hint: "Është planeti më i vogël dhe më afër Diellit.",
  },
  {
    question: "Sa kontinente ka?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    hint: "Numri klasik i kontinenteve në botë.",
  },
  {
    question: "Cila është gjuha kryesore e web-it?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML",
    hint: "Është gjuha që strukturon faqet web.",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const score = answers.filter(
    (ans, i) => ans === questions[i]?.answer
  ).length;

  if (finished) {
    return (
      <div className="container">
        <div className="card">
          <h1>Quiz përfundoi! 🎉</h1>
          <p className="result">
            Rezultati yt: {score} / {questions.length}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Quiz App</h1>
        <h2>{questions[index].question}</h2>

        <div className="options">
          {questions[index].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="option-btn"
            >
              {option}
            </button>
          ))}
        </div>

        <p className="hint">💡 Hint: {questions[index].hint}</p>

        <div className="nav-buttons">
          {index > 0 && (
            <button onClick={handleBack} className="back-btn">
              ⬅ Kthehu mbrapa
            </button>
          )}
        </div>

        <p className="progress">
          Pyetja {index + 1} nga {questions.length}
        </p>
      </div>
    </div>
  );
}