import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'; // 개발자 도구
import thunk from 'redux-thunk'

const composeEnhancer = composeWithDevTools || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

export default store;