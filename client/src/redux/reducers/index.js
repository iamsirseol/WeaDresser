import { combineReducers } from 'redux';
import { 
    IS_LOGIN, 
    IS_LOADING,
    IS_SHOW_LOGIN_MODAL,
    IS_SHOW_SIGNUP_MODAL,
    IS_SHOW_OOTD_IMAGE_MODAL,
    ACCESS_TOKEN,
    WEATHER_DATA
    
} from '../actions/actions';
import { initialState } from './initialState';


// * rootReducer : 여러 리듀서들을 하나로 합친다. rootReducer는 store에 전달된다.
const rootReducer = combineReducers({
    isLoadingReducer,
    isLoginReducer,
    isShowModalReducer,
    getWeatherDataReducer
})

function isLoadingReducer(state = initialState.isLoading, action) {
  switch (action.type) {
    case IS_LOADING : 
      return Object.assign({},{
        isLoading : action.payload.isLoading
      });
      default : return state
    }
}

function isLoginReducer(state = initialState.isLogin, action) {
    switch (action.type) {
        case IS_LOGIN :
          return Object.assign({}, state, action.payload)
        case ACCESS_TOKEN : 
            return Object.assign({}, state, action.payload)
        default : return state;
    }
}

function isShowModalReducer(state = initialState.modal, action){
    switch (action.type) {
        case IS_SHOW_LOGIN_MODAL:
          return Object.assign({}, state, action.payload);
        case IS_SHOW_SIGNUP_MODAL:
          return Object.assign({}, state, action.payload);
        case IS_SHOW_OOTD_IMAGE_MODAL:
          return Object.assign({}, state, action.payload)
        default: return state;
      }
}

function getWeatherDataReducer(state = initialState.weatherData, action){
  switch (action.type) {
    case WEATHER_DATA:
      return Object.assign({}, {
        data: action.payload.data
      });
    default: return state;
  }
}

export default rootReducer;