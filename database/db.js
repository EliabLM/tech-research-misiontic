const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    console.log('DB connected');
  } catch (error) {
    console.error(error);
    process.exit(1); // Stop the app
  }
};

module.exports = connectDB;
