import React from 'react'
import ListItem from '../app/components/ListItem'

import renderer from 'react-test-renderer'

const usdCryptocurrency = {
    'id': 'bitcoin',
    'name': 'Bitcoin',
    'symbol': 'BTC',
    'rank': '1',
    'price_usd': '10838.8',
    'price_btc': '1.0',
    '24h_volume_usd': '9145340000.0',
    'market_cap_usd': '182874531426',
    'available_supply': '16872212.0',
    'total_supply': '16872212.0',
    'max_supply': '21000000.0',
    'percent_change_1h': '0.35',
    'percent_change_24h': '0.71',
    'percent_change_7d': '30.99',
    'last_updated': '1518964166'
}

/**
 * Snapshot Test with JEST
 */

test('<ListItem/> Snapshot Test', () => {
    const tree = renderer.create(
        <ListItem
            fiatCurrency='USD'
            currencyItem={usdCryptocurrency}
        />).toJSON()
    expect(tree).toMatchSnapshot()
})




