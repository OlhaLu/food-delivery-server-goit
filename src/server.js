const express = require('express');
const app = express();
const port = 3000;

const startServer = app.listen(port, () => {
  console.log('Server is running on ' + port);
});
  
module.exports = startServer;