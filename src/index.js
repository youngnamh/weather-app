import "./style/styles.css";
import makeCity from "./makeCity";

//assign eventListener to add button
const addBtn = document.querySelector("#add-btn");
const cityInput = document.getElementById("city_name");

addBtn.addEventListener("click", () => {
  let cityName = cityInput.value;
  if (cityName === "") {
    console.log("Error: no inputted cityName");
  } else {
    console.log("city: " + cityName);
    console.log(cityInput);
    makeCity(cityName);
    cityInput.value = "";
  }
});
