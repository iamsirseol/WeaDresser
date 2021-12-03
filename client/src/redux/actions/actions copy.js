import axios from "axios";
export const IS_LOGIN = 'IS_LOGIN';
export const IS_LOADING = 'IS_LOADING';
export const IS_SHOW_LOGIN_MODAL = "IS_SHOW_LOGIN_MODAL";
export const IS_SHOW_SIGNUP_MODAL = "IS_SHOW_SIGNUP_MODAL";
export const IS_SHOW_OOTD_IMAGE_MODAL = "IS_SHOW_OOTD_IMAGE_MODAL"
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const WEATHER_DATA = "WEATHER_DATA";
require('dotenv').config();

export function loginSuccessHandler(boolean, accessToken) {
    return (dispatch) => {
        dispatch(isLoginHandler(boolean))
        dispatch(setAccessToken(accessToken))
    }
}

export function isLoginHandler (boolean) {
    return {
        type : IS_LOGIN,
        payload : {
            isLogin : boolean
        }
    }
};
export function isLoadingHandler (boolean) {
    return {
        type : IS_LOADING,
        payload : {
            isLoading : boolean
        }
    }
}
export function isShowLoginModalHandler (boolean) {
    return {
        type : IS_SHOW_LOGIN_MODAL,
        payload : {
            isShowLoginModal : boolean
        }
    }
};
export function isShowSignUpModalHandler (boolean) {
    return {
        type : IS_SHOW_SIGNUP_MODAL,
        payload : {
            isShowSignUpModal : boolean
        }
    }
};
export function isShowOotdImageModalHandler(boolean){
    return {
        type: IS_SHOW_OOTD_IMAGE_MODAL,
        payload: {
            isShowOotdImageModal: boolean
        }
    }
}
export function setAccessToken(accessToken) {
    return {
        type : ACCESS_TOKEN,
        payload: {
            accessToken: accessToken
        }
    }
};

export function callGeoLocation(){

}

export function getLocationData({latitude, longitude}, API_KEY) {
    // console.log(latitude, longitude, '@@@@');
    // const API_key = "21674499d78d5cc9f73dd339f934e97d";
    // console.log(process.REACT_APP_API_KEY)
    // console.log(API_KEY)
    // console.log("dotenv==ACTION", process.env.REACT_APP_API_KEY )

    return (async dispatch => {
        console.log("location 받아오고 날씨 요청 횟수 ")
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
            .catch(err => console.log('err', err));
        const { coord, main, name, sys, weather } = result.data;
        dispatch(getWeatherData({ coord, main, name, sys, weather }));
        dispatch(isLoadingHandler(true));
    })
};
export function getWeatherData(data) {
    // console.log(data)
    return {
        type : WEATHER_DATA,
        payload: {
            coord: data.coord,
            main: data.main, 
            name: data.name, 
            sys: data.sys,
            weather: data.weather
        }
    }
};