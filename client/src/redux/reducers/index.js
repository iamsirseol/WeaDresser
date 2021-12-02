import { combineReducers } from 'redux';
import { 
    IS_LOGIN, 
    IS_LOADING,
    IS_SHOW_LOGIN_MODAL,
    IS_SHOW_SIGNUP_MODAL,
    ACCESS_TOKEN,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    WEATHER_DATA
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
    WEATHER_DATA
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
    
} from '../actions/actions';
import { initialState } from './initialState';


// * rootReducer : 여러 리듀서들을 하나로 합친다. rootReducer는 store에 전달된다.
const rootReducer = combineReducers({
<<<<<<< HEAD
<<<<<<< HEAD
    isLoginReducer,
    isLoadingReducer,
    isShowLoginModalReducer,
    isShowSignUpModalReducer,
    accessTokenReducer,
})

function isLoginReducer(state = initialState.isLogin, action) {
    switch (action.type) {
        case IS_LOGIN :
            return Object.assign({},{
                isLogin : action.payload.isLogin
            });
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

function isShowLoginModalReducer(state = initialState.isShowLoginModal, action){
    switch (action.type) {
        case IS_SHOW_LOGIN_MODAL:
          return Object.assign({}, {
            isShowLoginModal: action.payload.isShowLoginModal
          });
        default: return state;
      }
}

function isShowSignUpModalReducer(state = initialState.isShowSignUpModal, action){
    switch (action.type) {
        case IS_SHOW_SIGNUP_MODAL :
          return Object.assign({}, {
            isShowSignUpModal: action.payload.isShowSignUpModal
          });
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
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
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
        default: return state;
      }
}

<<<<<<< HEAD
<<<<<<< HEAD
function accessTokenReducer(state = initialState.accessToken, action){
  switch (action.type) {
    case ACCESS_TOKEN:
      return Object.assign({}, {
        accessToken: action.payload.accessToken
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
function getWeatherDataReducer(state = initialState.weatherData, action){
  switch (action.type) {
    case WEATHER_DATA:
      return Object.assign({}, {
        data: action.payload.data
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      });
    default: return state;
  }
}

export default rootReducer;