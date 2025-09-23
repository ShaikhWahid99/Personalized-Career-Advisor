import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../state/AppContext";
import { useTranslation } from "../../i18n";
import Card from "../../components/Card";

const LoginPage = () => {
  const navigate = useNavigate();
  const { language, setProfile } = useAppContext();
  const t = useTranslation(language);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Email and Password are required.");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // Here you'd normally verify credentials with backend API
    // For now just save to context
    const profileData = {
      email: formData.email.trim(),
      name: "", // fallback
      class: "10", // default
      interests: [], // safe default
    };
    setProfile(profileData);
    localStorage.setItem("userProfile", JSON.stringify(profileData));

    // Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {language === "en" ? "Welcome Back" : "वापसी पर स्वागत है"}
          </h1>
          <p className="text-gray-600 text-lg">
            {language === "en"
              ? "Login to continue your personalized career journey"
              : "अपने व्यक्तिगत करियर यात्रा को जारी रखने के लिए लॉगिन करें"}
          </p>
        </div>

        <Card variant="default" className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-1 px-1 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="flex-1 border border-gray-400 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Don't have an account? Sign Up
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
