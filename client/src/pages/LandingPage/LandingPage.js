import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherData } from '../../redux/actions/actions';
import {
    Container, 
    LandingPageContainer, 
    MainLogo, WeatherIconBox, 
    WeahterBarBox, 
    Scroll,
} from './LandingPageStyle';
// import sun from '../../images/sun.png';
// import cloud from '../../images/cloud.png';
// import moon from '../../images/moon.png';
// import rain from '../../images/rain.png';
// import snow from '../../images/snow.png';

function LandingPage () {

    const dispatch = useDispatch();
    
    useEffect (() => {
        
        function handleGeoSucces (location) {
            const lat = location.coords.latitude;
            const lot = location.coords.longitude;
            getWeather(lat, lot);
        }
            
        function handleGeoError () {
            console.log('Cannot get your location');
        }
            
        function getWeather (lat, lot) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=218094985a81470cdcd4ec7afed19e13`)
            .then(result => {
                // console.log(result.data);
                
                const { coord, main, name, sys, weather } = result.data;
                dispatch(getWeatherData({ coord, main, name, sys, weather }));
            })
            .catch(err => {
                console.log(err);
            })
        }
        
        return function askForCoords() {
            navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
        }
        
    }, [])
    
    const weatherData = useSelector(state => state.getWeatherDataReducer); // redux-thunk 다시 보기
    console.log('와라와라',weatherData.data);

        return (
        <Container>
            <LandingPageContainer>
                <MainLogo></MainLogo>
                <WeatherIconBox>
                    <li className="icon1"></li>
                    <li className="icon2"></li>
                    <li className="icon3"></li>
                    <li className="icon4"></li>
                    <li className="icon5"></li>
                </WeatherIconBox>
                <WeahterBarBox>
                    <div>
                        <span className="icon"></span>
                        <span className="temp-now">{(parseInt((weatherData.data.main.temp - 273.15)*10))/10}°C</span>
                        <span className="desc">비</span>
                    </div>
                    <div>
                        <span className="temp1">최고기온</span>
                        <span className="temp2">{(parseInt((weatherData.data.main.temp_max - 273.15)*10))/10}°C</span>
                    </div>
                    <div>
                        <span className="temp1">최저기온</span>
                        <span className="temp3">{(parseInt((weatherData.data.main.temp_min - 273.15)*10))/10}°C</span>
                    </div>
                </WeahterBarBox>
                <Scroll />
                {/* <OutfitBox /> */}
            </LandingPageContainer>
        </Container>
    )
}

export default LandingPage;