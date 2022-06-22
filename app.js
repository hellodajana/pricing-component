const switchButton = document.getElementById("switch");

switchButton.addEventListener("change", () => {
  annual();
  monthly();
});

function annual() {
  const annualPrice = document.querySelectorAll(".annual-price");
  for (i = 0; i < annualPrice.length; i++) {
    annualPrice[i].style.display === "none"
      ? (annualPrice[i].style.display = "block")
      : (annualPrice[i].style.display = "none");
  }
}

function monthly() {
  const monthlyPrice = document.querySelectorAll(".monthly-price");
  for (i = 0; i < monthlyPrice.length; i++) {
    monthlyPrice[i].style.display === "block"
      ? (monthlyPrice[i].style.display = "none")
      : (monthlyPrice[i].style.display = "block");
  }
}
