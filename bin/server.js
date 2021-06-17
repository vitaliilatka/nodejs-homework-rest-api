const app = require('../app');
const db = require("../model/db");

const PORT = process.env.PORT || 3000;

db.then(() => {
  app.listen(PORT, function () {
    console.log(`Server running. Use our API on port: ${PORT}`);
    console.log('Database connection successful');
  });
}).catch((err) => {
  console.log(`Server not running. Error message: ${err.message}`);
});

