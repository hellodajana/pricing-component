const switchButton = document.getElementById("switch");

const monthlyPrice = document.querySelectorAll(".monthly-price");
const annualPrice = document.querySelectorAll(".annual-price");

switchButton.addEventListener("change", () => {
  for (i = 0; i < annualPrice.length; i++) {
    if (annualPrice[i].style.display === "none") {
      annualPrice[i].style.display = "block";
    } else {
      annualPrice[i].style.display = "none";
    }
  }
  for (i = 0; i < monthlyPrice.length; i++) {
    if (monthlyPrice[i].style.display === "block") {
      monthlyPrice[i].style.display = "none";
    } else {
      monthlyPrice[i].style.display = "block";
    }
  }
});
