import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage,
}

// import extra middleware for redux store
import storeEnhancer from './storeMiddleware'

// Empty initial state. Add data if need be
let initialState = {}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, initialState, storeEnhancer)
    let persistor = persistStore(store)
    return {store, persistor}
}