import { useNavigate } from "react-router-dom";
import { useAppContext } from "../state/AppContext";
import { useTranslation } from "../i18n";
import {
  streamSuggestions,
  careerPaths,
  mockColleges,
  timelineEvents,
} from "../data/mockData";
import Card from "../components/Card";
import Stepper from "../components/Stepper";
import CollegeTable from "../components/CollegeTable";
import Timeline from "../components/Timeline";

const Dashboard = () => {
  const navigate = useNavigate();
  const { language, profile, quizResult } = useAppContext();
  const t = useTranslation(language);

  if (!profile) {
    navigate("/");
    return null;
  }

  // Determine suggested stream - either from quiz result or default based on class
  const suggestedStream = quizResult?.suggestedStream || "science";
  const suggestion = streamSuggestions[suggestedStream];
  const careerPath = careerPaths[suggestedStream];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t.dashboardTitle}
          </h1>
          <p className="text-gray-600">
            {language === "en"
              ? `Welcome ${profile.name}! Here's your personalized career roadmap.`
              : `स्वागत है ${profile.name}! यहाँ आपका व्यक्तिगत करियर रोडमैप है।`}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card variant="primary">
            <div className="flex items-center">
              <div className="text-3xl mr-4">
                {profile.class === "10" ? "📚" : "🎓"}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {language === "en"
                    ? `Class ${profile.class}`
                    : `कक्षा ${profile.class}`}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "en" ? "Current Level" : "वर्तमान स्तर"}
                </p>
              </div>
            </div>
          </Card>

          <Card variant="success">
            <div className="flex items-center">
              <div className="text-3xl mr-4">
                {suggestedStream === "science"
                  ? "🔬"
                  : suggestedStream === "commerce"
                  ? "💼"
                  : "🎨"}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {suggestion.name[language]}
                </h3>
                <p className="text-sm text-gray-600">
                  {quizResult
                    ? t.suggestedStream
                    : language === "en"
                    ? "Popular Choice"
                    : "लोकप्रिय विकल्प"}
                </p>
              </div>
            </div>
          </Card>

          <Card variant="warning">
            <div className="flex items-center">
              <div className="text-3xl mr-4">🎯</div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {profile.interests.length}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === "en" ? "Selected Interests" : "चयनित रुचियाँ"}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Suggested Courses */}
            <Card title={t.suggestedCourses}>
              <p className="text-gray-600 mb-4">
                {suggestion.description[language]}
              </p>
              <div className="space-y-3">
                {suggestion.courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-blue-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <span className="font-medium">{course[language]}</span>
                  </div>
                ))}
              </div>

              {!quizResult && (
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    💡{" "}
                    {language === "en"
                      ? "Take our aptitude quiz for personalized recommendations!"
                      : "व्यक्तिगत सुझावों के लिए हमारी योग्यता परीक्षा लें!"}
                  </p>
                  <button
                    onClick={() => navigate("/quiz")}
                    className="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    {t.aptitudeQuiz} →
                  </button>
                </div>
              )}
            </Card>

            {/* Career Path Visualization */}
            <Card title={t.careerPath}>
              <div className="relative">
                <Stepper
                  steps={careerPath}
                  currentStep={profile.class === "10" ? 0 : 1}
                  language={language}
                />
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Important Timeline */}
            <Card title={t.timeline}>
              <Timeline events={timelineEvents} language={language} />
            </Card>
          </div>
        </div>

        {/* Nearby Colleges - Full Width */}
        <div className="mt-8">
          <Card title={t.nearbyColleges}>
            <p className="text-gray-600 mb-4">
              {language === "en"
                ? "Top colleges near you with affordable fees and excellent facilities."
                : "आपके पास के टॉप सरकारी कॉलेज जो किफायती फीस और उत्कृष्ट सुविधाएं प्रदान करते हैं।"}
            </p>
            <CollegeTable colleges={mockColleges} language={language} />
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {!quizResult && (
            <button
              onClick={() => navigate("/quiz")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.aptitudeQuiz}
            </button>
          )}
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            {language === "en" ? "Update Profile" : "प्रोफाइल अपडेट करें"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
