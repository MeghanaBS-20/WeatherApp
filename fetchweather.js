let get_weather = document.getElementById("get_weather");
console.log(get_weather);
get_weather.addEventListener("click", async (e) => {
  e.preventDefault();
  let city = document.getElementById("city").value;

  const apiKey = "84dc865a78b2bd5ac8c0f315cbd3be72";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let weather_container = document.getElementById("weather_container");
  try {
    let res = await fetch(apiUrl);
    let data = await res.json();

    if (data.cod === 200){
      console.log(data);
      weather_container.style.display = "flex";
      weather_container.innerHTML = `
            <p id="cloud_img"><img src="./clouds.png" alt="" /> <b>${data.weather[0].main}</b></p>
            <p class="temprature"> <b>${data.main.temp} °C</b></p>
            <p class="city_name"><b>${data.name}</b></p>
            <div class="weather_container2">
            <div class="humidity">
            <img src="./humidity.png" alt="" class="humidity_img"/>
            <div class="humidity_contents"><b>${data.main.humidity} %</b></div>
            </div>
            <div class="wind">
            <img src="./wind.png" alt="" class="wind_img" />
            <div class="wind_contents"> <b>${data.wind.speed} km/h</b><p>Wind Speed</p></div>
            </div>
            `;
      // <p>Country : <b>${data.sys.country}</b></p>
      // <p>Weather Description : <b>${data.weather[0].description}</b></p>
    } else {
      weather_container.style.display = "flex";
      weather_container.innerHTML = `<p style="color:"red">City not found.Try again.</p>`;
    }
  } catch (error) {
    weather_container.innerHTML = `<p style="color:"red">Error fetching data.Please try later.</p>`;
  }
});