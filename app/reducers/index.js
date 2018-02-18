import {combineReducers} from 'redux'
import * as settingsReducer from './settings'
import * as currencyReducer from './currency'

export default combineReducers(Object.assign(
    settingsReducer,
    currencyReducer
))