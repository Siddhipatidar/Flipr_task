
// frontend/src/pages/LandingPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LandingPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await axios.get('/api/projects');
            setProjects(res.data);
        };
        fetchProjects();
    }, []);

    return (
        <div>
            <section>
                <h2>Our Projects</h2>
                <div>
                    {projects.map(project => (
                        <div key={project._id}>
                            <img src={project.image} alt={project.name} />
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
