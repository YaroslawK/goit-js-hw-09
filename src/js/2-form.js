const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const emailInput = form.querySelector('label input');

  form.addEventListener('input', () => {
    const currentState = {
      email: emailInput.value.trim(),
      message: textarea.value.trim()
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
  if (!emailInput.value.trim() || !textarea.value.trim()) {
    alert('Заповніть форму');
  }
  const formData = {
      email: emailInput.value.trim(),
      message: textarea.value.trim()
  };
  console.log(formData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
