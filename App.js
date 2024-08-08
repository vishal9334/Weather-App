// window.addEventListener("load", (event) => {
//   function digitalWatch() {
//     let newDate = new Date();
//     let hrs = newDate.getHours();
//     let min = newDate.getMinutes();
//     let sec = newDate.getSeconds();
//     let miliSec = newDate.getMilliseconds();
//     let period = "AM";

//     if (hrs >= 12) {
//       period = "PM";

//       if (hrs > 12) {
//         hrs -= 12;
//       }
//     } else if (hrs === 0) {
//       hrs = 12;
//     }
//     if (hrs < 10) {
//       hrs = "0" + hrs;
//     }
//     if (min < 10) {
//       min = "0" + min;
//     }
//     if (sec < 10) {
//       sec = "0" + sec;
//     }
//     if (miliSec < 100) {
//       miliSec = "0" + miliSec;
//       if (miliSec < 10) {
//         miliSec = "00" + miliSec;
//       }
//     }
//     const watchHr = document.getElementById("hr");
//     watchHr.textContent = `${hrs}`;
//     const watchMin = document.getElementById("min");
//     watchMin.textContent = `${min}`;
//     const watchSec = document.getElementById("sec");
//     watchSec.textContent = `${sec}`;
//     const watchMiliSec = document.getElementById("miliSecond");
//     watchMiliSec.textContent = `${miliSec}`;
//     const AmPm = document.getElementById("AmPm");
//     AmPm.textContent = `${period}`;
//   }
//   setInterval(digitalWatch, 1);

//   function myCreateDate() {
//     let createDate = new Date();
//     const dateFilter = createDate
//       .toUTCString()
//       .split(" ")
//       .slice(0, 4)
//       .join(" ");
//     document.getElementById("day").textContent = dateFilter;
//   }
//   myCreateDate();

//   document.getElementById("searchBtn").addEventListener("click", function () {
//     const location = document.getElementById("Name-Of-City-And-Country").value;
//     const pTag = document.getElementById("warnTag");

//     if (location) {
//       pTag.innerText = "";
//       fetchWeather(location);
//       changeColorAfterDelay(1000, location);
//     } else {
//       pTag.innerText = "Not exit Country name";
//     }
//   });

//   async function fetchWeather(location) {
//     let url = `https://api.weatherapi.com/v1/current.json?key=278713554cbe4d3ba2b53237242407&q=${location}`;

//     try {
//       const response = await fetch(url);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       displayLocationInfo(data);
//       const iconUrl = data.current.condition.icon;
//       const weatherIcon = document.getElementById("img");
//       weatherIcon.src = `https:${iconUrl}`;
//     } catch (error) {
//       document.getElementById(
//         "warnTag"
//       ).textContent = `Wrong input, try to enter the correct name`;
//     }
//   }

//   async function changeColorAfterDelay(delay, location) {
//       let url = `https://api.weatherapi.com/v1/current.json?key=278713554cbe4d3ba2b53237242407&q=${location}`;
//       try {
//           let newResponse = await fetch(url);
//           let data = await newResponse.json();
    
//         if (data.current && data.current.condition && data.current.condition.text) {
//           let text = data.current.condition.text;
//           let sunnyDay = ["Clear", "Sunny", "Partly cloudy", "Mostly sunny"];
//           let rainDay = ['Rain', 'Drizzle', 'Showers', 'Thunderstorm','Light rain shower'];
//           let winterDay = ['Snow', 'Sleet', 'Ice', 'Freezing Rain'];
//           let backgroundImage = 'url(D:\Own Create\Weather App\Day\sun.jpg)'
//           if (sunnyDay.includes(text)) {
//             backgroundImage = 'url(https://images.pexels.com/photos/6477399/pexels-photo-6477399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
//           } else if (rainDay.includes(text)) {
//             backgroundImage = 'url(https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'; 
//             backgroundImage = 'url(https://images.pexels.com/photos/1483156/pexels-photo-1483156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'; 
//           } else if (winterDay.includes(text)) {
//             backgroundImage = 'url(https://images.pexels.com/photos/6738359/pexels-photo-6738359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'; 

//           }
//           await new Promise((resolve) => {
//             setTimeout(() => {
//               let displayBackGround = document.getElementById('container');
//               displayBackGround.style.backgroundImage = backgroundImage;
//               resolve();
//             }, delay);
//           });
//         } else {
//           console.error('Condition text not found in the API response');
//         }
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     }
    

//   fetchWeather("India");

