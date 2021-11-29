import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'; // 개발자 도구

const store = createStore(rootReducer,composeWithDevTools());// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

export default store;