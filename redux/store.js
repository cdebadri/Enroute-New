import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import watcher from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
	applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcher);

export default store;