import * as types from './types'
import Api from '../lib/api'

/**
 * Method to make an API call to get the list of 100 cryptocurrencies.
 * The currencies are converted based on the fiat currency provided to the method.
 *
 * @param fiatCurrency Conversion fiat currency
 * @returns {function(*, *)} Dispatches a redux action to manage the list of currencies
 */
export function getCryptoCurrenciesList(fiatCurrency) {
    return (dispatch, getState) => {
        const params = [
            `convert=${encodeURIComponent(fiatCurrency)}`,
        ].join('&')
        return Api.get(`/v1/ticker/?${params}`).then(response => {
            dispatch(cryptoCurrenciesListReceived(response))
        }).catch((exception) => {
            //handle error in a graceful way
            alert(exception) //not this way
            console.log(exception)
        })
    }
}

function cryptoCurrenciesListReceived(cryptoCurrenciesList) {
    return {
        type: types.CRYPTOCURRENCIES_LIST,
        cryptoCurrenciesList,
    }
}

/**
 * Method to refresh the details info of a specific cryptocurrency
 * @param currencyId Currency ID
 * @param fiatCurrency Selected fiat currency USD || EUR || CNY
 * @returns {function(*, *)} Dispatches a redux action to refresh the info of the cryptocurrency item
 */
export function refreshCurrencyItem(currencyId, fiatCurrency) {
    return (dispatch, getState) => {
        const params = [
            `convert=${encodeURIComponent(fiatCurrency)}`,
        ].join('&')
        return Api.get(`/v1/ticker/${currencyId}/?${params}`).then(response => {
            if (response && response[0])
                dispatch(cryptoCurrenciesItemReceived(response[0]))
        }).catch((exception) => {
            //handle error in a graceful way
            alert(exception) //not this way
            console.log(exception)
        })
    }
}

function cryptoCurrenciesItemReceived(currency) {
    return {
        type: types.REFRESH_CURRENCY_ITEM,
        currency,
    }
}






