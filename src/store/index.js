import { createStore, compose, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['likes'],
	blacklist: ['navigation']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
	persistedReducer,
	{},
	compose(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export default store;
