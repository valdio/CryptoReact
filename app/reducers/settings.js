import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const settings = createReducer({}, {
    [types.SET_FIAT_CURRENCY](state, action) {
        return {
            ...state,
            fiatCurrency: action.fiatCurrency
        }
    },
})