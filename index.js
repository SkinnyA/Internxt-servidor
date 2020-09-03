const express = require('express');
const conectarDB = require('./config/db'); 

// create server
const app = express();

// Connect db
conectarDB();

// App port
const PORT = process.env.PORT || 4000;

//  Import routes
app.use('/api/books', require('./routes/books'));

// Run server
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});