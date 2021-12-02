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
    WeatherIcon
} from './LandingPageStyle';
import sun from '../../images/sun.png';
import cloud from '../../images/cloud.png';
import moon from '../../images/moon.png';
import rain from '../../images/rain.png';
import snow from '../../images/snow.png';
require('dotenv').config()

function LandingPage () {

    const [curWeather, setCurWeather] = useState('');
    const [curIcon, setCurIcon] = useState(moon);
    const [check, setCheck] = useState([false, false, false]);
    const [navi, setNavi] = useState([]);
    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.getWeatherDataReducer); // redux-thunk 다시 보기

    useEffect (() => {
        
        let complete = false;
        
        if (weatherData.data) {
            console.log('날씨!',weatherData.data.weather[0].main);
            if (weatherData.data.weather[0].main === 'Clouds') {
                setCurWeather('흐림');
                setCurIcon(cloud);
            }
            if (weatherData.data.weather[0].main === 'Snow') {
                setCurWeather('눈');
                setCurIcon(snow);
            }
            if (weatherData.data.weather[0].main === 'Rain' || weatherData.data.weather[0].main === 'Thunderstrom') {
                setCurWeather('비');
                setCurIcon(rain);
            } else {
                setCurWeather('맑음');
                setCurIcon(sun);
            }
        }

        // if ('geolocation' in navigator) {
        //     navigator.geolocation.getCurrentPosition(location => {
        //         console.log('found!!', location);
        //         const lat = location.coords.latitude;
        //         const lot = location.coords.longitude;
        //         setNavi([lat, lot]);
        //     })
        // } else {
        //     console.log('Cannot get your location');
        // }
        function askForCoords() {
            navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);

            // let newCheck = check.slice();
            // newCheck[0] = true;
            // setCheck(newCheck);
            // console.log(1)
        }

        async function handleGeoSucces (location) {
            const lat = await location.coords.latitude;
            const lot = await location.coords.longitude;
            getWeather(lat, lot);

            // let newCheck = check.slice();
            // newCheck[1] = true;
            // setCheck(newCheck);
            // console.log(2)

        }
        
        function handleGeoError () {
            console.log('Cannot get your location');
            console.log(3)
        }
        
        async function getWeather (lat = navi[0], lot = navi[1]) {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=${process.env.API_KEY}`)
                .catch(err => console.log('err', err));
            // console.log('ㅁㅁㅁ',result.data)
            // let newCheck = check.slice();
            // newCheck[2] = true;
            // setCheck(newCheck);
            if (result) {
                const { coord, main, name, sys, weather } = result.data;
                dispatch(getWeatherData({ coord, main, name, sys, weather }));
            }
        }
        
        
        return () => {
            if (!complete) {
                askForCoords();
                if (check[0] && check[1] && check[2]) {
                    complete = true;
                }
            }
        }
        
    }, []);

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
                null // 로딩페이지로 바꿔서 넣어야 할 듯
                :
                    <>
                        <div>
                            <WeatherIcon imgUrl={curIcon}></WeatherIcon>
                            {/* <span className="icon" imgUrl={curIcon}></span> */}
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