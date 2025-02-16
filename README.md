# Fur-and-friends
# Fur & Friends

## Overview
Fur & Friends is a matchmaking platform designed to combat old-age loneliness by connecting elderly individuals with volunteers for companionship and support. The platform also facilitates pet therapy by matching elderly users with therapy pets through partnering organizations.

## Features
- **Elder-Volunteer Matching:** Connects elderly users with volunteers based on shared interests, availability, and location.
- **Pet Therapy Matching:** Matches elderly users with therapy pets tailored to their needs and allergies.
- **Secure Authentication:** User registration and login with JWT authentication.

## Tech Stack
- **Frontend:** React, React Router, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **APIs Used:** OpenAI API, Google Maps API

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/KrishnaM0310/Fur-and-friends.git
cd Fur-and-friends
```

### 2. Setup Backend
```sh
cd backend
npm install
```
#### Configure Environment Variables
Create a `.env` file in the backend folder and add:
```
PORT=5001
DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```
Start the backend:
```sh
npm start
```

### 3. Setup Frontend
```sh
cd ../frontend/furandfriends
npm install
```
#### Configure Environment Variables
Create a `.env` file in the frontend folder and add:
```
REACT_APP_API_URL=http://localhost:5001
```
Start the frontend:
```sh
npm start
```

## Deployment
### Backend (Railway)
1. Deploy backend to [Railway](https://railway.app/)
2. Set environment variables in Railway settings
3. Use the Railway-provided domain as `REACT_APP_API_URL`

### Frontend (Netlify)
1. Deploy frontend to [Netlify](https://www.netlify.com/)
2. Set `REACT_APP_API_URL` in Netlify environment variables to the Railway backend URL

## Usage
1. **Sign Up/Login**
   - Users (elderly or volunteers) can register and log in securely.
2. **Profile Setup**
   - Users input their interests, availability, and preferences.
3. **Matching**
   - AI-based matching system suggests the best matches.
4. **Connect**
   - Users can view and connect with their matches on the recommendations page.

## Troubleshooting
### Common Issues & Fixes
#### **1. Backend Running on Wrong Port**
If the backend is running on a different port (e.g., 5002), update the frontend `REACT_APP_API_URL` accordingly.
```sh
REACT_APP_API_URL=http://localhost:5002
```

#### **2. Netlify Build Errors (Node Version Mismatch)**
Update Node.js version in Netlify settings to match the project's requirement.


## Contributors
- **Krishna M.**
- **Shawna H.**
- **Lynda K.**
- **Armita R.**

## License
This project is licensed under the MIT License.

