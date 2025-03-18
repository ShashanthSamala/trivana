export default {
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/thrivana',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key',
  port: process.env.PORT || 5000,
  clientURL: process.env.CLIENT_URL || 'http://localhost:5173',
  nodeEnv: 'production'
};