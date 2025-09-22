export const quizQuestions = [
  {
    id: 1,
    question: {
      en: "Which subject interests you the most?",
      hi: "आपको कौन सा विषय सबसे अधिक दिलचस्प लगता है?"
    },
    options: [
      { id: 'a', text: { en: "Mathematics & Physics", hi: "गणित और भौतिकी" }, stream: "science" },
      { id: 'b', text: { en: "Business & Economics", hi: "व्यापार और अर्थशास्त्र" }, stream: "commerce" },
      { id: 'c', text: { en: "Literature & History", hi: "साहित्य और इतिहास" }, stream: "arts" },
      { id: 'd', text: { en: "Art & Design", hi: "कला और डिज़ाइन" }, stream: "arts" }
    ]
  },
  {
    id: 2,
    question: {
      en: "What type of career do you envision for yourself?",
      hi: "आप अपने लिए किस प्रकार के करियर की कल्पना करते हैं?"
    },
    options: [
      { id: 'a', text: { en: "Doctor/Engineer", hi: "डॉक्टर/इंजीनियर" }, stream: "science" },
      { id: 'b', text: { en: "Business Owner/Manager", hi: "व्यापारी/प्रबंधक" }, stream: "commerce" },
      { id: 'c', text: { en: "Teacher/Writer", hi: "शिक्षक/लेखक" }, stream: "arts" },
      { id: 'd', text: { en: "Government Officer", hi: "सरकारी अधिकारी" }, stream: "arts" }
    ]
  },
  {
    id: 3,
    question: {
      en: "Which activity do you enjoy most in your free time?",
      hi: "आप अपने खाली समय में किस गतिविधि का सबसे अधिक आनंद लेते हैं?"
    },
    options: [
      { id: 'a', text: { en: "Solving puzzles/experiments", hi: "पहेलियां हल करना/प्रयोग" }, stream: "science" },
      { id: 'b', text: { en: "Playing business games", hi: "व्यापारिक खेल खेलना" }, stream: "commerce" },
      { id: 'c', text: { en: "Reading books/writing", hi: "पुस्तकें पढ़ना/लिखना" }, stream: "arts" },
      { id: 'd', text: { en: "Debating/discussing", hi: "बहस करना/चर्चा करना" }, stream: "arts" }
    ]
  },
  {
    id: 4,
    question: {
      en: "What motivates you the most?",
      hi: "आपको सबसे अधिक प्रेरणा क्या देती है?"
    },
    options: [
      { id: 'a', text: { en: "Innovation & Discovery", hi: "नवाचार और खोज" }, stream: "science" },
      { id: 'b', text: { en: "Success & Money", hi: "सफलता और पैसा" }, stream: "commerce" },
      { id: 'c', text: { en: "Knowledge & Wisdom", hi: "ज्ञान और बुद्धिमत्ता" }, stream: "arts" },
      { id: 'd', text: { en: "Helping Others", hi: "दूसरों की मदद करना" }, stream: "arts" }
    ]
  },
  {
    id: 5,
    question: {
      en: "Which skill would you like to develop most?",
      hi: "आप किस कौशल को सबसे अधिक विकसित करना चाहेंगे?"
    },
    options: [
      { id: 'a', text: { en: "Analytical Thinking", hi: "विश्लेषणात्मक सोच" }, stream: "science" },
      { id: 'b', text: { en: "Leadership & Management", hi: "नेतृत्व और प्रबंधन" }, stream: "commerce" },
      { id: 'c', text: { en: "Communication & Writing", hi: "संवाद और लेखन" }, stream: "arts" },
      { id: 'd', text: { en: "Creative Expression", hi: "रचनात्मक अभिव्यक्ति" }, stream: "arts" }
    ]
  }
];

