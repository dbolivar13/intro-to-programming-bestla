// Footer
const today =  new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const p_element = footer.querySelector('p');
p_element.innerHTML = `${p_element.innerHTML} ${thisYear}`;


// Create List of Skills 
const lst_skills = ["HTML","CSS","JavaScript","Python","R"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (i = 0; i < lst_skills.length; i++) {
    let skill = document.createElement('li');
    skill.classList.add('tag')
    skill.innerText = lst_skills[i];
    skillsList.appendChild(skill)
}

// Add event listener for messages

const messageForm = document.querySelector('form');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // capture current timestamp
    const now = new Date()

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const messageSection = document.getElementById('messages');

      // if hidden, show the "messages" section
    if (messageSection.style.display === 'none') {
        messageSection.style.display = 'block'
      }

    const messageList = messageSection.querySelector('ul');
    const newMessage =  document.createElement('li');
    newMessage.classList.add('message')
    newMessage.innerHTML =  `<div> <span class="strong">${message}</span> <p>${now.toLocaleString()} from <a class="link" href="mailto:${ email}">${name}</a> &nbsp;</p> </div>`
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.classList.add('button','button--danger')
    removeButton.addEventListener('click', (e) => {
        const entry= e.target.parentNode;
        messageList.remove(entry);
    });
     // create edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.classList.add('button', 'button--minimal');

    editButton.addEventListener('click', (event) => {
    const button = event.target;
    const entry = button.parentNode;

    if (button.innerText === 'edit') {
        const message = entry.querySelector('span')
        const input = document.createElement('input')
        input.type = 'text'
        input.value = message.innerText
        input.classList.add('field__input')

        message.after(input)
        message.remove()

        button.innerText = 'save'
    } else {
        const input = entry.querySelector('input')
        const message = document.createElement('span')
        message.innerText = input.value
        message.classList.add('strong')

        input.after(message)
        input.remove()

        button.innerText = 'edit'
    }
    });

    newMessage.appendChild(editButton)
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();

});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}