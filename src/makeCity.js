//handles DOM stuff

export default function makeCity(city) {
  const aName = city.getName();
  const name = aName.charAt(0).toUpperCase() + aName.slice(1);
  const arr = city.getForecast();
  const currTemp = city.currTemp;
  const currCondition = city.currCondition;
  let currTime = city.currTime;
  currTime = currTime.substring(11);
  const isDay = city.isDay;

  console.log(name);
  console.log(arr[2]);
  console.log(currTemp);
  console.log(currCondition);
  console.log(currTime);
  console.log(isDay);

  // Create the main container div with class "cityBox"
  const cityBox = document.createElement("div");
  cityBox.className = "cityBox";

  // Create the "today" div
  const today = document.createElement("div");
  today.className = "today";

  // Create the "cityInfo" div
  const cityInfo = document.createElement("div");
  cityInfo.className = "cityInfo";

  // Create the "cityName" div
  const cityName = document.createElement("div");
  cityName.className = "cityName";
  cityName.textContent = name;

  // Create the "cityTime" div
  const cityTime = document.createElement("div");
  cityTime.className = "cityTime";
  cityTime.textContent = currTime;

  // Append "cityName" and "cityTime" to "cityInfo"
  cityInfo.appendChild(cityName);
  cityInfo.appendChild(cityTime);

  // Create the "conditions" div
  const conditions = document.createElement("div");
  conditions.className = "conditions";

  // Create the "currentTemp" div
  const currentTemp = document.createElement("div");
  currentTemp.className = "currentTemp";
  currentTemp.textContent = currTemp;

  // Create the "condition" div
  const condition = document.createElement("div");
  condition.className = "condition";
  condition.textContent = currCondition;

  // Create the "todayHighLows" div
  const todayHighLows = document.createElement("div");
  todayHighLows.className = "todayHighLows";

  // Create the "todayHigh" span
  const todayHigh = document.createElement("span");
  todayHigh.className = "todayHigh";
  todayHigh.textContent = "H: " + arr[0].maxC + " ";

  // Create the "todayLow" span
  const todayLow = document.createElement("span");
  todayLow.className = "todayLow";
  todayLow.textContent = "L: " + arr[0].minC;

  // Append "currentTemp", "condition", "todayHigh", and "todayLow" to "todayHighLows"
  todayHighLows.appendChild(todayHigh);
  todayHighLows.appendChild(todayLow);

  // Append "currentTemp", "condition", and "todayHighLows" to "conditions"
  conditions.appendChild(currentTemp);
  conditions.appendChild(condition);
  conditions.appendChild(todayHighLows);

  // Append "cityInfo" and "conditions" to "today"
  today.appendChild(cityInfo);
  today.appendChild(conditions);

  // Create the "week" div
  const week = document.createElement("div");
  week.className = "week";

  // Define the array of days
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  let index = currentDate.getDay() + 1;

  // Create the days, including the "day", "dayPic", and "highLows" elements
  for (let i = 0; i < days.length; i++) {
    const day = document.createElement("div");
    day.className = "day";
    if (index === 7) {
      index = 0;
    }
    day.textContent = days[index];
    index++;

    const dayPic = document.createElement("img");
    dayPic.src = arr[i].icon;
    dayPic.className = "dayPic";

    const highLows = document.createElement("div");
    highLows.className = "highLows";

    const high = document.createElement("span");
    high.className = "high";
    high.textContent = arr[i].maxC;

    const low = document.createElement("span");
    low.className = "low";
    low.textContent = arr[i].minC;

    highLows.appendChild(high);
    highLows.appendChild(low);

    day.appendChild(dayPic);
    day.appendChild(highLows);

    week.appendChild(day);
  }

  if (!isDay) {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/LoNF8cgrrwYju5DxQL/giphy.gif')";
  } else if (currCondition == "Clear sky" || currCondition == "Sunny") {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/XBVHoZahgO0sskTGxa/giphy.gif')";
  } else if (
    currCondition == "Cloudy" ||
    currCondition == "Partly cloudy" ||
    currCondition == "Overcast" ||
    currCondition == "Foggy" ||
    currCondition == "Hazy"
  ) {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/d5PPYjcb3caPTHM3hv/giphy-downsized-large.gif')";
  } else if (
    currCondition == "Rainy" ||
    currCondition == "Showers" ||
    currCondition == "Misty" ||
    currCondition == "Freezing rain"
  ) {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif')";
  } else if (currCondition == "Windy" || currCondition == "Dust storms") {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/0IGRygDt5cMP2Q0Jmu/giphy.gif')";
  } else if (currCondition == "Snowy") {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/Xi2Xu0MejhsUo/giphy.gif')";
  } else if (currCondition == "Thunderstorms") {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/l0MYzA5czu7GV1Xt6/giphy.gif')";
  } else {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/l0O2SpthWi2HAcwes/giphy.gif')";
  }

  // Append "today" and "week" to "cityBox"
  cityBox.appendChild(today);
  cityBox.appendChild(week);

  // Append "city
  const cities = document.querySelector(".cities");
  cities.appendChild(cityBox);
}

