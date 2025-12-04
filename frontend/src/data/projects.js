// EDIT THIS FILE to update project information
// Add or remove projects as needed

export const projects = [
  {
    id: 1,
    title: "Satellite Image Segmentation",
    shortDescription: "High-accuracy system for pixel-wise classification of satellite images into land cover types such as urban, vegetation, and water bodies.",
    image: "https://nafezly-production.fra1.cdn.digitaloceanspaces.com/uploads/portfolios/236527_69188887599e9_1763215495.webp",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV", "Matplotlib", "Jupyter Notebook"],
    category: "Computer Vision",
    featured: true,

    // Detailed information for project detail page
    fullDescription: "Developed a land cover segmentation system as part of practical AI projects. Conducted exploratory data analysis (EDA) to refine class distribution, reducing 7 classes to 6 for improved performance. Preprocessed images and masks, applied normalization and multi-class encoding, and trained models using RMSprop (UNet) and Adam (VGG16-UNet).",

    dataset: {
      name: "Satellite Imagery Dataset",
      size: "Custom collected images",
      classes: 6,
      description: "Satellite images labeled for land cover segmentation including urban, vegetation, water, and other categories."
    },

    challenges: [
      "Handling multi-class pixel-wise segmentation",
      "Managing imbalanced class distributions",
      "Optimizing models for accurate land cover predictions"
    ],

    solutions: [
      "Applied extensive preprocessing and normalization for images and masks",
      "Reduced number of classes to improve model stability",
      "Used transfer learning with VGG16-UNet for enhanced feature extraction"
    ],

    results: {
      UNet: "Dice: 0.825, IoU: 0.704",
      Vgg16UNet: "Dice: 0.850, IoU: 0.740"
    },

    githubLink: "https://github.com/mohamed-tarek-01/NTI-CV-Training-Tasks/tree/main/Final%20Project",
    demoVideo: null,
    
    teamMembers: []
  },
  
  {
    id: 2,
    title: "Arabic Named Entity Recognition (NER)",
    shortDescription: "Intelligent BiLSTM-based system for extracting named entities from Arabic text with high accuracy.",
    image: "https://nafezly-production.fra1.cdn.digitaloceanspaces.com/uploads/portfolios/236527_68725e4fadb36_1752325711.webp",
    technologies: ["Python", "TensorFlow", "Keras", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    category: "Natural Language Processing",
    featured: true,
    
    // Detailed information for project detail page
    fullDescription: "Developed an intelligent system for Arabic Named Entity Recognition (NER) using a BiLSTM neural network. The system processes Arabic text to extract entities such as Person (PER), Location (LOC), Organization (ORG), Miscellaneous (Misc), and others (O). Deployed via Streamlit for interactive text input, CSV export, and visual analytics of extracted entities.",
    
    dataset: {
      name: "ANERCorp",
      size: "118,500 tokens",
      classes: 5,
      description: "Arabic NER dataset with labeled entities for persons, locations, organizations, miscellaneous, and other categories."
    },
    
    challenges: [
      "Handling complex Arabic morphology and diacritics",
      "Maintaining context understanding in bi-directional sequences",
      "Dealing with imbalanced entity classes",
      "Efficient preprocessing and tokenization of Arabic text"
    ],
    
    solutions: [
      "Implemented BiLSTM architecture for capturing context in both directions",
      "Applied padding, normalization, and text-cleaning techniques",
      "Used embedding layers for dense word representation",
      "Visualized results with charts and enabled CSV export for analysis"
    ],
    
    results: {
      accuracy: "98.7%",
      macroF1: "0.72",
      sampleF1B_LOC: "0.86"
    },
    
    githubLink: "https://github.com/mohamed-tarek-01/Arabic-Named-Entity-Recognition",
    demoVideo: null,

    teamMembers: []
  },
  
  {
    id: 3,
    title: "Social Media Data Fetcher",
    shortDescription: "Python application to extract profile info, recent posts, and profile images from Facebook, Instagram, and Twitter.",
    image: "https://nafezly-production.fra1.cdn.digitaloceanspaces.com/uploads/portfolios/236527_6872615abbfa0_1752326490.webp",
    technologies: ["Python", "Playwright", "Tkinter", "Multi-threading", "UML Diagrams"],
    category: "Data Collection",
    featured: true,
    
    // Detailed information for project detail page
    fullDescription: "Developed a Python-based application for fetching key information from social media accounts, including profile details, recent posts, and profile images from Facebook, Instagram, and Twitter. The system features a GUI built with Tkinter and supports multi-threaded data extraction for faster performance.",
    
    dataset: {
      name: "N/A",
      size: "N/A",
      classes: "N/A",
      description: "Data is dynamically fetched from user-specified social media accounts in real-time."
    },
    
    challenges: [
      "Extracting data accurately from multiple social media platforms",
      "Maintaining performance while fetching data concurrently",
      "Designing an intuitive GUI for easy platform selection",
      "Ensuring reliable scraping despite platform layout changes"
    ],
    
    solutions: [
      "Implemented Playwright for robust cross-platform data extraction",
      "Used multi-threading to fetch data in parallel without slowing the UI",
      "Designed a user-friendly Tkinter interface for seamless interaction",
      "Prepared sequence and activity UML diagrams to visualize workflow"
    ],
    
    results: {
      performance: "Real-time data extraction",
      stability: "Reliable across platforms",
      usability: "Intuitive GUI for end-users"
    },
    
    githubLink: "https://github.com/mohamed-tarek-01/Social-Media-Fetcher",
    demoVideo: null,
    teamMembers: []
  },
  
  {
    id: 4,
    title: "Exam Timetabling Optimization",
    shortDescription: "Automated exam scheduling system using Genetic Algorithm with multiple evolutionary strategies and constraints.",
    image: "https://private-user-images.githubusercontent.com/194944795/444688351-370177cd-19af-4ba1-b775-f898afe5b072.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ0NTEwMTQsIm5iZiI6MTc2NDQ1MDcxNCwicGF0aCI6Ii8xOTQ5NDQ3OTUvNDQ0Njg4MzUxLTM3MDE3N2NkLTE5YWYtNGJhMS1iNzc1LWY4OThhZmU1YjA3Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEyOVQyMTExNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMmM5MDhkMzExNmY0YzQzYmM4NmMwMzhkNmFhMWQzOGU0Yzk2NGQ1N2E1NDQzZGM3ODY3MzZjODlhYzYwMjQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.n3NOKMvWjgVgWWvWkatjXep1_PqvzMJ0G991NJj2tAs",
    technologies: ["Python", "Pandas", "Tkinter", "Matplotlib", "TQDM", "Tabulate", "Jupyter Notebook"],
    category: "Optimization & Scheduling",
    featured: true,
    
    // Detailed information for project detail page
    fullDescription: "Developed an intelligent exam scheduling system using Genetic Algorithm (GA) to automatically generate optimized timetables. The system considers realistic constraints such as room capacities, lecturer availability, student conflicts, and time distribution. Multiple evolutionary strategies (Crossover, Mutation, Selection) were implemented and tested for performance.",
    
    dataset: {
      name: "University Exam Data",
      size: "Varies by semester",
      classes: "Courses, Students, Lecturers, Rooms, Timeslots",
      description: "Data extracted from CSV files containing course schedules, student enrollments, lecturer assignments, and room capacities."
    },
    
    challenges: [
      "Handling multiple realistic constraints in scheduling",
      "Balancing solution quality with computational efficiency",
      "Maintaining population diversity to avoid premature convergence",
      "Visualizing performance across generations"
    ],
    
    solutions: [
      "Implemented One-point and Uniform Crossover, Room and Timeslot Mutation, and various Selection strategies",
      "Applied Co-Evolution and Shared Fitness to improve diversity",
      "Used Genetic Distance to avoid similar solutions",
      "Developed interactive Tkinter GUI for course selection, timetable visualization, and performance comparison",
      "Generated Matplotlib charts to show fitness evolution across generations"
    ],
    
    results: {
      optimizedSchedules: "High-quality timetables with minimal conflicts",
      flexibility: "Supports multiple evolutionary strategies and constraint configurations",
      usability: "Interactive GUI for easy experimentation and analysis"
    },
    
    githubLink: "https://github.com/mohamed-tarek-01/Exam-Timetabling-Optimization",
    demoVideo: null,
    teamMembers: []
  },
  
  {
    id: 5,
    title: "Facial Emotion Recognition",
    shortDescription: "CNN-based system for detecting facial emotions from images using FER2013 dataset.",
    image: "https://nafezly-production.fra1.cdn.digitaloceanspaces.com/uploads/portfolios/236527_68726213adf90_1752326675.webp",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Data Augmentation", "Flask", "HTML/CSS", "JavaScript"],
    category: "Computer Vision",
    featured: true,
    
    // Detailed information for project detail page
    fullDescription: "Developed a CNN-based system for facial emotion recognition using the FER2013 dataset. Applied advanced data augmentation techniques such as rotation, horizontal flip, lighting adjustment, and cropping to enhance model performance. The model architecture includes multiple convolutional layers with Batch Normalization and Dropout to extract key features and reduce overfitting.",
    
    dataset: {
      name: "FER2013",
      size: "35,887 images",
      classes: 7,
      description: "Dataset containing grayscale facial images labeled across seven emotion categories: Angry, Disgust, Fear, Happy, Sad, Surprise, Neutral."
    },
    
    challenges: [
      "Handling class imbalance and limited data for certain emotions",
      "Preventing overfitting due to small dataset size",
      "Deploying a model for real-time prediction in a web interface"
    ],
    
    solutions: [
      "Applied data augmentation to increase dataset diversity",
      "Used Batch Normalization and Dropout layers in CNN to improve generalization",
      "Deployed the model via Flask with an interactive web interface for real-time emotion prediction"
    ],
    
    results: {
      testAccuracy: "68%",
      macroF1: "0.65",
      perClassPerformance: "Happy: 0.88, Surprise: 0.78",
    },
    
    githubLink: "https://github.com/mohamed-tarek-01/Face-Feel-AI",
    demoVideo: null,
    teamMembers: []
  },
  
  {
    id: 6,
    title: "Lost & Found Management System",
    shortDescription: "Comprehensive platform to report and track lost and found items for institutions and public spaces.",
    image: "https://i.ibb.co/jZrhFNT3/Whats-App-Image-2025-11-30-at-20-41-10-fbd4ba27-waifu2x-art-noise2-scale.png",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Web Development",
    featured: false,

    fullDescription: "Developed a web-based Lost & Found management system to help users report and track lost items. The platform facilitates the process of reuniting people with their belongings, providing an intuitive interface for reporting, searching, and updating item status.",
    
    dataset: {
      name: "N/A",
      size: "N/A",
      classes: "N/A",
      description: "No specific dataset; data is dynamically created by user reports"
    },

    challenges: [
      "Designing an intuitive and user-friendly interface",
      "Ensuring data consistency and accurate status tracking",
      "Handling multiple item categories and search queries"
    ],

    solutions: [
      "Implemented a structured database using SQLite for tracking items",
      "Developed responsive front-end with Bootstrap for accessibility on all devices",
      "Built search and filter functionality to easily locate items"
    ],

    results: {
      users: "100+ active users during pilot testing",
      itemsTracked: "500+ items logged",
      responseTime: "Instant updates on item status"
    },

    githubLink: "",
    demoVideo: null,
    teamMembers: []
  },
  
  {
    id: 7,
    title: "ECG Signal Classification System",
    shortDescription: "Decision Tree–based system for classifying ECG signals into ARR, AFF, CHF, and NSR.",
    image: "https://i.ibb.co/VY5XhfCZ/Screenshot-2025-11-30-223103.png", 
    technologies: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "NumPy",
      "Pandas",
      "Joblib",
      "BeautifulSoup",
      "PIL",
      "HTML Parsing",
      "Feature Engineering"
    ],
    category: "Machine Learning",
    featured: true,

    // Detailed project description
    fullDescription:
      "Built a complete ECG signal classification system using a Decision Tree model capable of distinguishing between ARR, AFF, CHF, and NSR classes. The project includes data preprocessing, feature engineering, model training, and deployment using a full Streamlit application. The app provides prediction, visual EDA, and a detailed model explanation interface.",

    dataset: {
      name: "ECG Signal Dataset",
      size: "Several thousand labeled ECG measurements",
      classes: 4,
      description:
        "Dataset containing ECG segment-based measurements such as PQdis, QTdis, STdis, QRseg, RSdis, QRSseg, and multiple slope & segment features. Each sample is labeled as ARR, AFF, CHF, or NSR."
    },

    challenges: [
      "Extracting meaningful features from ECG waveform segments",
      "Handling redundant and noisy columns in the dataset",
      "Ensuring the model generalizes across all ECG classes",
      "Building an intuitive UI to visualize ECG types and predictions"
    ],

    solutions: [
      "Performed feature engineering to create PRseg, PRdis, and QRSdis for better segment representation",
      "Removed irrelevant and redundant attributes to improve learning quality",
      "Trained a Decision Tree classifier with balanced input",
      "Built a full Streamlit app with prediction, EDA visualization, and model explanation tabs"
    ],

    results: {
      accuracy: "98%",
      macroF1: "0.98",
      weightedF1: "0.98",
      perClassPerformance: "ARR F1: 1.00, AFF F1: 0.95, CHF F1: 0.96, NSR F1: 1.00"
    },

    githubLink: "https://github.com/Mohamed-Abbes03/ECG_signal",
    demoVideo: null,
    teamMembers: []
  },

  {
    id: 8,
    title: "Wuzzuf Market Intelligence Dashboard",
    shortDescription: "Automated job market scraper and analytics dashboard using Selenium and Streamlit.",
    image: "https://i.ibb.co/Kpp2WN5F/Screenshot-2025-11-30-230154.png",
    technologies: [
      "Python", "Selenium", "Streamlit", "Pandas", 
      "Plotly", "ChromeDriver", "Web Scraping"
    ],
    category: "Data Collection",
    featured: true,

    // Full description for detail page
    fullDescription: "Developed a market intelligence dashboard that scrapes live job listings from Wuzzuf using Selenium and generates interactive analytics using Streamlit and Plotly. The system collects job titles, companies, job types, and additional metadata across multiple pages. Includes real-time scraping progress, data caching, data exploration, and the ability to export results as CSV.",

    dataset: {
      name: "Live Web Scraped Data",
      size: "Dynamic (100–1000+ rows depending on pages)",
      fields: ["Job Title", "Company", "Job Type"]
    },

    challenges: [
      "Ensuring scraper stability against dynamic page structure",
      "Handling missing or inconsistent job fields",
      "Preventing browser crashes in headless mode",
      "Maintaining fast performance when scraping multiple pages"
    ],

    solutions: [
      "Used headless Chrome with optimized driver settings to reduce overhead",
      "Implemented robust CSS selectors with fallback logic",
      "Added caching and progress tracking to improve UX",
      "Built interactive charts using Plotly for better insights"
    ],

    results: {
      totalJobsExample: 240,
      companiesExample: 85,
      jobTypesExample: 12,
      accuracyNote: "Scraper tested across 10 pages with a 98% successful extraction rate."
    },

    githubLink: "", 
    demoVideo: null,
    teamMembers: []
  },

  {
    id: 9,
    title: "ZTH Trading Telegram Bot",
    shortDescription: "Automated Telegram bot for managing trading subscriptions, payments, trials, and VIP channel access.",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
    technologies: [
      "Python", "python-telegram-bot", "Asyncio", 
      "AioSQLite", "SQLite", "Environment Variables", 
      "Telegram API"
    ],
    category: "Automation",
    featured: true,

    fullDescription: "ZTH Trading Bot is a fully automated Telegram system built to manage a premium trading signal service. It handles user onboarding, subscription management, payment verification, trial access, support messaging, and automated access control for a private VIP channel. The system is built using an asynchronous architecture to ensure speed, scalability, and non-blocking performance.",

    dataset: {
      name: "Local SQLite Database (zth_trading.db)",
      size: "Dynamic — grows with registered users",
      fields: [
        "user_id", 
        "username",
        "subscription_status",
        "start_date",
        "end_date",
        "trial_used",
        "payment_records"
      ]
    },

    challenges: [
      "Ensuring secure and tamper-proof subscription validation",
      "Handling asynchronous database operations efficiently",
      "Generating temporary invite links without risk of sharing",
      "Automating payment verification while avoiding false approvals",
      "Managing expiration tasks without blocking bot responsiveness"
    ],

    solutions: [
      "Used asyncio + aiosqlite for fully non-blocking database operations",
      "Implemented unique 10-second invite links to control unauthorized sharing",
      "Added admin-only inline approval panels for payments",
      "Created a background job running every minute to auto-kick expired users",
      "Stored credentials in environment variables for secure deployment"
    ],

    results: {
      automatedProcesses: "100% automation of subscriptions, trials, and expiry handling",
      trialConversionRate: "Improved early conversions using 24hr smart trial access",
      adminEfficiency: "Reduced verification workload by 70% using inline approval workflow",
      reliability: "Bot runs 24/7 with asynchronous event handling and background tasks"
    },

    githubLink: "https://github.com/your-repo/zth-trading-bot", 
    demoVideo: null,
    teamMembers: []
  }



];
