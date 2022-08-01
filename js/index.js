// Footer
const today =  new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerText = `David Bolivar ${thisYear}`;
footer.appendChild(copyright);

// Create List of Skills 
const lst_skills = ["HTML","CSS","JavaScript","Python","R"];
const skillsSection = document.getElementById('skills');
const skillsList = document.querySelector('ul');

for (i = 0; i < lst_skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = lst_skills[i];
    skillsList.appendChild(skill)
}