const { Sequelize } = require('sequelize');

// Replace 'your_database', 'your_username', and 'your_password' with your actual database details
const sequelize = new Sequelize('postgres', 'postgres', 'kumar', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  
      // Example: Create a new user
      const newUser = await User.create({
        username: 'john_doe',
        email: 'john@example.com'
      });
      console.log('New user created:', newUser.toJSON());
  
      // Your database-related code here
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();

// module.exports = sequelize;
