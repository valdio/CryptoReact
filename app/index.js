import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import App from './containers/App'
import SplashScreen from './containers/SplashScreen'
import storeConfig from './lib/reduxStore'

const {persistor, store} = storeConfig()

const onBeforeLift = () => {
    // take some action before the gate lifts
}

export default () => (
    <Provider store={store}>
        <PersistGate
            loading={<SplashScreen/>}
            onBeforeLift={onBeforeLift}
            persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
)