//Adding My name, year and copyright to the footer
const footChild = document.createElement('footer');
document.body.appendChild(footChild);

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Joel Ezan ${thisYear} \u00A9`;
footer.appendChild(copyright);

//Setting up my skill section
const skills = ["Javascript", "HTML", "CSS", "Excel", "SQL", "Tableau", "Java","Adobe Photoshop"];
const skillSection = document.querySelector('#skills');
const skillsList = skillSection.querySelector('ul');
skillsList.style.backgroundColor = 'white';
skillsList.style.width = 'fit-content';

for (let i = 0; i < skills.length; i++){

    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

//Setting up my message section 
const messageSection = document.getElementById('messages');
messageSection.style.display = 'none';



const messageForm = document.forms['leave_message'];



messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(`${usersName} thank you for providing your email as:\n ${usersEmail}.\n 
        I appreciate you leaving the following message:\n ${usersMessage}.`);
    
    // const messageSection = document.getElementById('messages');

    const messageList = messageSection.querySelector('ul');
 
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span><br>`;

    messageSection.style.display = 'block';
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.setAttribute('type', 'button');

    removeButton.addEventListener('click', function(e){
        const entry = removeButton.parentNode;
        entry.remove();
        messageSection.style.display = 'none';
     
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();

})

//Setting up my Project Section
const username = 'joelezan';

function getGitProjects() {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            const repositories = data;

            const projectSection = document.getElementById('projects');
            const projectList = projectSection.querySelector('ul');
            
            for (let i = 0; i < repositories.length; i++){
                const project = document.createElement('li');
                project.innerText = repositories[i].name;
                projectList.appendChild(project);
            }
            

           
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

getGitProjects();



