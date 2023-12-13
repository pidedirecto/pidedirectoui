import 'core-js/proposals/array-flat-map';
import * as React from 'react';
import ReactDOM from 'react-dom';
import 'src/index.css';
import { AppRoot } from 'src/AppRoot';
import { APP_VERSION } from "src/config/appVersion";
import reportWebVitals from 'src/reportWebVitals';
import * as serviceWorkerRegistration from 'src/serviceWorkerRegistration';

ReactDOM.render(<AppRoot />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
console.log('serviceWorkerRegistration.register');
serviceWorkerRegistration.register({
    // configure skip waiting and reload on update, see https://github.com/facebook/create-react-app/issues/5316#issuecomment-591075209
    onUpdate: async registration => {
        console.log('onUpdate');
        // We want to run this code only if we detect a new service worker is
        // waiting to be activated.
        // Details about it: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
        if (registration && registration.waiting) {
            console.log('registration && registration.waiting');
            await registration.unregister();
            // Makes Workbox call skipWaiting()
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            // Once the service worker is unregistered, we can reload the page to let
            // the browser download a fresh copy of our app (invalidating the cache)
            window.location.reload();
            console.log(`Updated app to version ${APP_VERSION}`);
        } else {
            console.log('else registration && registration.waiting');
        }
    },
    onSuccess: () => {
        console.log('onSuccess');

    }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
