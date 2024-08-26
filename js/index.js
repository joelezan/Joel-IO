document.addEventListener('DOMContentLoaded', function() {
    const footChild = document.createElement('footer');
    document.body.appendChild(footChild);

    const today = new Date();
    const thisYear = today.getFullYear();
    const footer = document.querySelector('footer');
    const copyright = document.createElement('p');
    copyright.innerHTML = `Joel Ezan ${thisYear} \u00A9`;
    footer.appendChild(copyright);

    const skills = ["JavaScript", "HTML", "CSS", "Excel", "SQL", "Tableau", "Java", "Adobe Photoshop"];

    const skillsList = document.querySelector('#skills ul');
    skillsList.style.backgroundColor = 'white';
    skillsList.style.width = 'fit-content';

    for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement('li');
        skill.innerHTML = skills[i];
        skillsList.appendChild(skill);
    }


    const messageSection = document.getElementById('messages');
    if (messageSection) {
        messageSection.style.display = 'none';
    }

    const messageForm = document.forms['leave_message'];
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        console.log(`${usersName} thank you for providing your email as:\n ${usersEmail}.\n 
            I appreciate you leaving the following message:\n ${usersMessage}.`);
        
        const messageList = messageSection.querySelector('ul');
        
      
        messageSection.style.display = 'block';
    
        const newMessage = document.createElement('li');
        newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;
        
        const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.setAttribute('type', 'button');

        removeButton.addEventListener('click', function(e) {
            const entry = removeButton.parentNode;
            entry.remove();

            if (messageList.children.length === 0) {
                messageSection.style.display = 'none';
            }
        });

        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        messageForm.reset();
    });
});
