class City {
  constructor(name) {
    this.name = name;
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

  printInfo() {
    console.log(this.date);
    console.log(this.max);
    console.log(this.min);
    console.log(this.condition);
    console.log(this.chanceOfRain);
    console.log(this.chanceOfSnow);
  }
}

function processData(data) {
  const date = data.forecastday[0].date;
  const maxC = Math.round(data.forecastday[0].day.maxtemp_c);
  const maxF = Math.round(data.forecastday[0].day.maxtemp_f);
  const minC = Math.round(data.forecastday[0].day.mintemp_c);
  const minF = Math.round(data.forecastday[0].day.mintemp_f);
  const condition = data.forecastday[0].day.condition.text;
  const icon = data.forecastday[0].day.condition.icon;
  const chanceOfRain = data.forecastday[0].day.daily_chance_of_rain;
  const chanceOfSnow = data.forecastday[0].day.daily_chance_of_snow;

  console.log(date);
  console.log(maxC);
  console.log(minC);
  console.log(maxF);
  console.log(minF);
  console.log(condition);
  console.log(chanceOfRain);
  console.log(chanceOfSnow);
  console.log(icon);
}

function getForecast(city) {
  const key = "65813105b47048debe6145016230507";
  const baseUrl = "http://api.weatherapi.com/v1";
  const days = 8;
  let request =
    baseUrl + "/forecast.json?key=" + key + "&q=" + city + "&days=" + days;

  fetch(request)
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
      processData(data.forecast);
      return data.forecast;
    })
    .catch((err) => console.log("Weather API error: " + err));
}

getForecast("london");

/*let counter = 0;
forecast.array.forEach((element) => {
  console.log("day " + counter);
  console.log(element);
  counter++;
});

/*
  // URL (required), options (optional)
  fetch(request)
    .then((response) => {
      if (response.ok) {
        console.log("success");
        return response.json();
      } else {
        console.log("Not SUccessful");
      }
    })
    .then((data) => console.log(data.forecast))
    .catch(err, () => {
      console.log("Weather API error: " + err);
      return err;
    });
}

//let request = https://api.weatherapi.com/v1/forecast.json?key=11111111111111111&q=london

/*
class cityManager {
  constructor() {
    const listOfCities = [];
    this.listOfCities = listOfCities;
  }

  add(city) {
    if (this.listOfCities.includes(city)) {
      console.log("Error: city already exists");
    } else {
      this.listOfCities.push(city);
    }
  }
}
*/