export const streamSuggestions = {
  science: {
    name: { en: "Science Stream", hi: "विज्ञान स्ट्रीम" },
    description: { 
      en: "Perfect for analytical minds who love problem-solving and innovation", 
      hi: "समस्या समाधान और नवाचार से प्रेम करने वाले विश्लेषणात्मक दिमाग के लिए उत्तम" 
    },
    courses: [
      { en: "Engineering (BTech)", hi: "इंजीनियरिंग (बीटेक)" },
      { en: "Medical (MBBS/BDS)", hi: "चिकित्सा (एमबीबीएस/बीडीएस)" },
      { en: "Pure Sciences (BSc)", hi: "शुद्ध विज्ञान (बीएससी)" },
      { en: "Pharmacy (BPharma)", hi: "फार्मेसी (बी.फार्मा)" }
    ]
  },
  commerce: {
    name: { en: "Commerce Stream", hi: "वाणिज्य स्ट्रीम" },
    description: { 
      en: "Ideal for future business leaders and entrepreneurs", 
      hi: "भावी व्यापारिक नेताओं और उद्यमियों के लिए आदर्श" 
    },
    courses: [
      { en: "Business Administration (BBA)", hi: "व्यापार प्रशासन (बीबीए)" },
      { en: "Chartered Accountancy (CA)", hi: "चार्टर्ड एकाउंटेंसी (सीए)" },
      { en: "Economics (BA Eco)", hi: "अर्थशास्त्र (बीए इको)" },
      { en: "Company Secretary (CS)", hi: "कंपनी सचिव (सीएस)" }
    ]
  },
  arts: {
    name: { en: "Arts Stream", hi: "कला स्ट्रीम" },
    description: { 
      en: "Best for creative thinkers and social change makers", 
      hi: "रचनात्मक चिंतकों और सामाजिक परिवर्तनकर्ताओं के लिए सर्वोत्तम" 
    },
    courses: [
      { en: "Liberal Arts (BA)", hi: "उदार कला (बीए)" },
      { en: "Law (LLB)", hi: "कानून (एलएलबी)" },
      { en: "Journalism (BJMC)", hi: "पत्रकारिता (बीजेएमसी)" },
      { en: "Psychology (BA Psych)", hi: "मनोविज्ञान (बीए साइक)" }
    ]
  }
};

export const careerPaths = {
  science: [
    { step: 1, title: { en: "12th Science", hi: "12वीं विज्ञान" }, description: { en: "Physics, Chemistry, Biology/Math", hi: "भौतिकी, रसायन, जीव विज्ञान/गणित" } },
    { step: 2, title: { en: "Entrance Exams", hi: "प्रवेश परीक्षा" }, description: { en: "JEE, NEET, State CET", hi: "जेईई, नीट, राज्य सीईटी" } },
    { step: 3, title: { en: "Degree Course", hi: "स्नातक पाठ्यक्रम" }, description: { en: "BTech/MBBS/BSc", hi: "बीटेक/एमबीबीएस/बीएससी" } },
    { step: 4, title: { en: "Career/Higher Studies", hi: "करियर/उच्च अध्ययन" }, description: { en: "Job or Masters", hi: "नौकरी या मास्टर्स" } }
  ],
  commerce: [
    { step: 1, title: { en: "12th Commerce", hi: "12वीं वाणिज्य" }, description: { en: "Accountancy, Economics, Business Studies", hi: "लेखाशास्त्र, अर्थशास्त्र, व्यापारिक अध्ययन" } },
    { step: 2, title: { en: "Professional Exams", hi: "व्यावसायिक परीक्षा" }, description: { en: "CA, CS, CMA Foundation", hi: "सीए, सीएस, सीएमए फाउंडेशन" } },
    { step: 3, title: { en: "Degree/Articleship", hi: "स्नातक/आर्टिकलशिप" }, description: { en: "BBA/BCom + Training", hi: "बीबीए/बीकॉम + प्रशिक्षण" } },
    { step: 4, title: { en: "Career Growth", hi: "करियर विकास" }, description: { en: "Professional Practice", hi: "व्यावसायिक अभ्यास" } }
  ],
  arts: [
    { step: 1, title: { en: "12th Arts", hi: "12वीं कला" }, description: { en: "History, Political Science, Literature", hi: "इतिहास, राजनीति विज्ञान, साहित्य" } },
    { step: 2, title: { en: "Competitive Exams", hi: "प्रतियोगी परीक्षा" }, description: { en: "CLAT, UPSC Prelims, State PSC", hi: "क्लैट, यूपीएससी प्रारंभिक, राज्य पीएससी" } },
    { step: 3, title: { en: "Degree Course", hi: "स्नातक पाठ्यक्रम" }, description: { en: "BA/LLB/BJMC", hi: "बीए/एलएलबी/बीजेएमसी" } },
    { step: 4, title: { en: "Career Options", hi: "करियर विकल्प" }, description: { en: "Civil Services/Teaching/Media", hi: "सिविल सेवा/शिक्षण/मीडिया" } }
  ]
};

