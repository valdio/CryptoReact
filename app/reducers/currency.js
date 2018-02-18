import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const currency = createReducer({}, {
    [types.CRYPTOCURRENCIES_LIST](state, action) {
        return {
            ...state,
            list: action.cryptoCurrenciesList
        }
    },

    [types.REFRESH_CURRENCY_ITEM](state, action) {
        return {
            ...state,
            list: state.list.map(item => {
                if (item.id === action.currency.id)
                    return action.currency
                return item
            })
        }
    }
})
