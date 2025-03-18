# MongoDB Atlas Configuration Guide

## Setup Steps

1. Create MongoDB Atlas Account
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account
   - Create a new organization if needed

2. Create a New Project
   - Name it "Thrivana"
   - Add members if necessary

3. Create a Cluster
   - Choose the FREE tier (M0)
   - Select Singapore region (same as backend)
   - Keep default cluster name

4. Configure Security
   - Create a database user
     - Username: thrivana_admin
     - Generate a secure password
     - Save credentials securely
   - Set Network Access
     - Add IP Access List entry
     - Choose "Allow Access from Anywhere" (0.0.0.0/0)

5. Get Connection String
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace <password> with your actual password

6. Environment Variables
   - Update MONGODB_URI in Render environment variables
   - Format: `mongodb+srv://thrivana_admin:<password>@cluster0.xxxxx.mongodb.net/thrivana?retryWrites=true&w=majority`

## Important Notes

- Keep database credentials secure
- Never commit sensitive information to version control
- Monitor database metrics in Atlas dashboard
- Set up database alerts for performance monitoring
- Regular backups are automatically handled by Atlas