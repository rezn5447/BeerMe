import { createStore, compose, applyMiddleware } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

// import storage from 'redux-persist/lib/storage';
//
// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	whitelist: ['likes'],
// 	blacklist: ['navigation']
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
	reducers,
	{},
	compose(applyMiddleware(thunk, logger))
);

// const persistor = persistStore(store);

export default store;
