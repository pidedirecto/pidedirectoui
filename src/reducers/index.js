import { createFilter } from 'redux-persist-transform-filter';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { appReducer } from 'src/reducers/appReducer';

const config = {
    key: 'primary',
    storage: storage,
    whitelist: ['app'],
    transforms: [
        createFilter('app', ['developerMode']),
    ],
};

export default persistCombineReducers(config, {
    app: appReducer.reducer,
});
