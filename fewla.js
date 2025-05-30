document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".booking-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Спасибо за запись! Мы скоро с вами свяжемся.");
    form.reset();
  });
});