//   function displayLocationInfo(data) {
//     document.getElementById(
//       "country"
//     ).textContent = `Country: ${data.location.country}`;
//     document.getElementById(
//       "region"
//     ).textContent = `Region: ${data.location.region}`;
//     document.getElementById("name").textContent = `Name: ${data.location.name}`;
//     document.getElementById(
//       "localtime"
//     ).textContent = `Localtime: ${data.location.localtime}`;
//     document.getElementById(
//       "wind_kph"
//     ).textContent = `Wind_kph: ${data.current.wind_kph}`;
//     document.getElementById(
//       "temp"
//     ).textContent = `Temp_c: ${data.current.temp_c}`;
//     document.getElementById(
//       "cloud"
//     ).textContent = `Cloud: ${data.current.cloud}`;
//     document.getElementById(
//       "condition"
//     ).textContent = `Condition: ${data.current.condition.text}`;
//     document.getElementById(
//       "humidity"
//     ).textContent = `Humidity:${data.current.humidity}`;
//   }
// });



window.addEventListener("load", (event) => {
  function digitalWatch() {
    let newDate = new Date();
    let hrs = newDate.getHours();
    let min = newDate.getMinutes();
    let sec = newDate.getSeconds();
    let miliSec = newDate.getMilliseconds();
    let period = "AM";

    if (hrs >= 12) {
      period = "PM";
      if (hrs > 12) {
        hrs -= 12;
      }
    } else if (hrs === 0) {
      hrs = 12;
    }

    if (hrs < 10) hrs = "0" + hrs;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    if (miliSec < 100) miliSec = "0" + miliSec;
    if (miliSec < 10) miliSec = "00" + miliSec;

    document.getElementById("hr").textContent = `${hrs}`;
    document.getElementById("min").textContent = `${min}`;
    document.getElementById("sec").textContent = `${sec}`;
    document.getElementById("miliSecond").textContent = `${miliSec}`;
    document.getElementById("AmPm").textContent = `${period}`;
  }
  setInterval(digitalWatch, 1);

  function myCreateDate() {
    let createDate = new Date();
    const dateFilter = createDate
      .toUTCString()
      .split(" ")
      .slice(0, 4)
      .join(" ");
    document.getElementById("day").textContent = dateFilter;
  }
  myCreateDate();

  document.getElementById("searchBtn").addEventListener("click", function () {
    const location = document.getElementById("Name-Of-City-And-Country").value;
    const pTag = document.getElementById("warnTag");

    if (location) {
      pTag.innerText = "";
      fetchWeather(location);
      changeColorAfterDelay(1000, location);
    } else {
      pTag.innerText = "Not exit Country name";
    }
  });

  async function fetchWeather(location) {
    let url = `https://api.weatherapi.com/v1/current.json?key=278713554cbe4d3ba2b53237242407&q=${location}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      displayLocationInfo(data);
      const iconUrl = data.current.condition.icon;
      document.getElementById("img").src = `https:${iconUrl}`;
    } catch (error) {
      document.getElementById("warnTag").textContent = `Wrong input, try to enter the correct name`;
    }
  }

  async function changeColorAfterDelay(delay, location) {
    let url = `https://api.weatherapi.com/v1/current.json?key=278713554cbe4d3ba2b53237242407&q=${location}`;
    try {
      let newResponse = await fetch(url);
      let data = await newResponse.json();

      if (data.current && data.current.condition && data.current.condition.text) {
        let text = data.current.condition.text;
        let sunnyDay = ["Clear", "Sunny", "Partly cloudy", "Mostly sunny"];
        let rainDay = ['Rain','Patchy rain nearby','Drizzle', 'Showers', 'Thunderstorm', 'Light rain shower'];
        let winterDay = ['Snow', 'Sleet', 'Ice', 'Freezing Rain'];
        let backgroundImage = 'url(https://images.pexels.com/photos/6477399/pexels-photo-6477399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'; // Default image

        if (sunnyDay.includes(text)) {
          backgroundImage = 'url(https://images.pexels.com/photos/6477399/pexels-photo-6477399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        } if (rainDay.includes(text)) {
          backgroundImage = 'url(https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'; 
          // backgroundImage = 'url(https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
        } if (winterDay.includes(text)) {
          backgroundImage = 'url(https://images.pexels.com/photos/6738359/pexels-photo-6738359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'; 
        }

        await new Promise((resolve) => {
          setTimeout(() => {
            document.getElementById('container').style.backgroundImage = backgroundImage;
            resolve();
          }, delay);
        });
      } else {
        console.error('Condition text not found in the API response');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  fetchWeather("India");

  function displayLocationInfo(data) {
    document.getElementById("country").textContent = `Country: ${data.location.country}`;
    document.getElementById("region").textContent = `Region: ${data.location.region}`;
    document.getElementById("name").textContent = `Name: ${data.location.name}`;
    document.getElementById("localtime").textContent = `Localtime: ${data.location.localtime}`;
    document.getElementById("wind_kph").textContent = `Wind_kph: ${data.current.wind_kph}`;
    document.getElementById("temp").textContent = `Temp_c: ${data.current.temp_c}`;
    document.getElementById("cloud").textContent = `Cloud: ${data.current.cloud}`;
    document.getElementById("condition").textContent = `Condition: ${data.current.condition.text}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.current.humidity}`;
  }
});
