import GLOBALS from '../lib/globals'
import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.refreshCurrency = this.refreshCurrency.bind(this)
        this.getCryptocurrencyPrice = this.getCryptocurrencyPrice.bind(this)
    }

    render() {
        const {currency} = this.props
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>

                    <View style={styles.section}>
                        <Text style={styles.text}>Name: {currency.name}</Text>
                        <Text style={styles.text}>Symbol: {currency.symbol}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text
                            style={styles.text}>Price: {this.getCryptocurrencyPrice(currency)}</Text>
                        <Text style={styles.text}>Rank: {currency.rank}</Text>
                    </View>

                    <View style={styles.section}>


                        <Text style={styles.text}>Price​ ​in​ ​bitcoin: {currency.price_btc} BTC</Text>
                    </View>

                    <View style={[styles.spacing, {marginRight: 200}]}>
                        <Text style={styles.sectionText}>Cryptocurrency change</Text>
                        <View style={styles.section}>
                            <Text style={styles.text}>7 Days</Text>
                            <Text style={styles.text}>{currency.percent_change_7d}%</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.text}>24 Hours</Text>
                            <Text style={styles.text}>{currency.percent_change_24h}%</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.text}>Last hour</Text>
                            <Text style={styles.text}>{currency.percent_change_1h}%</Text>
                        </View>
                    </View>

                    <View style={styles.spacing}/>
                    <View style={styles.section}>
                        <Text style={styles.text}>24h​
                            ​volume: {this.props.settings.fiatCurrency === GLOBALS.FIAT_CURRENCY.EUR ? ` € ${currency['24h_volume_eur']}`
                                : this.props.settings.fiatCurrency === GLOBALS.FIAT_CURRENCY.CNY ? ` ¥ ${currency['24h_volume_cny']}`
                                    : ` $ ${currency['24h_volume_usd']}`}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.text}>Market
                            cap: {this.props.settings.fiatCurrency === GLOBALS.FIAT_CURRENCY.EUR ? ` € ${currency.market_cap_eur}`
                                : this.props.settings.fiatCurrency === GLOBALS.FIAT_CURRENCY.CNY ? ` ¥ ${currency.market_cap_cny}`
                                    : `$ ${currency.market_cap_usd}`}</Text>
                    </View>


                    <View style={styles.spacing}>
                        <Text style={styles.sectionText}>Currency supply</Text>
                        <View style={styles.section}>
                            <Text style={styles.text}>Total supply</Text>
                            <Text style={styles.text}>{currency.total_supply} {currency.symbol}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.text}>Available supply</Text>
                            <Text style={styles.text}>{currency.available_supply} {currency.symbol}</Text>
                        </View>
                    </View>
                </View>

                <TouchableHighlight
                    underlayColor={GLOBALS.COLOR.HEADER_COLOR}
                    onPress={this.refreshCurrency}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Refresh Currency</Text>
                </TouchableHighlight>
            </View>
        )
    }

    refreshCurrency() {
        const {refreshCurrencyItem, currencyId, settings} = this.props
        refreshCurrencyItem(currencyId, settings.fiatCurrency)
    }

    getCryptocurrencyPrice(currency) {
        let price = this.props.settings.fiatCurrency === GLOBALS.FIAT_CURRENCY.EUR ? `€ ${currency.price_eur}`
            : this.props.settings.fiatCurrency === GLOBALS.FIAT_CURRENCY.CNY ? `¥ ${currency.price_cny}`
                : `$ ${currency.price_usd}`
        let hasNumber = /\d/
        if (!hasNumber.test(price))//user probably changed preferred flat currency
            this.refreshCurrency()
        return price
    }
}

//getter to retrieve only the item specified by the id
const getCurrencyById = (state, id) =>
    state.currency.list.filter(
        item => item.id === id
    )

function mapStateToProps(state, ownProps) {
    return {
        settings: state.settings,
        currency: getCurrencyById(state, ownProps.currencyId)[0]
    }
}

export default connect(mapStateToProps)(Detail)

Detail.propTypes = {
    settings: PropTypes.object.isRequired,
    currencyId: PropTypes.string.isRequired,
    currency: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: GLOBALS.COLOR.WHITE,
        paddingRight: 20,
        paddingLeft: 20
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 8,
    },
    text: {
        fontSize: 16,
        color: GLOBALS.COLOR.DARK_TEXT_COLOR
    },
    sectionText: {
        fontSize: 18,
        color: GLOBALS.COLOR.BLACK,
        fontWeight: 'bold'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBALS.COLOR.RED,
        marginBottom: 20,
        borderRadius: 6,
        elevation: 4,
        shadowColor: GLOBALS.COLOR.BLACK,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    buttonText: {
        margin: 10,
        fontSize: 18,
        color: GLOBALS.COLOR.WHITE,
        alignSelf: 'center',
    },
    spacing: {
        marginTop: 30,
    }
})
