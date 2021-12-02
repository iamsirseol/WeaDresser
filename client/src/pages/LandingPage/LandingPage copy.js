import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocationData, getWeatherData } from '../../redux/actions/actions';
import {
    Container, 
    LandingPageContainer, 
    MainLogo, WeatherIconBox, 
    WeahterBarBox, WeatherIcon,
    Scroll,
} from './LandingPageStyle';
import sun from '../../images/sun.png';
import cloud from '../../images/cloud.png';
import moon from '../../images/moon.png';
import rain from '../../images/rain.png';
import snow from '../../images/snow.png';

require('dotenv').config();
function LandingPage () {

    const [curWeather, setCurWeather] = useState("맑음");
    const [curIcon, setCurIcon] = useState(moon);
    const [completed, setCompleted] = useState(false);

    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.getWeatherDataReducer); // redux-thunk 다시 보기
    const isLoading = useSelector(state => state.isLoadingReducer.isLoading)

    // console.log('날씨!',weatherData);
    // console.log(isLoading)

    // function handleGeoSucces (location) {
    //     // console.log("handle GEo Sucess")
    //     const lat = location.coords.latitude;
    //     const lot = location.coords.longitude;
    //     console.log(location)
    //     dispatch(getLocationData(lat, lot));
    // }
    // function handleGeoError (err) {
    //     // console.log("asdfjaisfdhioasdhfiaodsuhf=============");
    //     console.log(err);
    //     // console.log('Cannot get your location');
    // }
    // console.log(process.env.REACT_APP_API_KEY)
    // const geoSucc = (location) => {
    //     const API_KEY = process.env.REACT_APP_API_KEY
    //     dispatch(getLocationData(location.coords,API_KEY));
    //     setCompleted(true);
    // }

    const getGeo = () => {
        console.log("geo call !!!!!")
        const options = {
            enableHighAccuracy: true,
            maximumAge: 3000,
            timeout: 2700
        };
        navigator.geolocation.getCurrentPosition(
            (location)=>{
                const API_KEY = process.env.REACT_APP_API_KEY
                dispatch(getLocationData(location.coords,API_KEY));
                // setCompleted(true);
            }, 
            (err)=>{
                if(err.code === 3){
                    getGeo();
                    setCompleted(false)
                }
                if(err.code ===1){
                    alert("위치 권한을 켜주세요");
                }
                // if(err.code === 2)
            }, 
        options)
    }

    useEffect (() => {
        if (!completed)  getGeo()      
        return () => {
            setCompleted(true)
        }
        
    }, [completed])
      // if (weatherData.data) {
        // }

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
        // function askForCoords() {
        //     console.log('asdfioasjfdasdf==========', 'geolocation' in navigator)
        // }

         
        // askForCoords();
        // async function getWeather (lat, lot) {
        //     const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=${process.env.REACT_APP_API_KEY}`)
        //         .catch(err => console.log('err', err));
        //     const { coord, main, name, sys, weather } = result.data;
        //     dispatch(getWeatherData({ coord, main, name, sys, weather }));
        // }
        
        // return () => {
        //     if (!complete) {
        //         askForCoords();
        //         complete = true;
        //     }
        // }

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
                !isLoading ? 
                null
                :
                    <>
                        <div>
                            <WeatherIcon imgUrl={curIcon}></WeatherIcon>
                            <span className="temp-now">{(parseInt((weatherData.main.temp - 273.15) * 10)) / 10}°C</span>
                            <span className="desc">{curWeather}</span>
                        </div>
                        <div>
                            <span className="temp1">최고기온</span>
                            <span className="temp2">{(parseInt((weatherData.main.temp_max - 273.15) * 10)) / 10}°C</span>
                        </div><div>
                            <span className="temp1">최저기온</span>
                            <span className="temp3">{(parseInt((weatherData.main.temp_min - 273.15) * 10)) / 10}°C</span>
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