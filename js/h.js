const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('No desenvolvimento de Hollow Knight, as inspirações da Team Cherry foram jogos como zelda II,Super metroid e Castlevania: Aria of Sorrow, e você tambem sabia que O modelo de movimento em Hollow Knight veio das séries Mega Man e Mega Man X.', 'success')
  })
}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function toggleTheme() {
  var body = document.body;
  var navbar = document.getElementById("myNavbar");
  var cards = document.querySelectorAll(".card");

  if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      navbar.setAttribute("data-bs-theme", "light");
      cards.forEach(function(card) {
          card.classList.remove("bg-dark");
          card.classList.add("bg-light");
      });
  } else {
      body.classList.add("dark-mode");
      navbar.setAttribute("data-bs-theme", "dark");
      cards.forEach(function(card) {
          card.classList.remove("bg-light");
          card.classList.add("bg-dark");
      });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var toastTrigger = document.getElementById('liveAlertBtn');
  var toastElement = document.getElementById('myToast');
  if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
      var toast = new bootstrap.Toast(toastElement);
      toast.show();
    });
  }
});