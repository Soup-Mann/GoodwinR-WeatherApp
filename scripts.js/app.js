let townBtn = document.getElementById('townBtn');
let townName = document.getElementById('townName');
// current Temperatures Manteca Declarations
let injectHere = document.getElementById('injectHere'); //Current Temp
let minTemp = document.getElementById('minTemp'); //Minimum temp
let maxTemp = document.getElementById('maxTemp');
let theWeather = document.getElementById('theWeather');//The Described Weather



//Manteca 5 days
let day1date = document.getElementById('day1date');
let day2date = document.getElementById('day2date');
let day3date = document.getElementById('day3date');
let day4date = document.getElementById('day4date');
let day5date = document.getElementById('day5date');

let day1Temp = document.getElementById('day1Temp');
let day2Temp = document.getElementById('day2Temp');
let day3Temp = document.getElementById('day3Temp');
let day4Temp = document.getElementById('day4Temp');
let day5Temp = document.getElementById('day5Temp');

let day1min = document.getElementById('day1min');
let day2min = document.getElementById('day2min');
let day3min = document.getElementById('day3min');
let day4min = document.getElementById('day4min');
let day5min = document.getElementById('day5min');

let day1max = document.getElementById('day1max');
let day2max = document.getElementById('day2max');
let day3max = document.getElementById('day3max');
let day4max = document.getElementById('day4max');
let day5max = document.getElementById('day5max');

let weatherIcon = document.getElementById('weatherIcon');
let weatherIcon2 = document.getElementById('weatherIcon2');
let weatherIcon3 = document.getElementById('weatherIcon3');
let weatherIcon4 = document.getElementById('weatherIcon4');
let weatherIcon5 = document.getElementById('weatherIcon5');

let weatherIcons = document.getElementById('weatherIcons');
let weatherIcon2s = document.getElementById('weatherIcon2s');
let weatherIcon3s = document.getElementById('weatherIcon3s');
let weatherIcon4s = document.getElementById('weatherIcon4s');
let weatherIcon5s = document.getElementById('weatherIcon5s');


let localweather = document.getElementById('localweather');
let localweather2 = document.getElementById('localweather2');
let localIntro = document.getElementById('localIntro');


townBtn.addEventListener('click', function(){
console.log(townName.value);
})






getData()
getData2()


    
function getData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.7974&lon=-121.2161&appid=876472bfa888fce903a2ff2b5d460cdf&units=imperial').then(response => response.json()).then(data => {
       let cpuResponse = data
       console.log(cpuResponse);
       console.log(cpuResponse.name);

       console.log(cpuResponse.main.temp);
        injectHere.textContent = cpuResponse.main.temp;

        console.log(cpuResponse.main.temp_min);
        minTemp.textContent = cpuResponse.main.temp_min;

        console.log(cpuResponse.main.temp_max);
        maxTemp.textContent = cpuResponse.main.temp_max;

        localweather.textContent = cpuResponse.weather[0].main;
        localweather2.textContent = cpuResponse.weather[0].description;
        // localweather.textContent = cpuResponse.

})

}

function getData2() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=37.7974&lon=-121.2161&appid=876472bfa888fce903a2ff2b5d460cdf&units=imperial').then(response => response.json()).then(data => {
       let cpuResponse2 = data
       console.log(cpuResponse2);
      console.log(cpuResponse2.list[0].dt_txt)

    //   card Dates
      day1date.textContent = cpuResponse2.list[0].dt_txt;
      day2date.textContent = cpuResponse2.list[8].dt_txt;
      day3date.textContent = cpuResponse2.list[16].dt_txt;
      day4date.textContent = cpuResponse2.list[24].dt_txt;
      day5date.textContent = cpuResponse2.list[38].dt_txt;

    //   card Temps
    day1Temp.textContent = "Temp: " + cpuResponse2.list[0].main.temp;
    day2Temp.textContent = "Temp: " +  cpuResponse2.list[8].main.temp;
    day3Temp.textContent = "Temp: " +  cpuResponse2.list[16].main.temp;
    day4Temp.textContent = "Temp: " +  cpuResponse2.list[24].main.temp;
    day5Temp.textContent = "Temp: " +  cpuResponse2.list[38].main.temp;
    

    
    day1min.textContent = "Min: " +  cpuResponse2.list[0].main.temp_min;
    day2min.textContent = "Min: " +  cpuResponse2.list[8].main.temp_min;
    day3min.textContent = "Min: " +  cpuResponse2.list[16].main.temp_min;
    day4min.textContent = "Min: " +  cpuResponse2.list[24].main.temp_min;
    day5min.textContent = "Min: " +  cpuResponse2.list[38].main.temp_min;

      
    day1max.textContent = "Max: " +  cpuResponse2.list[0].main.temp_max;
    day2max.textContent = "Max: " +  cpuResponse2.list[8].main.temp_max;
    day3max.textContent = "Max: " +  cpuResponse2.list[16].main.temp_max;
    day4max.textContent = "Max: " +  cpuResponse2.list[24].main.temp_max;
    day5max.textContent = "Max: " +  cpuResponse2.list[38].main.temp_max;


    weatherIcon.textContent = "Weather: " +  cpuResponse2.list[0].weather[0].main;
    weatherIcon2.textContent = "Weather: " +  cpuResponse2.list[8].weather[0].main;
    weatherIcon3.textContent = "Weather: " +  cpuResponse2.list[16].weather[0].main;
    weatherIcon4.textContent = "Weather: " +  cpuResponse2.list[24].weather[0].main;
    weatherIcon5.textContent = "Weather: " +  cpuResponse2.list[38].weather[0].main;


    weatherIcons.textContent = "Weather: " +  cpuResponse2.list[0].weather[0].description;
    weatherIcon2s.textContent = "Weather: " +  cpuResponse2.list[8].weather[0].description;
    weatherIcon3s.textContent = "Weather: " +  cpuResponse2.list[16].weather[0].description;
    weatherIcon4s.textContent = "Weather: " +  cpuResponse2.list[24].weather[0].description;
    weatherIcon5s.textContent = "Weather: " +  cpuResponse2.list[38].weather[0].description;



})

}





