const storageKeyMessage = 'feedback-msg';
const storageKeyEmail = 'email'

const form = document.querySelector('.feedback-form');


const textarea = form.querySelector('textarea');

const emailInput = form.querySelector('label input')
emailInput.addEventListener('input', onEmailAreaInput);

function onEmailAreaInput(event) {
  const email = event.target.value
  localStorage.setItem(storageKeyEmail, email);
}

textarea.addEventListener('input', onTextAreaInput);


function onTextAreaInput(event) {
  const message = event.target.value;
  localStorage.setItem(storageKeyMessage, message);
}

function populateTextArea() {
  const savedMessage = localStorage.getItem(storageKeyMessage);
  const savedEmail = localStorage.getItem(storageKeyEmail);
  if (savedMessage || savedEmail) {
    textarea.value = savedMessage;
    emailInput.value = savedEmail;
  }
}

populateTextArea()

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  
  localStorage.removeItem(storageKeyEmail);
  localStorage.removeItem(storageKeyMessage);
  const formData = {
      email: emailInput.value,
      message: textarea.value
  };
  console.log(formData);
  event.currentTarget.reset();
}
