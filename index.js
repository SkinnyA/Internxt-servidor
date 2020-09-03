const express = require('express');
const conectarDB = require('./config/db'); 
const cors = require('cors');

// create server
const app = express();

// Connect db
conectarDB();

// Allow cors
app.use(cors());

// Express.json
app.use(express.json({ extended: true }));

// App port
const port = process.env.PORT || 4000;

//  Import routes
app.use('/api/books', require('./routes/books'));

// Run server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at port ${port}`);
});