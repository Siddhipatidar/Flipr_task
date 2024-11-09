require('dotenv').config();
require('dotenv').config({ debug: true });  // Enable dotenv debugging

// backend/index.js
console.log("Test Variable:", process.env.TEST_VARIABLE);
//console.log("Loaded environment variables:", process.env);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

console.log("MongoDB URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

const projectRoutes = require('./backend_project_routes');
app.use('/api/projects', projectRoutes);

app.listen(5001, () => console.log("Server started on port 5001"));
