const apiKey = "a48e862c18305109342e5a928a79f954";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#searchBtn");
var searchBoxStorage;


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(city)
    console.log(data);

    document.querySelector(".shortData h1").innerHTML = data.name;
    document.querySelector(".shortData h1").style.textTransform = "lowercase";
    document.querySelector(".shortData h2").innerHTML = data.main.temp.toFixed(1);
    var weather = data.weather[0].main;
    document.querySelector(".shortData h3 i").innerHTML = weather;
    document.querySelector(".shortData h3 i").style.textTransform = "lowercase";
    document.querySelector(".weather h2").innerHTML = data.weather[0].description;
    document.querySelector(".minTemp h2").innerHTML = data.main.temp_min.toFixed(1);
    document.querySelector(".maxTemp h2").innerHTML = data.main.temp_max.toFixed(1);
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    searchBoxStorage = searchBox.value;
    setInterval(checkWeather(searchBoxStorage), 30000);
})

searchBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
        searchBoxStorage = searchBox.value;
        setInterval(checkWeather(searchBoxStorage), 30000);
    }
});


 
 