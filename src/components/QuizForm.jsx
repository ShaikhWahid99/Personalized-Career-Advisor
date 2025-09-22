import { useState } from 'react';
import { useTranslation } from '../i18n';
import Card from './Card';

const QuizForm = ({ questions, language, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const t = useTranslation(language);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = {
      ...answers,
      [currentQuestion]: selectedOption
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      // Quiz completed, calculate result
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const streamCounts = {};
    
    Object.keys(finalAnswers).forEach(questionIndex => {
      const questionId = parseInt(questionIndex);
      const optionId = finalAnswers[questionIndex];
      const question = questions[questionId];
      const option = question.options.find(opt => opt.id === optionId);
      
      if (option && option.stream) {
        streamCounts[option.stream] = (streamCounts[option.stream] || 0) + 1;
      }
    });

    // Find the stream with highest count
    const suggestedStream = Object.keys(streamCounts).reduce((a, b) => 
      streamCounts[a] > streamCounts[b] ? a : b, 'science'
    );

    const result = {
      suggestedStream,
      scores: streamCounts,
      totalQuestions: questions.length
    };

    onComplete(result);
  };

  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            {t.question} {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card variant="primary">
        {/* Question */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {currentQuestionData.question[language]}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestionData.options.map((option) => (
            <label
              key={option.id}
              className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${
                selectedOption === option.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionSelect(option.id)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 mr-3 flex-shrink-0 ${
                  selectedOption === option.id
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-400'
                }`}
              >
                {selectedOption === option.id && (
                  <div className="w-2 h-2 bg-white rounded-full m-auto mt-0.5" />
                )}
              </div>
              <span className="text-gray-700">{option.text[language]}</span>
            </label>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
                setSelectedOption(answers[currentQuestion - 1] || '');
              }
            }}
            disabled={currentQuestion === 0}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t.back}
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion < questions.length - 1 ? t.next : t.submitQuiz}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default QuizForm;
