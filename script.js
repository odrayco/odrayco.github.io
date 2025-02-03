// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDarkMode = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateTheme();
});

function updateTheme() {
  const isDarkMode = body.classList.contains('dark-theme');
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  themeToggle.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
}

// Set initial theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
}
updateTheme();

// Project Filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const projectList = document.getElementById('project-list');

// Sample projects (replace with your GitHub API data)
const projects = {
  cybersecurity: [
    { name: 'Security Tool 1', description: 'A tool for network scanning.', url: '#' },
    { name: 'Security Tool 2', description: 'A tool for vulnerability assessment.', url: '#' },
  ],
  networking: [
    { name: 'Network Tool 1', description: 'A tool for packet analysis.', url: '#' },
    { name: 'Network Tool 2', description: 'A tool for network monitoring.', url: '#' },
  ],
  other: [
    { name: 'Other Project 1', description: 'A general coding project.', url: '#' },
    { name: 'Other Project 2', description: 'Another general coding project.', url: '#' },
  ],
};

function displayProjects(category) {
  projectList.innerHTML = '';
  projects[category].forEach(project => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <a href="${project.url}" target="_blank">${project.name}</a>
      <p>${project.description}</p>
    `;
    projectList.appendChild(listItem);
  });
}

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayProjects(button.dataset.category);
  });
});

// Load default category
displayProjects('cybersecurity');
