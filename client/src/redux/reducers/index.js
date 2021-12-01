import { combineReducers } from 'redux';
import { 
    IS_LOGIN, 
    IS_LOADING,
    IS_SHOW_LOGIN_MODAL,
    IS_SHOW_SIGNUP_MODAL,
    ACCESS_TOKEN,
    
} from '../actions/actions';
import { initialState } from './initialState';


// * rootReducer : 여러 리듀서들을 하나로 합친다. rootReducer는 store에 전달된다.
const rootReducer = combineReducers({
    isLoginReducer,
    isLoadingReducer,
    isShowModalReducer,
    // accessTokenReducer,
})

function isLoginReducer(state = initialState.isLogin, action) {
    switch (action.type) {
        case IS_LOGIN :
            return Object.assign({}, state, action.payload);
        case ACCESS_TOKEN :
            return Object.assign({}, state, action.payload);
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
        default: return state;
      }
}

// function accessTokenReducer(state = initialState.accessToken, action){
//   switch (action.type) {
//     case ACCESS_TOKEN:
//       return Object.assign({}, {
//         accessToken: action.payload.accessToken
//       });
//     default: return state;
//   }
// }

export default rootReducer;