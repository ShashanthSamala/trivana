# Thrivana Project Deployment Guide

This guide will help you deploy the Thrivana project to make it universally accessible.

## Prerequisites

1. Create accounts on:
   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for database hosting
   - [Render](https://render.com/) or [Railway](https://railway.app/) for backend hosting
   - [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) for frontend hosting

## Backend Deployment

1. **Set up MongoDB Atlas**
   - Create a new cluster
   - Set up database access (create user)
   - Set up network access (allow all IPs with 0.0.0.0/0)
   - Get your MongoDB connection string

2. **Deploy Backend to Render/Railway**
   - Connect your GitHub repository
   - Set environment variables:
     ```
     MONGODB_URI=your_mongodb_atlas_connection_string
     JWT_SECRET=your_secure_jwt_secret
     CLIENT_URL=your_frontend_url
     NODE_ENV=production
     ```
   - Set build command: `npm install`
   - Set start command: `npm start`

## Frontend Deployment

1. **Update API Configuration**
   - Create `.env` file in the frontend project root:
     ```
     VITE_API_URL=your_backend_url
     ```

2. **Build the Frontend**
   ```bash
   npm install
   npm run build
   ```

3. **Deploy to Vercel/Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Set environment variables if needed

## Post-Deployment

1. Test all features using the production URLs
2. Monitor the application for any errors
3. Set up proper error monitoring and logging

## Local Development

To run the project locally:

1. Backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. Frontend:
   ```bash
   npm install
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000