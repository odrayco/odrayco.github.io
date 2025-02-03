const projectList = document.getElementById('project-list');

async function fetchProjects() {
  try {
    const response = await fetch('https://api.github.com/users/username/repos'); // Replace 'username' with your GitHub username
    const projects = await response.json();

    projects.forEach(project => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href="${project.html_url}" target="_blank">${project.name}</a>
        <p>${project.description || 'No description available.'}</p>
      `;
      projectList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    projectList.innerHTML = '<li>Unable to load projects at this time.</li>';
  }
}

fetchProjects();
