// SKILLS SECTION

const skills = ["HTML", "CSS", "JavaScript", "Git & GitHub"];

const skillsList = document.getElementById("skills-list");

skills.forEach((skill) => {
  const li = document.createElement("li");  // create li first
  li.classList.add("skills-tag");           // then add class
  li.textContent = skill;                   // then add text
  skillsList.appendChild(li);              // then append
});

// PROJECTS SECTION

const projects = [
  {
    title: "Tourist Website",
    description:
      "African Kismat Expeditions is a tourism website that helps travelers discover the beauty, culture, wildlife, and adventures of Africa. Explore exciting destinations, plan unforgettable safaris, and experience authentic African adventures.",
    tech: ["HTML", "CSS"],
    link: "https://github.com/humphrey-developer/AfricanKismatExpenditions",
  },
  {
    title: "Akan Name Generator",
    description:
      "Akan Name Generator is a simple and fun website that helps you discover your Akan name based on the day, month and year you were born.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://solomonmaguta492-dev.github.io/Akan-Name-Generator/",
  },
];
//create a reference to the projects grid container
const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {               //loop opens here

  const techBadges = project.tech
    .map((t) => `<span class="tech-badge">${t}</span>`)
    .join("");
// create a new div element for each project card
  const card = document.createElement("div"); //card is inside the loop
  card.classList.add("project-card");
// set the inner HTML of the card with project details
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-tech">${techBadges}</div>
    <a
      href="${project.link}"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-primary"
      style="margin-top: 0.75rem; align-self: flex-start; font-size: 0.82rem; padding: 0.5rem 1.1rem;"
    >View Project</a>
  `;
// append the card to the projects grid container
  projectsGrid.appendChild(card);             //append is inside the loop

});                                           //loop closes here