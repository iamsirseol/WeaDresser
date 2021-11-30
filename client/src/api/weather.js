import axios from 'axios';

const getWeather = async () => {
  const API_key = "21674499d78d5cc9f73dd339f934e97d";
  const endpoint = `http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=${API_key}` 
  const weatherInfo = await axios.get(endpoint)
    .catch(err => {
      return { isSuccess : false, data : null , msg : "Server error"} 
    })
    const {
      id, main, icon 
    } = weatherInfo.data.weather[0];
    const { 
      temp, temp_min, temp_max
    } = weatherInfo.data.main
    const{
      sunrise, sunset
    } = weatherInfo.data.sys

    const sunfall = new Date(sunset*1000)

    return weatherInfo 
      ? { 
          isSuccess : true ,  
          data : { id, main, icon, temp, temp_min, temp_max , sunrise, sunset }, 
          msg : "Success" 
        }
      : { isSuccess : false, data : null, msg : "Bad Request" }

};

const createEffect = () => {
  // console.log("here createEffect = ", num)
  const effect = document.createElement('i');
  let container = document.querySelector('.headerContainer')
  effect.classList.add('fas');
  effect.classList.add('fa-snowflake');
  effect.style.left = Math.random() * window.innerWidth + 'px';
  effect.style.animationDirection = Math.random()*3+2+'s';
  effect.style.fontSize=Math.random()+"rem";
  effect.style.opacity=Math.random();
  container.prepend(effect)
  setTimeout( () => { effect.remove() }, 5000 );

}


export {
  getWeather, 
  createEffect,
}