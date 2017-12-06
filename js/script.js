var link = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");
var checkin = popup.querySelector("[name=checkin-date]");
var checkout = popup.querySelector("[name=checkout-date]");
popup.classList.remove("modal-show");
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
	popup.classList.remove("modal-error");
	setTimeout(function() {
		checkin.focus();
	}, 400);
});
popup.addEventListener("submit", function (evt) {
	if (!checkin.value || !checkout.value || !adults.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
});