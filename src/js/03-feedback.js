const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input[name="email"]'),
};

const currentFormValues = {};

refs.form.addEventListener('submit', saveSubmitFormValues);
refs.form.addEventListener('input', getInputsValues);
window.addEventListener('load', updateFormValuesFromLS);

function getInputsValues(evt) {
  const {
    elements: { email, message },
  } = evt.currentTarget;

  currentFormValues.email = email.value;
  currentFormValues.message = message.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(currentFormValues)
  );
}

function updateFormValuesFromLS(evt) {
  const formValues = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formValues) {
    refs.textarea.value = formValues.message;
    refs.input.value = formValues.email;
  }
}

function saveSubmitFormValues(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);

  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });

  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}
