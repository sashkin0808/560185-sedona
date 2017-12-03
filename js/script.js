var link = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");
var checkin = popup.querySelector("[name=checkin-date]");
popup.classList.remove("modal-show");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    setTimeout(function() {
    	checkin.focus();
    }, 400);
});