/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from "react";
import { type NextPage } from "next";
import { useSession, signIn } from "next-auth/react";
import { api } from "~/utils/api";

interface Question {
  question: string;
  answer: string;
}

const CreateQuiz: NextPage = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const createMutation = api.useMutation(["quiz.create"]);

  const addQuestion = () => {
    if (questions.length < 5) {
      setQuestions([...questions, { question: "", answer: "" }]);
    }
  };

  const handleQuizCreation = async () => {
    if (!session) {
      return;
    }
    const userId = session.user?.id;
    if (!userId) {
      return;
    }
    // Assume validation passes
    await createMutation.mutateAsync({
      title,
      instructions,
      questions,
      userId: Number(userId),
    });
  };

  if (!session) {
    return (
      <button onClick={() => void signIn()}>Sign In to Create Quizzes</button>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="mt-2 rounded border p-2"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mt-2 rounded border p-2"
        placeholder="Quiz Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      {questions.map((question, index) => (
        <div key={index} className="mt-2 flex flex-col">
          <input
            className="rounded border p-2"
            placeholder={`Question ${index + 1}`}
            value={question.question}
            onChange={(e) => {
              const newQuestions = [...questions];
              if (newQuestions[index]) {
                newQuestions[index].question = e.target.value;
                setQuestions(newQuestions);
              }
            }}
          />
          <input
            className="mt-2 rounded border p-2"
            placeholder="Answer"
            value={question.answer}
            onChange={(e) => {
              const newQuestions = [...questions];
              if (newQuestions[index]) {
                newQuestions[index].answer = e.target.value;
                setQuestions(newQuestions);
              }
            }}
          />
        </div>
      ))}
      {questions.length < 5 && (
        <button
          className="mt-4 rounded bg-blue-500 p-2 text-white"
          onClick={addQuestion}
        >
          Add Question
        </button>
      )}
      <button
        className="mt-4 rounded bg-green-500 p-2 text-white"
        onClick={() => void handleQuizCreation()}
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
