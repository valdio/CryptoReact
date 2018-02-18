import GLOBALS from '../lib/globals'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import {Link} from 'react-router-native'

export default class ListItem extends Component {
    render() {
        const {fiatCurrency, currencyItem} = this.props
        return (
            <Link
                underlayColor={GLOBALS.COLOR.HEADER_COLOR}
                to={`/details/${currencyItem.id}`} style={styles.container}>
                <View>
                    <View style={styles.section}>
                        <Text style={styles.text}>Symbol: {currencyItem.symbol}</Text>
                        <Text style={styles.text}>Rank: {currencyItem.rank}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text
                            style={styles.text}>Price: {fiatCurrency === GLOBALS.FIAT_CURRENCY.EUR ? `€ ${currencyItem.price_eur}`
                            : fiatCurrency === GLOBALS.FIAT_CURRENCY.CNY ? `¥ ${currencyItem.price_cny}`
                                : `$ ${currencyItem.price_usd}`
                        }</Text>
                        <Text style={styles.text}>Change (24h): {currencyItem.percent_change_24h}%</Text>
                    </View>
                </View>
            </Link>
        )
    }
}

ListItem.propTypes = {
    fiatCurrency: PropTypes.oneOf([GLOBALS.FIAT_CURRENCY.USD, GLOBALS.FIAT_CURRENCY.EUR, GLOBALS.FIAT_CURRENCY.CNY]),
    currencyItem: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: GLOBALS.COLOR.RED,
        margin: 8,
        padding: 6,
        elevation: 6,
        borderRadius: 6,
        shadowColor: GLOBALS.COLOR.BLACK,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    section: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 8,
    },
    text: {
        flex: 0.5,
        fontSize: 16,
        color: GLOBALS.COLOR.WHITE
    }
})
