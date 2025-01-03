## NexPlay

/frontend
│
├── /public
│ ├── index.html # Main HTML file
│ └── /assets # Static assets (images, icons, etc.)
│
├── /src
│ ├── /components # Reusable components (Header, VideoPlayer, etc.)
│ │ ├── Header.js
│ │ ├── VideoPlayer.js
│ │ └── SearchBar.js
│ │
│ ├── /pages # Page components (Home, Login, Profile, etc.)
│ │ ├── Home.js
│ │ ├── Login.js
│ │ └── Profile.js
│ │
│ ├── /services # API services (handling requests to backend)
│ │ ├── api.js # Axios instance or API calls
│ │ └── auth.js # Auth-related API calls
│ │
│ ├── /redux # Redux state management (optional)
│ │ ├── store.js # Store and slices
│ │ └── userSlice.js # Example slice for user data
│ │
│ ├── App.js # Main app component
│ ├── index.js # Entry point
│ └── /styles # CSS, SCSS, or styled-components
│ └── App.css
│
├── package.json # Project dependencies and scripts
└── .env # Environment variables (e.g., API URL)

/backend
│
├── /config
│ └── db.js # Database connection
│
├── /controllers
│ ├── authController.js # Auth logic (login/signup)
│ ├── videoController.js # Video upload and retrieval
│ └── userController.js # User profile management
│
├── /models
│ ├── User.js # User schema/model
│ ├── Video.js # Video schema/model
│ └── Comment.js # Comment schema/model (optional)
│
├── /routes
│ ├── authRoutes.js # Auth routes (login/signup)
│ ├── videoRoutes.js # Video-related routes (upload, get videos)
│ └── userRoutes.js # User-related routes (profile, settings)
│
├── /middleware
│ ├── authMiddleware.js # Middleware for protected routes
│ └── uploadMiddleware.js # File upload handling (Multer)
│
├── /utils
│ └── uploadUtils.js # Utility functions for video uploads (e.g., file validations)
│
├── /public # Public directory for static files (videos, thumbnails, etc.)
│ └── /uploads # Uploaded video files and thumbnails
│
├── server.js # Express server setup
├── .env # Environment variables (DB credentials, JWT secret, etc.)
└── package.json # Project dependencies and scripts
