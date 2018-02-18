import * as types from './types'

/**
 * Redux action to update the preferred fiat currency
 * @param fiatCurrency USD || EUR || CNY
 * @returns {{type, fiatCurrency: *}}
 */
export function setFiatCurrency(fiatCurrency) {
    return {
        type: types.SET_FIAT_CURRENCY,
        fiatCurrency
    }
}