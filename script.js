document.getElementById("chooseList").addEventListener("click", function () {
  event.preventDefault();
  var countryList = document.getElementById("countryList");
  countryList.classList.toggle("hidden");
});
document.querySelectorAll("#countryList li").forEach(function (country) {
  country.addEventListener("click", function () {
    var selectedCountry = this.getAttribute("data-country");
    document.getElementById("chooseList").textContent = selectedCountry;
    document.getElementById("countryList").classList.add("hidden");
  });
});
document.getElementById("myButton").addEventListener("click", function () {
  alert("hey am Victor");
});
button.onclick = function;
