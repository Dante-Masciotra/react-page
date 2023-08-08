import React, { useState, useEffect } from 'react';
import './Projects.css'; // Import your CSS file for styling

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch your pinned repositories from GitHub API
    fetch('https://api.github.com/users/Dante-Masciotra/repos?type=public&sort=updated')
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <div className='container'>
      <h2>Github Repositories</h2>
      <div className='repos-list'>
        {repos.map(repo => (
          <a
            key={repo.id}
            className='repo-box'
            href={repo.html_url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {repo.name}
          </a>
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;
