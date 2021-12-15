import { combineReducers } from 'redux';
import { 
    IS_LOGIN, 
    IS_LOADING,
    IS_SHOW_LOGIN_MODAL,
    IS_SHOW_SIGNUP_MODAL,
    IS_SHOW_OOTD_IMAGE_MODAL,
    ACCESS_TOKEN,
    WEATHER_DATA,
    TEMP_LOADING,
    IS_SHOW_SIDE_BAR,
    IS_SHOW_DATE_PICKER,
    DATE_DATA
} from '../actions/actions';
import { initialState } from './initialState';

// * rootReducer : 여러 리듀서들을 하나로 합친다. rootReducer는 store에 전달된다.
const rootReducer = combineReducers({
    isLoginReducer,
    isLoadingReducer,
    isShowModalReducer,
    getWeatherDataReducer,
    isShowSideBarReducer,
    isShowDatePickerReducer,
    getDateDataReducer,
    tempLoadingReducer,
})

function isLoginReducer(state = initialState.isLogin, action) {
  switch (action.type) {
      case IS_LOGIN :
        return Object.assign({},state, action.payload);
      case ACCESS_TOKEN :
        return Object.assign({},state, action.payload);
      default : return state;
  }
}

function isLoadingReducer(state = initialState.isLoading, action) {
  switch (action.type) {
    case IS_LOADING : 
      return Object.assign({},{
        isLoading : action.payload.isLoading
      });
      default : return state
    }
}

function isShowModalReducer(state = initialState.modal, action){
    switch (action.type) {
        case IS_SHOW_LOGIN_MODAL:
          return Object.assign({}, state, action.payload);
        case IS_SHOW_SIGNUP_MODAL:
          return Object.assign({}, state, action.payload);
        case IS_SHOW_OOTD_IMAGE_MODAL:
          return Object.assign({}, state, action.payload);
        default: return state;
      }
}

function accessTokenReducer(state = initialState.accessToken, action){
  switch (action.type) {
    case ACCESS_TOKEN:
      return Object.assign({}, {
        accessToken: action.payload.accessToken
      })
  }
}

function tempLoadingReducer(state = initialState.tempLoading, action){
  // console.log("asdfasdf",state)
  switch (action.type) {
    case TEMP_LOADING:
      const newState = Object.assign({}, state, action.payload);
      // console.log("newStateatatat", newState)
      return newState
    default: return state;
    
  }

}


function getWeatherDataReducer(state = initialState.weatherData, action){
  switch (action.type) {
    case WEATHER_DATA:
      return Object.assign({}, state,
        action.payload
      );
    default: return state;
  }
}

function isShowSideBarReducer(state = initialState.isShowSideBar, action){
  switch (action.type) {
    case IS_SHOW_SIDE_BAR:
      return Object.assign({}, {
        isShowSideBar: action.payload.isShowSideBar
      });
    default: return state;
  }
}

function isShowDatePickerReducer(state = initialState.isShowDatePicker, action){
  switch (action.type) {
    case IS_SHOW_DATE_PICKER:
      return Object.assign({}, {
        isShowDatePicker: action.payload.isShowDatePicker
      });
    default: return state;
  }
}

function getDateDataReducer(state = initialState.getDateData, action){
  switch (action.type) {
    case DATE_DATA:
      return Object.assign({}, {
        getDateData: action.payload.getDateData
      });
    default: return state;
  }
}

export default rootReducer;

