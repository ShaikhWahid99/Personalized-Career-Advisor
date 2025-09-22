import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../state/AppContext';
import { useTranslation } from '../i18n';
import { quizQuestions, streamSuggestions } from '../data/mockData';
import QuizForm from '../components/QuizForm';
import Card from '../components/Card';

const AptitudeQuiz = () => {
  const navigate = useNavigate();
  const { language, quizResult, setQuizResult } = useAppContext();
  const t = useTranslation(language);
  const [showResult, setShowResult] = useState(!!quizResult);

  const handleQuizComplete = (result) => {
    setQuizResult(result);
    setShowResult(true);
  };

  const handleRetakeQuiz = () => {
    setQuizResult(null);
    setShowResult(false);
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  if (showResult && quizResult) {
    const suggestion = streamSuggestions[quizResult.suggestedStream];
    
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {t.yourResult}
            </h1>
            <p className="text-gray-600">
              {language === 'en' 
                ? 'Based on your responses, here\'s what we recommend'
                : 'आपके उत्तरों के आधार पर, यहाँ है जो हम सुझाते हैं'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Result */}
            <Card variant="success" title={t.suggestedStream}>
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {quizResult.suggestedStream === 'science' ? '🔬' : 
                   quizResult.suggestedStream === 'commerce' ? '💼' : '🎨'}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {suggestion.name[language]}
                </h2>
                <p className="text-gray-600 mb-6">
                  {suggestion.description[language]}
                </p>
                
                {/* Score Breakdown */}
                <div className="bg-white rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-3">
                    {language === 'en' ? 'Score Breakdown' : 'स्कोर विवरण'}
                  </h3>
                  {Object.entries(quizResult.scores).map(([stream, score]) => (
                    <div key={stream} className="flex justify-between items-center mb-2">
                      <span className="text-sm">{streamSuggestions[stream]?.name[language]}</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${(score / quizResult.totalQuestions) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Suggested Courses */}
            <Card title={t.suggestedCourses}>
              <div className="space-y-3">
                {suggestion.courses.map((course, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <span className="font-medium">{course[language]}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={handleRetakeQuiz}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              {t.retakeQuiz}
            </button>
            <button
              onClick={handleGoToDashboard}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.continue} to {t.dashboard}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t.quizTitle}
          </h1>
          <p className="text-gray-600 text-lg">
            {t.quizSubtitle}
          </p>
        </div>

        {/* Quiz Form */}
        <QuizForm
          questions={quizQuestions}
          language={language}
          onComplete={handleQuizComplete}
        />
      </div>
    </div>
  );
};

export default AptitudeQuiz;
