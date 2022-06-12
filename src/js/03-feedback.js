const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const currentFormValues = {};

refs.form.addEventListener('submit', getFormValues);
refs.textarea.addEventListener('input', saveCurrentTextareaValueInLS);
refs.input.addEventListener('input', saveCurrentInputValueInLS);
window.addEventListener('load', updateFormValuesFromLS);

function saveCurrentInputValueInLS(evt) {
  currentFormValues.email = evt.target.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(currentFormValues)
  );
}

function saveCurrentTextareaValueInLS(evt) {
  currentFormValues.message = evt.target.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(currentFormValues)
  );
}

function updateFormValuesFromLS() {
  const formValues = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formValues) {
    refs.textarea.value = formValues.message;
    refs.input.value = formValues.email;
  }
}

function getFormValues(evt) {
  evt.preventDefault();

  formData = new FormData(evt.currentTarget);

  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });

  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}
