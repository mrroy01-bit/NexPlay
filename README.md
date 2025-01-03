# NexPlay - Video Streaming Platform

NexPlay is a modern video streaming platform built with React and Node.js, offering a YouTube-like experience with custom features and a sleek user interface.

## Features

- 🎥 Video streaming with adaptive quality
- 🔍 Advanced search functionality
- 👤 User authentication and profiles
- 📱 Responsive design for all devices
- 🎨 Modern, YouTube-inspired UI/UX
- 💾 Video upload and management
- 💬 Comments and interactions

## Tech Stack

### Frontend
- React.js
- CSS3 with modern features
- Redux for state management
- Axios for API requests
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Multer for file uploads

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/NexPlay.git
cd NexPlay
```

2. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

3. **Backend Setup**
```bash
cd backend
npm install
npm start
```

4. **Environment Variables**
Create `.env` files in both frontend and backend directories:

Frontend `.env`:
```env
VITE_API_URL=http://localhost:5000
```

Backend `.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Project Structure

### Frontend (`/frontend`)

```
/frontend
├── /public
│ ├── index.html       # Main HTML file
│ └── /assets          # Static assets (images, icons, etc.)
├── /src
│ ├── /components      # Reusable UI components
│ │ ├── NavBar.jsx
│ │ ├── VideoCard.jsx
│ │ ├── VideoPlayer.jsx
│ │ └── SearchBar.jsx
│ ├── /pages           # Page-specific components
│ │ ├── Home.jsx
│ │ ├── Video.jsx
│ │ ├── Login.jsx
│ │ └── Profile.jsx
│ ├── /styles          # Component styles
│ │ ├── Navbar.css
│ │ ├── VideoCard.css
│ │ └── global.css
│ ├── /services        # API interaction logic
│ │ ├── api.js
│ │ └── auth.js
│ ├── /redux           # State management
│ │ ├── store.js
│ │ └── slices/
│ ├── App.jsx          # Main application component
│ └── main.jsx         # Application entry point
└── package.json       # Project dependencies and scripts
```

### Backend (`/backend`)

```
/backend
├── /config
│ └── db.js            # Database configuration
├── /controllers
│ ├── authController.js
│ ├── videoController.js
│ └── userController.js
├── /models
│ ├── User.js
│ ├── Video.js
│ └── Comment.js
├── /routes
│ ├── authRoutes.js
│ ├── videoRoutes.js
│ └── userRoutes.js
├── /middleware
│ ├── auth.js
│ └── upload.js
├── /utils
│ └── helpers.js
├── server.js
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by YouTube's design and functionality
- Built with modern web technologies
- Focused on performance and user experience
