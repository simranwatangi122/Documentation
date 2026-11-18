export default () => ({
  port: parseInt(process.env.PORT || '5000', 10),
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  adminEmail: process.env.ADMIN_EMAIL || 'admin@portfolio.local',
  nodeEnv: process.env.NODE_ENV || 'development',
});
