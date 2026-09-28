///SKILLS ///
const skills = ["HTML", "CSS", "JavaScript", "Git & GitHub",];

const skillslist = document.getElementById("skills-list");

skills.forEach((skill) => {
    const li = document.createElement("li");
    li.classList.add("skills-tag");
    li.textContent = skill;
    skillsList.appendChild(li);
});

//PROJECTS//