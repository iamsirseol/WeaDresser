export const IS_LOGIN = 'IS_LOGIN';
export const IS_LOADING = 'IS_LOADING';
export const IS_SHOW_LOGIN_MODAL = "IS_SHOW_LOGIN_MODAL";
export const IS_SHOW_SIGNUP_MODAL = "IS_SHOW_SIGNUP_MODAL";
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const WEATHER_DATA = "WEATHER_DATA";

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
};
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
export function setAccessToken(accessToken) {
    return {
        type : ACCESS_TOKEN,
        payload: {
            accessToken: accessToken
        }
    }
};
export function getWeatherData(data) {
    return {
        type : WEATHER_DATA,
        payload: {
            data
        }
    }
};