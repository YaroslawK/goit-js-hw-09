const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const emailInput = form.querySelector('label input');

  form.addEventListener('input', () => {
    const currentState = {
      email: emailInput.value,
      message: textarea.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  });

const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedState) {
    emailInput.value = savedState.email;
    textarea.value = savedState.message;
  }


form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  
  const formData = {
      email: emailInput.value,
      message: textarea.value
  };
  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

form.addEventListener('input', event => {
  const formData = new FormData(form);
  const formValues = {};

  formData.forEach((value, key) => {
    formValues[key] = value.trim();
  });

  localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
});
