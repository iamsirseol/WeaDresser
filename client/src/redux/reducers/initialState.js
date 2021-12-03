export const initialState = {
    isLogin : {
        isLogin : false,
        accessToken : "",
    },
    isLoading : {
        isLoading : true
    },
    accessToken: {
        accessToken: ''
    },
    modal : {
        isShowLoginModal : false, 
        isShowSignUpModal : false,
        isShowOotdImageModal : false,
    },
    weatherData: {
        coord: null,
        main: null, 
        name: null, 
        sys: null,
        weather: null
    },
    isShowSideBar: {
        isShowSideBar: false
    },
}