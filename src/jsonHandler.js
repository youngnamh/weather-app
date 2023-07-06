//handles API stuff

class City {
  constructor(name, weeklyForecast, currTemp, currCondition, currTime, isDay) {
    this.name = name;
    this.weeklyForecast = weeklyForecast;
    this.currTemp = currTemp;
    this.currCondition = currCondition;
    this.currTime = currTime;
    this.isDay = isDay;
  }

  getName() {
    return this.name;
  }

  getForecast() {
    return this.weeklyForecast;
  }
}

class CityDay {
  constructor(date, maxC, minC, condition, icon, chanceOfRain, chanceOfSnow) {
    this.date = date;
    this.maxC = maxC;
    this.minC = minC;
    this.condition = condition;
    this.icon = icon;
    this.chanceOfRain = chanceOfRain;
    this.chanceOfSnow = chanceOfSnow;
  }
}

function processData(city, data) {
  const arrayOfDays = [];

  //loop through the 8 days and make a cityDay obj for each day
  //populate the array
  for (let i = 0; i < data.forecastday.length; i++) {
    const date = data.forecastday[i].date;
    const maxC = Math.round(data.forecastday[i].day.maxtemp_c);
    const minC = Math.round(data.forecastday[i].day.mintemp_c);
    const condition = data.forecastday[i].day.condition.text;
    const icon = data.forecastday[i].day.condition.icon;
    const chanceOfRain = data.forecastday[i].day.daily_chance_of_rain;
    const chanceOfSnow = data.forecastday[i].day.daily_chance_of_snow;

    let day = new CityDay(
      date,
      maxC,
      minC,
      condition,
      icon,
      chanceOfRain,
      chanceOfSnow
    );
    arrayOfDays.push(day);
  }
  //create a city with a complete forecast
  return getCurrent(city).then((curr) => {
    //console.log(curr[0] + " " + curr[1] + " " + curr[2]);
    let completeCity = new City(
      city,
      arrayOfDays,
      curr[0],
      curr[1],
      curr[2],
      curr[3]
    );
    return completeCity;
  });
}

//get current weather
function getCurrent(city) {
  const key = "65813105b47048debe6145016230507";
  const baseUrl = "http://api.weatherapi.com/v1";
  let request = baseUrl + "/current.json?key=" + key + "&q=" + city;

  return fetch(request)
    .then((response) => {
      if (response.ok) {
        console.log("success");
        return response.json();
      } else {
        console.log("Not Successful");
        throw new Error("Weather API request failed");
      }
    })
    .then((data) => {
      const currentData = [
        data.current.temp_c,
        data.current.condition.text,
        data.location.localtime,
        data.current.is_day,
      ];
      return currentData;
    })
    .catch((err) => console.log("Weather API error: " + err));
}

//get weekly forecast
export default function getForecast(city) {
  const key = "65813105b47048debe6145016230507";
  const baseUrl = "http://api.weatherapi.com/v1";
  const days = 8;
  let request =
    baseUrl + "/forecast.json?key=" + key + "&q=" + city + "&days=" + days;

  return fetch(request)
    .then((response) => {
      if (response.ok) {
        console.log("success");
        return response.json();
      } else {
        console.log("Not Successful");
        throw new Error("Weather API request failed");
      }
    })
    .then((data) => {
      //console.log(data.forecast);
      return processData(city, data.forecast);
    })
    .catch((err) => console.log("Weather API error: " + err));
}

/*
getForecast("london").then((london) => {
  //console.log(london.weeklyForecast);
  makeCity(london);
});

async funtion asdf() {
  try {
    response = await fetch();
    data = await response.json();
    return processData();
  catch (err) {
    console.log();
  }
}

let london = getForecast("london");
asdf().then(() => {
  console.log("London: " + london);
})

*/
