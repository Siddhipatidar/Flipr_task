
// frontend/src/pages/AdminPanel.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [project, setProject] = useState({ name: '', description: '', image: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/projects', project);
        alert("Project Added!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Project Name" onChange={e => setProject({...project, name: e.target.value})} />
            <input type="text" placeholder="Description" onChange={e => setProject({...project, description: e.target.value})} />
            <input type="text" placeholder="Image URL" onChange={e => setProject({...project, image: e.target.value})} />
            <button type="submit">Add Project</button>
        </form>
    );
};

export default AdminPanel;
