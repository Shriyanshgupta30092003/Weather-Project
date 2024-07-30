const apiKey = "d4f84e1721461c10cd4aca17f0317e83"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".body").style.display = "none";
    }
    else{
    
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-predict").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = Math.round((data.wind.speed)*1.6) + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloud.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    document.querySelector(".body").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

