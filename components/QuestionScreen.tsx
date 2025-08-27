
import React, { useState } from 'react';
import { type Question, type Answer } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface QuestionScreenProps {
  serviceName: string;
  questions: Question[];
  onFinish: (answers: Answer[]) => void;
}

const ratingOptions = [
  { value: 1, labelKey: 'rating_strongly_disagree' },
  { value: 2, labelKey: 'rating_disagree' },
  { value: 3, labelKey: 'rating_neutral' },
  { value: 4, labelKey: 'rating_agree' },
  { value: 5, labelKey: 'rating_strongly_agree' },
];

const QuestionScreen: React.FC<QuestionScreenProps> = ({ serviceName, questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const { t } = useLanguage();

  const handleAnswer = (value: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const translatedQuestionText = t(currentQuestion.textKey);
    const newAnswers = [...answers, { questionId: currentQuestion.id, questionText: translatedQuestionText, value }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col h-full bg-white text-gray-800 p-6">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-blue-800">{serviceName}</h2>
        <p className="text-sm text-gray-500">{t('question_of', {current: currentQuestionIndex + 1, total: questions.length})}</p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <p className="text-2xl font-medium text-blue-900 mb-8">{t(question.textKey)}</p>
      </div>

      <div className="flex flex-col space-y-3">
        {ratingOptions.map(option => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:bg-blue-600 transition-colors duration-200"
          >
            {t(option.labelKey)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
