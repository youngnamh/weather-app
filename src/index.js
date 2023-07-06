import "./style/styles.css";
import makeCity from "./makeCity";
import getForecast from "./jsonHandler";

//assign eventListener to add button
const addBtn = document.querySelector("#add-btn");
const cityInput = document.getElementById("city_name");

addBtn.addEventListener("click", () => {
  let cityName = cityInput.value;
  if (cityName === "") {
    console.log("Error: no inputted cityName");
  } else {
    getForecast(cityName).then((city) => {
      //console.log(london.weeklyForecast);
      makeCity(city);
    });
    cityInput.value = "";
  }
});
