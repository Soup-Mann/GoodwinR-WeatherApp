
getData()
getData2()


    
function getData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.7974&lon=-121.2161&appid=876472bfa888fce903a2ff2b5d460cdf&units=imperial').then(response => response.text()).then(data => {
       let cpuResponse = data
       console.log(cpuResponse);
})

}

function getData2() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=37.7974&lon=-121.2161&appid=876472bfa888fce903a2ff2b5d460cdf&units=imperial').then(response => response.text()).then(data => {
       let cpuResponse2 = data
       console.log(cpuResponse2);
})

}