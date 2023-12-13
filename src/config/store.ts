/**
 * @prettier
 */
import { applyMiddleware, compose, createStore, Store } from 'redux';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import { Persistor, persistStore } from 'redux-persist';
// import { createLogger } from 'redux-logger';
import 'regenerator-runtime/runtime';
import reducers from 'src/reducers';
import { StateVm } from 'src/types/StateVm';

// import DevTools from './devtools';

// const isDebuggingInChrome = process.env.NODE_ENV === 'development' && !!window.navigator.userAgent; // eslint-disable-line no-undef

const middlewares =
    process.env.NODE_ENV === 'development'
        ? [
              applyMiddleware(
                  immutableStateInvariantMiddleware(),
                  // createLogger({
                  //     predicate: (getState, action) => {
                  //         return isDebuggingInChrome && !action.type.startsWith('@@redux-form/');
                  //     },
                  //     collapsed: true,
                  //     duration: true,
                  // })
              ),
              // DevTools.instrument()
          ]
        : [];

function configureStore(initialState = {}): Store<StateVm> {
    return createStore(reducers, initialState, compose(...middlewares));
}

function configurePersistor(store: Store<StateVm>): Persistor {
    const persistor = persistStore(store);
    return persistor;
}
export const store: Store<StateVm> = configureStore();
export const persistor = configurePersistor(store);
