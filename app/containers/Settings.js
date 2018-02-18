import GLOBALS from '../lib/globals'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    StyleSheet, Switch,
    Text,
    View,
    Dimensions
} from 'react-native'
import PropTypes from 'prop-types'


class Settings extends Component {
    constructor(props) {
        super(props)

        //get the fiat currency if previously exists in the persistent state, or NULL if it doesn't exist
        let fiatCurrency = (this.props.settings && this.props.settings.fiatCurrency) ?
            this.props.settings.fiatCurrency : null

        if (fiatCurrency) {
            //update local state with the fiat currency
            let isUSD = isEUR = isCNY = false
            if (fiatCurrency === GLOBALS.FIAT_CURRENCY.USD)
                isUSD = true
            if (fiatCurrency === GLOBALS.FIAT_CURRENCY.EUR)
                isEUR = true
            if (fiatCurrency === GLOBALS.FIAT_CURRENCY.CNY)
                isCNY = true
            if (isUSD || isEUR || isCNY)
                this.state = {
                    usdSwitch: isUSD,
                    eurSwitch: isEUR,
                    cnySwitch: isCNY
                }
            else {
                //if the saved currency is not one of the available currencies
                this.state = {
                    usdSwitch: true,
                    eurSwitch: false,
                    cnySwitch: false,
                }
            }
        } else {
            //the default fiat currency is USD
            this.state = {
                usdSwitch: true,
                eurSwitch: false,
                cnySwitch: false,
            }

        }
        this.toggleUsdSwitch = this.toggleUsdSwitch.bind(this)
        this.toggleEurSwitch = this.toggleEurSwitch.bind(this)
        this.toggleCnySwitch = this.toggleCnySwitch.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Select fiat currency</Text>
                <View style={styles.content}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.titleText}>USD</Text>
                        <Switch
                            onValueChange={() => {
                                //update the redux state and change the local state to match the selected fiat currency
                                this.toggleUsdSwitch()
                            }}
                            value={this.state.usdSwitch}
                        />
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.titleText}>EUR</Text>
                        <Switch
                            onValueChange={() => {
                                this.toggleEurSwitch()
                            }}
                            value={this.state.eurSwitch}
                        />
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.titleText}>CNY</Text>
                        <Switch
                            onValueChange={() => {
                                this.toggleCnySwitch()
                            }}
                            value={this.state.cnySwitch}
                        />
                    </View>
                </View>
            </View>
        )
    }


    //only toggle switches if they are false
    toggleUsdSwitch() {
        !this.state.usdSwitch ?
            this.setState({
                usdSwitch: !this.state.usdSwitch,
                eurSwitch: false,
                cnySwitch: false
            })
            : {}

        this.props.setFiatCurrency(GLOBALS.FIAT_CURRENCY.USD)

    }

    toggleEurSwitch() {
        !this.state.eurSwitch ?
            this.setState({
                usdSwitch: false,
                eurSwitch: !this.state.eurSwitch,
                cnySwitch: false
            })
            : {}
        this.props.setFiatCurrency(GLOBALS.FIAT_CURRENCY.EUR)
    }

    toggleCnySwitch() {
        !this.state.cnySwitch ?
            this.setState({
                usdSwitch: false,
                eurSwitch: false,
                cnySwitch: !this.state.cnySwitch
            })
            : {}

        this.props.setFiatCurrency(GLOBALS.FIAT_CURRENCY.CNY)
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settings,
    }
}

export default connect(mapStateToProps)(Settings)

Settings.propTypes = {
    settings: PropTypes.object,
    setFiatCurrency: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: GLOBALS.COLOR.WHITE,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    itemContainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },

    titleText: {
        fontSize: 24,
        color: GLOBALS.COLOR.DARK_TEXT_COLOR,
        marginLeft: 30,
        marginTop: 20,
    },
    textItem: {
        fontSize: 18,
        color: GLOBALS.COLOR.FADED_TEXT_COLOR
    },

})
