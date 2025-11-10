const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', e => {
  localStorage.setItem(localStorageKey, e.target.value);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});

// console.log(localStorageKey);

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   form.reset();
// });