import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const currency = createReducer({}, {
    [types.CRYPTOCURRENCIES_LIST](state, action) {
        return {
            ...state,
            list: action.cryptoCurrenciesList
        }

        // let newState = []
        // action.cryptoCurrenciesList.forEach((item) => {
        //     // console.log('=====================================')
        //     // console.log('=====================================')
        //     // console.log('=====================================')
        //     // console.log(item)
        //     // console.log('=====================================')
        //     // console.log('=====================================')
        //     // console.log('=====================================')
        //     newState[item.id] = item
        // })
        // return {
        //     ...state,
        //     list: newState
        // }

    },

    [types.REFRESH_CURRENCY_ITEM](state, action) {
        console.log('=====================================')
        console.log(action)

        console.log('=====================================')
        console.log(state.list.length)
        console.log('=====================================')
        console.log('=====================================')

        //
        // let itemIndex = -1
        // for (let i = 0; i < state.list.length)

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
