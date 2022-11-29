const API_KEY = '46d36029270ca39c42719c42d4a6bd83';



const getFormattedWeatherData = async (city, units = "metric") => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  
    const data = await fetch(URL)
      .then((res) => res.json())
      .then((data) => data);
  
      console.log(data)
   
  };
  
  export { getFormattedWeatherData };