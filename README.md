# 🛂 Google OAuth2 Authentication with Passport.js

A simple Node.js application that demonstrates **Google OAuth2 login** using Passport.js and session-based authentication. Ideal for learning how OAuth2 works in a Node.js environment.

---

## 🚀 Features

- Login with Google using OAuth 2.0
- Session-based user authentication
- Dynamic UI using EJS templates
- Clean project structure to build upon

---

## 🧰 Tech Stack

| Technology         | Purpose                           |
|--------------------|------------------------------------|
| Node.js            | Backend runtime                    |
| Express.js         | Web framework                      |
| Passport.js        | Authentication middleware          |
| passport-google-oauth20 | Google OAuth2 strategy for Passport |
| express-session    | Session management                 |
| EJS                | View template engine               |
| dotenv             | Environment variable management    |

---

## 🛠 Setup Instructions

## 📌 Prerequisites

Before running this project, make sure you have the following installed:
1. **Node.js & npm**  
   - Download and install from [https://nodejs.org](https://nodejs.org)  
   - Check installation with `node -v` and `npm -v`

2. **Google Cloud OAuth 2.0 Credentials** 
   - Go to [Google Developer Console](https://console.developers.google.com/)
   - Create a new project (or use existing)
   - Enable "Google+ API" or "Google Identity Services"
   - Create OAuth 2.0 Client ID (Web Application)
   - Set **Authorized Redirect URI** to:  
     ```
     http://localhost:3000/auth/google/callback
     ```
   - Copy the **Client ID** and **Client Secret** and add them to your `.env` file
   
### Running Locally
```bash

# Clone the repository
git clone git@github.com:TaranaGit/OAuth2_Nodej.s.git
cd OAuth2_Nodejs

# SetUp your credentials in a .env file as:
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret

# Run the application
node app.js
```

