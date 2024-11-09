
//backend_project_routes.js
const express = require('express');
const router = express.Router();
const Project = require('./backend_project_model');

router.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

router.post('/', async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.status(201).send(project);
});

module.exports = router;
