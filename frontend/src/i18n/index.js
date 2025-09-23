export const translations = {
  en: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    aptitudeQuiz: "Aptitude Quiz",
    profile: "Profile",

    // Login/Profile Page
    welcome: "Welcome",
    name: "Name",
    class: "Class",
    interests: "Interests",
    selectInterests: "Select Your Interests",
    science: "Science",
    mathematics: "Mathematics",
    literature: "Literature",
    history: "History",
    arts: "Arts",
    technology: "Technology",
    sports: "Sports",
    music: "Music",
    submit: "Submit",
    enterName: "Enter your name",

    // Aptitude Quiz
    quizTitle: "Aptitude Quiz",
    quizSubtitle: "Answer these questions to discover your ideal stream",
    question: "Question",
    next: "Next",
    submitQuiz: "Submit Quiz",

    // Quiz Results
    yourResult: "Your Result",
    suggestedStream: "Suggested Stream",
    retakeQuiz: "Retake Quiz",

    // Dashboard
    dashboardTitle: "Your Career Dashboard",
    suggestedCourses: "Suggested Courses",
    careerPath: "Career Path Visualization",
    nearbyColleges: "Nearby Government Colleges",
    timeline: "Important Timeline",

    // Career Streams
    scienceStream: "Science Stream",
    commerceStream: "Commerce Stream",
    artsStream: "Arts Stream",

    // Common
    loading: "Loading...",
    back: "Back",
    continue: "Continue",
    viewDetails: "View Details",
    applyNow: "Apply Now",
    deadline: "Deadline",
    location: "Location",
    courses: "Courses",
  },

  hi: {
    // Navigation
    home: "होम",
    dashboard: "डैशबोर्ड",
    aptitudeQuiz: "योग्यता परीक्षा",
    profile: "प्रोफ़ाइल",

    // Login/Profile Page
    welcome: "स्वागत है",
    name: "नाम",
    class: "कक्षा",
    interests: "रुचियाँ",
    selectInterests: "अपनी रुचियाँ चुनें",
    science: "विज्ञान",
    mathematics: "गणित",
    literature: "साहित्य",
    history: "इतिहास",
    arts: "कला",
    technology: "प्रौद्योगिकी",
    sports: "खेल",
    music: "संगीत",
    submit: "जमा करें",
    enterName: "अपना नाम दर्ज करें",

    // Aptitude Quiz
    quizTitle: "योग्यता परीक्षा",
    quizSubtitle: "अपनी आदर्श स्ट्रीम खोजने के लिए इन प्रश्नों के उत्तर दें",
    question: "प्रश्न",
    next: "आगे",
    submitQuiz: "परीक्षा जमा करें",

    // Quiz Results
    yourResult: "आपका परिणाम",
    suggestedStream: "सुझाई गई स्ट्रीम",
    retakeQuiz: "परीक्षा पुनः लें",

    // Dashboard
    dashboardTitle: "आपका करियर डैशबोर्ड",
    suggestedCourses: "सुझाए गए कोर्स",
    careerPath: "करियर पथ विज़ुअलाइज़ेशन",
    nearbyColleges: "नजदीकी सरकारी कॉलेज",
    timeline: "महत्वपूर्ण समयसीमा",

    // Career Streams
    scienceStream: "विज्ञान स्ट्रीम",
    commerceStream: "वाणिज्य स्ट्रीम",
    artsStream: "कला स्ट्रीम",

    // Common
    loading: "लोड हो रहा है...",
    back: "वापस",
    continue: "जारी रखें",
    viewDetails: "विवरण देखें",
    applyNow: "अभी आवेदन करें",
    deadline: "समय सीमा",
    location: "स्थान",
    courses: "कोर्स",
  },
};

export const useTranslation = (language) => {
  return translations[language] || translations.en;
};
