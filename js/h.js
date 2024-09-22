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

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function toggleTheme() {
  var body = document.body;
  var navbar = document.getElementById("myNavbar");
  var cards = document.querySelectorAll(".card");
  var footer = document.querySelector(".footer");

  if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      navbar.setAttribute("data-bs-theme", "light");
      cards.forEach(function(card) {
          card.classList.remove("bg-dark");
          card.classList.add("bg-light");
      });
      footer.classList.remove("bg-dark");
      footer.classList.add("bg-light");
  } else {
      body.classList.add("dark-mode");
      navbar.setAttribute("data-bs-theme", "dark");
      cards.forEach(function(card) {
          card.classList.remove("bg-light");
          card.classList.add("bg-dark");
      });
      footer.classList.remove("bg-light");
      footer.classList.add("bg-dark");
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
