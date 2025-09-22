# One-Stop Personalized Career & Education Advisor

A React-based web application that helps students discover their ideal career streams through personalized assessments and provides comprehensive guidance on courses, colleges, and career paths.

## Features

### 🎯 Core Functionality
- **Profile Setup**: Simple form to capture student details (name, class, interests)
- **Aptitude Quiz**: 5 multiple-choice questions to assess career preferences
- **Stream Recommendations**: AI-powered suggestions for Science, Commerce, or Arts streams
- **Career Dashboard**: Personalized roadmap with courses, colleges, and timelines

### 🌐 User Experience
- **Bilingual Support**: Complete English/Hindi language toggle
- **Mobile-First Design**: Fully responsive Tailwind CSS implementation
- **Clean UI**: Modern, student-friendly interface with intuitive navigation
- **Real-time Progress**: Interactive progress tracking for quizzes

### 📊 Dashboard Sections
1. **Suggested Streams & Courses**: Personalized recommendations based on quiz results
2. **Career Path Visualization**: Step-by-step roadmap using interactive stepper component
3. **Nearby Government Colleges**: Table with college details, fees, and direct links
4. **Timeline Tracker**: Important deadlines for exams, admissions, and scholarships

## Tech Stack

- **Frontend**: React 18 with JavaScript (no TypeScript)
- **Styling**: Tailwind CSS for modern, responsive design
- **Routing**: React Router DOM for navigation
- **Build Tool**: Vite for fast development and building
- **State Management**: React Context API for global state

## Project Structure

```
one-stop-career-advisor/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Card.jsx        # Generic card component
│   │   ├── CollegeTable.jsx # College information table
│   │   ├── Navbar.jsx      # Navigation with language toggle
│   │   ├── QuizForm.jsx    # Interactive quiz form
│   │   ├── Stepper.jsx     # Career path visualization
│   │   └── Timeline.jsx    # Timeline events display
│   ├── pages/              # Main application pages
│   │   ├── Dashboard.jsx   # Main dashboard with all sections
│   │   ├── LoginPage.jsx   # Profile setup form
│   │   └── AptitudeQuiz.jsx # Quiz and results page
│   ├── state/              # Global state management
│   │   └── AppContext.jsx  # React Context for app state
│   ├── data/               # Mock data and content
│   │   └── mockData.js     # Quiz questions, colleges, etc.
│   ├── i18n/               # Internationalization
│   │   └── index.js        # English/Hindi translations
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # React entry point
│   └── index.css           # Tailwind CSS imports
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd one-stop-career-advisor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage Guide

### 1. Profile Setup
- Enter your name and select your class (10 or 12)
- Choose your interests from the provided options
- Submit to access the dashboard

### 2. Taking the Aptitude Quiz
- Navigate to the quiz from the navbar or dashboard
- Answer 5 multiple-choice questions about your preferences
- Receive instant results with stream recommendations

### 3. Exploring the Dashboard
- View personalized course suggestions
- Follow your career path visualization
- Check important deadlines and timelines
- Browse nearby government colleges

### 4. Language Toggle
- Use the language button in the navbar to switch between English and Hindi
- All content dynamically updates to the selected language

## Mock Data

The application uses comprehensive mock data including:
- **Quiz Questions**: 5 questions covering career preferences and interests
- **Stream Information**: Detailed descriptions and courses for Science, Commerce, Arts
- **College Database**: Top government colleges with fees, locations, and rankings
- **Timeline Events**: Important dates for exams, admissions, and scholarships
- **Career Paths**: Step-by-step progression for each stream

## Key Features in Detail

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Optimized for all screen sizes

### State Management
- Global context for user profile, language preference, and quiz results
- Persistent state across navigation
- Clean separation of concerns

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly content
- High contrast color scheme

## Future Enhancements

- Backend integration with real college database
- Advanced quiz algorithms with ML recommendations
- User authentication and profile persistence
- Integration with admission portals
- Scholarship matching based on profile
- Real-time college seat availability
- Career counselor chat integration

## Contributing

This is a prototype project. For production use, consider:
1. Adding proper error handling and loading states
2. Implementing backend API integration
3. Adding user authentication
4. Creating comprehensive testing suite
5. Adding analytics and user tracking
6. Optimizing for SEO and performance

## License

This project is created as a prototype for educational and career guidance purposes.
