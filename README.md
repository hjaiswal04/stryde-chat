
# STRYDE Chat 💬

A full-stack social media platform with real-time chat functionality, built with the MERN stack and Socket.io.


## 🌟 Features

### 🔐 Authentication & Security
- JWT-based authentication with secure token management
- Password encryption using bcrypt
- Protected routes and middleware
- Account freeze functionality

### 💬 Real-Time Chat
- Instant messaging with Socket.io
- Message status indicators (sent/delivered/read)
- Notification sounds for new messages
- Image sharing in chat
- Online/offline user status

### 📱 Social Media Features
- Create, edit, and delete posts
- Like and unlike posts
- Comment on posts
- Follow/unfollow users
- User profiles with customization
- Suggested users recommendation

### 🎨 User Experience
- Responsive design for all devices
- Dark/Light mode toggle
- Modern UI with Chakra UI components
- Smooth animations and transitions
- Image upload with Cloudinary integration

## 🚀 Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Chakra UI** - Component library
- **Socket.io Client** - Real-time communication
- **React Context** - State management
- **CSS3** - Custom styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.io** - WebSocket communication
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Cloudinary** - Image storage

### Development Tools
- **ESLint** - Code linting
- **Git** - Version control
- **Vercel** - Deployment platform

## 📁 Project Structure

```
stryde-chat/
├── backend/
│   ├── controllers/       # Route controllers
│   ├── db/               # Database connection
│   ├── middlewares/      # Custom middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── socket/           # Socket.io configuration
│   ├── utils/            # Utility functions
│   └── server.js         # Main server file
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── atoms/        # State management
│   │   ├── components/   # React components
│   │   ├── context/      # React context
│   │   ├── hooks/        # Custom hooks
│   │   ├── pages/        # Page components
│   │   └── assets/       # Images, sounds
│   ├── index.html        # Entry HTML
│   └── vite.config.js    # Vite configuration
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/hjaiswal04/stryde-chat.git
cd stryde-chat
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Run the Application

**Backend (Terminal 1):**
```bash
cd backend
npm run dev
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## 🔧 Environment Variables

### Backend (.env)
| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

## 📚 API Endpoints

### Authentication
- `POST /api/users/signup` - User registration
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout

### Users
- `GET /api/users/profile/:query` - Get user profile
- `POST /api/users/follow/:id` - Follow/unfollow user
- `PUT /api/users/update` - Update user profile
- `PUT /api/users/freeze` - Freeze/unfreeze account

### Posts
- `GET /api/posts/feed` - Get user feed
- `POST /api/posts/create` - Create new post
- `GET /api/posts/:id` - Get specific post
- `DELETE /api/posts/:id` - Delete post
- `PUT /api/posts/like/:id` - Like/unlike post
- `PUT /api/posts/reply/:id` - Reply to post

### Messages
- `GET /api/messages/conversations` - Get user conversations
- `GET /api/messages/:otherUserId` - Get messages with user
- `POST /api/messages` - Send message

## 🎯 Key Features Implementation

### Real-Time Chat
- Socket.io connection management
- Message broadcasting
- Online user tracking
- Typing indicators

### State Management
- React Context for global state
- Custom hooks for data fetching
- Optimistic UI updates

### Security
- JWT token validation
- Password hashing
- Protected API routes
- Input sanitization

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Backend (Railway/Heroku)
1. Create new project on hosting platform
2. Connect GitHub repository
3. Set environment variables
4. Deploy with automatic builds

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rajesh Jaiswal**
- GitHub: [@hjaiswal04](https://github.com/hjaiswal04)


## 📞 Support

If you have any questions or need help with setup, please open an issue or contact me directly.

---

⭐ **Star this repository if you found it helpful!**