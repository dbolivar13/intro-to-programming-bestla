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

// Add event listener for messages

const messageForm = document.querySelector('form');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage =  document.createElement('li');
    newMessage.innerHTML = `<a href={mailto:${email}}>${name}</a> wrote:<span>${message} </span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (e) => {
        const entry= e.target.parentNode;
        messageList.remove(entry);
    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});


