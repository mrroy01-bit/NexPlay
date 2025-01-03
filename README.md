## NexPlay - Project Structure

This document outlines the file structure for the NexPlay application, separated into frontend and backend components.

**Frontend (`/frontend`)**

```
/frontend
├── /public
│ ├── index.html       # Main HTML file
│ └── /assets          # Static assets (images, icons, etc.)
├── /src
│ ├── /components      # Reusable UI components
│ │ ├── NavBar.jsx
│ │ ├── VideoPlayer.js
│ │ └── SearchBar.js
│ ├── /pages           # Page-specific components
│ │ ├── Home.jsx
│ │ └── Video.jsx
│ │ ├── Login.jsx
│ │ └── Profile.jsx
│ ├── /styles
│ │ ├──Home.css
│ │ └── Video.css

│ ├── /services        # API interaction logic
│ │ ├── api.js         # General API calls
│ │ └── auth.js        # Authentication API calls
│ ├── /redux           # State management (optional)
│ │ ├── store.js       # Redux store configuration
│ │ └── userSlice.js   # Example Redux slice for user data
│ ├── App.js           # Main application component
│ ├── index.js         # Application entry point
│ └── /styles          # Stylesheets (CSS, SCSS, etc.)
│     └── App.css
├── package.json       # Project dependencies and scripts
└── .env              # Environment variables (API URLs, etc.)
```

**Backend (`/backend`)**

```
/backend
├── /config
│ └── db.js            # Database connection configuration
├── /controllers
│ ├── authController.js # Authentication logic
│ ├── videoController.js# Video upload/retrieval logic
│ └── userController.js # User profile management logic
├── /models
│ ├── User.js          # User data model
│ ├── Video.js         # Video data model
│ └── Comment.js       # Comment data model (optional)
├── /routes
│ ├── authRoutes.js    # Authentication routes
│ ├── videoRoutes.js   # Video-related routes
│ └── userRoutes.js    # User-related routes
├── /middleware
│ ├── authMiddleware.js # Authentication middleware
│ └── uploadMiddleware.js# File upload middleware
├── /utils
│ └── uploadUtils.js   # Utility functions for video uploads
├── /public           # Publicly accessible files
│ └── /uploads        # Uploaded videos and thumbnails
├── server.js         # Main server file
├── .env              # Environment variables (database credentials, etc.)
└── package.json       # Project dependencies and scripts
```
