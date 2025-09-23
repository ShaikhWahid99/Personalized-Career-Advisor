import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem("userProfile");
    return stored ? JSON.parse(stored) : null;
  });
  const [quizResult, setQuizResult] = useState(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    profile,
    setProfile,
    quizResult,
    setQuizResult,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
