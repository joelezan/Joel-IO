const footChild = document.createElement('footer');
document.body.appendChild(footChild);

const today = new Date();

const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Joel Ezan ${thisYear} \u00A9`;
footer.appendChild(copyright);

const skills = ["Javascript", "HTML", "CSS", "Excel", "SQL", "Tableau", "Java","Adobe Photoshop"];

const skillSection = document.querySelector('#skills');
const skillsList = document.querySelector('#skills ul');
skillsList.style.backgroundColor = 'white';
skillsList.style.width = 'fit-content';


for (let i = 0; i < skills.length; i++){

    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}