export const mockColleges = [
  {
    id: 1,
    name: "Delhi University",
    location: { en: "Delhi", hi: "दिल्ली" },
    courses: { en: "Engineering, Arts, Commerce", hi: "इंजीनियरिंग, कला, वाणिज्य" },
    ranking: "Top 10",
    fees: "₹50,000 - 2,00,000",
    website: "du.ac.in"
  },
  {
    id: 2,
    name: "Jawaharlal Nehru University",
    location: { en: "Delhi", hi: "दिल्ली" },
    courses: { en: "Social Sciences, Languages", hi: "सामाजिक विज्ञान, भाषाएँ" },
    ranking: "Top 15",
    fees: "₹30,000 - 80,000",
    website: "jnu.ac.in"
  },
  {
    id: 3,
    name: "Banaras Hindu University",
    location: { en: "Varanasi", hi: "वाराणसी" },
    courses: { en: "All Streams Available", hi: "सभी स्ट्रीम उपलब्ध" },
    ranking: "Top 20",
    fees: "₹40,000 - 1,50,000",
    website: "bhu.ac.in"
  }
];

export const timelineEvents = [
  {
    id: 1,
    title: { en: "JEE Main Registration", hi: "जेईई मेन पंजीकरण" },
    date: "30 September 2024",
    description: { en: "Last date to register for JEE Main", hi: "जेईई मेन के लिए पंजीकरण की अंतिम तिथि" },
    type: "exam"
  },
  {
    id: 2,
    title: { en: "NEET Application", hi: "नीट आवेदन" },
    date: "15 October 2024",
    description: { en: "NEET application deadline", hi: "नीट आवेदन की समय सीमा" },
    type: "exam"
  },
  {
    id: 3,
    title: { en: "DU Admission Process", hi: "दिल्ली विश्वविद्यालय प्रवेश प्रक्रिया" },
    date: "25 October 2024",
    description: { en: "Delhi University admission begins", hi: "दिल्ली विश्वविद्यालय प्रवेश शुरू" },
    type: "admission"
  },
  {
    id: 4,
    title: { en: "Scholarship Applications", hi: "छात्रवृत्ति आवेदन" },
    date: "5 November 2024",
    description: { en: "Merit-based scholarship deadline", hi: "मेधा आधारित छात्रवृत्ति की समय सीमा" },
    type: "scholarship"
  }
];

export const interests = [
  { id: 'science', label: { en: 'Science', hi: 'विज्ञान' } },
  { id: 'mathematics', label: { en: 'Mathematics', hi: 'गणित' } },
  { id: 'literature', label: { en: 'Literature', hi: 'साहित्य' } },
  { id: 'history', label: { en: 'History', hi: 'इतिहास' } },
  { id: 'arts', label: { en: 'Arts', hi: 'कला' } },
  { id: 'technology', label: { en: 'Technology', hi: 'प्रौद्योगिकी' } },
  { id: 'sports', label: { en: 'Sports', hi: 'खेल' } },
  { id: 'music', label: { en: 'Music', hi: 'संगीत' } }
];
