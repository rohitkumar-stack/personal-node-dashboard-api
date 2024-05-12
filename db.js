const mongoose = require('mongoose');
const dbHOST = process.env.DBHOST;

mongoose.connect(dbHOST, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
