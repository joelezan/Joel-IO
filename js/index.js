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


const messageSection = document.getElementById('messages');
messageSection.style.display = 'none';

for (let i = 0; i < skills.length; i++){

    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

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