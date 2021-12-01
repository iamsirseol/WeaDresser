import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
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

    const [curWeather, setCurWeather] = useState('맑음');
    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.getWeatherDataReducer); // redux-thunk 다시 보기
    // console.log('날씨!',weatherData.data);
    
    useEffect (() => {
        let complete = false;

        async function askForCoords() {
            const result = await navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
            // console.log("result===========", result);
        }

        async function handleGeoSucces (location) {
            const lat = location.coords.latitude;
            const lot = location.coords.longitude;
            await getWeather(lat, lot);
        }
        
        function handleGeoError () {
            // console.log("asdfjaisfdhioasdhfiaodsuhf=============");
            console.log('Cannot get your location');
        }
        
        async function getWeather (lat, lot) {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=218094985a81470cdcd4ec7afed19e13`)
            console.log('ㅁㅁㅁ',result)
            const { coord, main, name, sys, weather } = result.data;
            if (!complete) dispatch(getWeatherData({ coord, main, name, sys, weather }));
        }
        
        return () => {
            askForCoords();
        
        }
        
    }, [dispatch])

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
                {
                !weatherData.data ? 
                null
                :
                    <>
                        <div>
                            <span className="icon"></span>
                            <span className="temp-now">{(parseInt((weatherData.data.main.temp - 273.15) * 10)) / 10}°C</span>
                            <span className="desc">{curWeather}</span>
                        </div>
                        <div>
                            <span className="temp1">최고기온</span>
                            <span className="temp2">{(parseInt((weatherData.data.main.temp_max - 273.15) * 10)) / 10}°C</span>
                        </div><div>
                            <span className="temp1">최저기온</span>
                            <span className="temp3">{(parseInt((weatherData.data.main.temp_min - 273.15) * 10)) / 10}°C</span>
                        </div>
                    </>
                }
                </WeahterBarBox>
                <Scroll />
            </LandingPageContainer>
        </Container>
    )
}

export default LandingPage;