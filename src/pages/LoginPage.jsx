import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../state/AppContext';
import { useTranslation } from '../i18n';
import { interests } from '../data/mockData';
import Card from '../components/Card';

const LoginPage = () => {
  const navigate = useNavigate();
  const { language, setProfile } = useAppContext();
  const t = useTranslation(language);
  
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    selectedInterests: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      selectedInterests: prev.selectedInterests.includes(interestId)
        ? prev.selectedInterests.filter(id => id !== interestId)
        : [...prev.selectedInterests, interestId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.class || formData.selectedInterests.length === 0) {
      alert('Please fill all fields and select at least one interest.');
      return;
    }

    // Save profile data
    const profileData = {
      name: formData.name.trim(),
      class: formData.class,
      interests: formData.selectedInterests
    };
    
    setProfile(profileData);
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t.welcome}
          </h1>
          <p className="text-gray-600 text-lg">
            {language === 'en' 
              ? "Let's get to know you better to provide personalized career guidance"
              : "व्यक्तिगत करियर मार्गदर्शन प्रदान करने के लिए आइए आपको बेहतर तरीके से जानते हैं"
            }
          </p>
        </div>

        <Card variant="default" className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.name} *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t.enterName}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Class Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.class} *
              </label>
              <select
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">
                  {language === 'en' ? 'Select your class' : 'अपनी कक्षा चुनें'}
                </option>
                <option value="10">
                  {language === 'en' ? 'Class 10' : 'कक्षा 10'}
                </option>
                <option value="12">
                  {language === 'en' ? 'Class 12' : 'कक्षा 12'}
                </option>
              </select>
            </div>

            {/* Interests Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.selectInterests} *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <label
                    key={interest.id}
                    className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                      formData.selectedInterests.includes(interest.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.selectedInterests.includes(interest.id)}
                      onChange={() => handleInterestToggle(interest.id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                        formData.selectedInterests.includes(interest.id)
                          ? 'bg-blue-500 border-blue-500'
                          : 'border-gray-400'
                      }`}
                    >
                      {formData.selectedInterests.includes(interest.id) && (
                        <div className="w-2 h-2 bg-white rounded-sm" />
                      )}
                    </div>
                    <span className="text-sm text-gray-700">
                      {interest.label[language]}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {t.submit}
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
