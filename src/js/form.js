const btnOpenForm = document.querySelector('.btn-buy');
const btnCloseForm = document.querySelector('.close-form');
const formOverlay = document.querySelector('.form-overlay');
const form = document.querySelector('.form');
let isOpen = false;

function closeForm() {
  form.classList.add('closing-form');
  const timerId = setTimeout(function () {
    formOverlay.classList.remove('overlay-open');
  }, 400);
}

function openForm() {
  form.classList.remove('closing-form');
  formOverlay.classList.add('overlay-open');
  form.classList.add('opening-form');
}

btnOpenForm.addEventListener('click', function () {
  openForm();
});

btnCloseForm.addEventListener('click', function () {
  closeForm();
});

form.addEventListener('animationend', function () {
  form.classList.remove('opening-form');
});

document.addEventListener('click', function (event) {
  const target = event.target;
  const its_form = target == form || form.contains(target);
  const its_btnForm = target == btnOpenForm;
  const form_is_active = formOverlay.classList.contains('overlay-open');

  if (!its_form && !its_btnForm && form_is_active) {
    closeForm();
  }
});
