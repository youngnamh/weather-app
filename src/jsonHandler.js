class City {
  constructor(name, weeklyForcast) {
    this.name = name;
    this.weeklyForcast = weeklyForcast;
  }
}

class CityDay {
  constructor(
    date,
    maxC,
    maxF,
    minC,
    minF,
    condition,
    icon,
    chanceOfRain,
    chanceOfSnow
  ) {
    this.date = date;
    this.maxC = maxC;
    this.minC = minC;
    this.maxF = maxF;
    this.minF = minF;
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
    const maxF = Math.round(data.forecastday[i].day.maxtemp_f);
    const minC = Math.round(data.forecastday[i].day.mintemp_c);
    const minF = Math.round(data.forecastday[i].day.mintemp_f);
    const condition = data.forecastday[i].day.condition.text;
    const icon = data.forecastday[i].day.condition.icon;
    const chanceOfRain = data.forecastday[i].day.daily_chance_of_rain;
    const chanceOfSnow = data.forecastday[i].day.daily_chance_of_snow;

    let day = new CityDay(
      date,
      maxC,
      maxF,
      minC,
      minF,
      condition,
      icon,
      chanceOfRain,
      chanceOfSnow
    );
    arrayOfDays.push(day);
  }
  //create a city with a complete forecast
  let completeCity = new City(city, arrayOfDays);
  return completeCity;
}

function getForecast(city) {
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

getForecast("london").then((london) => {
  console.log(london);
});

/*async funtion asdf() {
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