/*
export default function makeCity(city) {
  console.log(city);

  // Create the main container div with class "cityBox"
  const cityBox = document.createElement("div");
  cityBox.className = "cityBox";

  // Create the "today" div
  const today = document.createElement("div");
  today.className = "today";

  // Create the "cityInfo" div
  const cityInfo = document.createElement("div");
  cityInfo.className = "cityInfo";

  // Create the "cityName" div
  const cityName = document.createElement("div");
  cityName.className = "cityName";
  cityName.textContent = "Toronto";

  // Create the "cityTime" div
  const cityTime = document.createElement("div");
  cityTime.className = "cityTime";
  cityTime.textContent = "10:30";

  // Append "cityName" and "cityTime" to "cityInfo"
  cityInfo.appendChild(cityName);
  cityInfo.appendChild(cityTime);

  // Create the "conditions" div
  const conditions = document.createElement("div");
  conditions.className = "conditions";

  // Create the "currentTemp" div
  const currentTemp = document.createElement("div");
  currentTemp.className = "currentTemp";
  currentTemp.textContent = "20°C";

  // Create the "condition" div
  const condition = document.createElement("div");
  condition.className = "condition";
  condition.textContent = "Mostly Sunny";

  // Create the "todayHighLows" div
  const todayHighLows = document.createElement("div");
  todayHighLows.className = "todayHighLows";

  // Create the "todayHigh" span
  const todayHigh = document.createElement("span");
  todayHigh.className = "todayHigh";
  todayHigh.textContent = "H: 20";

  // Create the "todayLow" span
  const todayLow = document.createElement("span");
  todayLow.className = "todayLow";
  todayLow.textContent = "L: 10";

  // Append "currentTemp", "condition", "todayHigh", and "todayLow" to "todayHighLows"
  todayHighLows.appendChild(todayHigh);
  todayHighLows.appendChild(todayLow);

  // Append "currentTemp", "condition", and "todayHighLows" to "conditions"
  conditions.appendChild(currentTemp);
  conditions.appendChild(condition);
  conditions.appendChild(todayHighLows);

  // Append "cityInfo" and "conditions" to "today"
  today.appendChild(cityInfo);
  today.appendChild(conditions);

  // Create the "week" div
  const week = document.createElement("div");
  week.className = "week";

  // Define the array of days
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Create the days, including the "day", "dayPic", and "highLows" elements
  for (let i = 0; i < days.length; i++) {
    const day = document.createElement("div");
    day.className = "day";
    day.textContent = days[i];

    const dayPic = document.createElement("img");
    dayPic.src = "../src/images/sunny.png";
    dayPic.className = "dayPic";

    const highLows = document.createElement("div");
    highLows.className = "highLows";

    const high = document.createElement("span");
    high.className = "high";
    high.textContent = "25";

    const low = document.createElement("span");
    low.className = "low";
    low.textContent = "10";

    highLows.appendChild(high);
    highLows.appendChild(low);

    day.appendChild(dayPic);
    day.appendChild(highLows);

    week.appendChild(day);
  }

  // Append "today" and "week" to "cityBox"
  cityBox.appendChild(today);
  cityBox.appendChild(week);

  // Append "city
  const cities = document.querySelector(".cities");
  cities.appendChild(cityBox);
}

*/
