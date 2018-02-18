import GLOBALS from '../lib/globals'
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ListItem from '../components/ListItem'
import FAB from '../components/FAB'

class CryptocurrencyList extends Component {
    constructor(props) {
        super(props)

        //update the list every time this component is rendered
        let fiatCurrency = this.getFiatCurrency()
        this.props.getCryptoCurrenciesList(fiatCurrency)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.cryptoCurrencyList}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) =>
                        // the ListItem is wrapped in a Link component
                        // to route back to the Details component and display the currency details
                        <ListItem
                            fiatCurrency={this.getFiatCurrency()}
                            currencyItem={item}/>
                    }/>
                <FAB refreshTrigger={() => this.refreshTrigger()}/>
            </View>
        )
    }

    refreshTrigger() {
        let fiatCurrency = this.getFiatCurrency()
        this.props.getCryptoCurrenciesList(fiatCurrency)
    }

    getFiatCurrency() {
        return (this.props.settings && this.props.settings.fiatCurrency) ?
            this.props.settings.fiatCurrency : GLOBALS.FIAT_CURRENCY.USD //USD default
    }
}

function mapStateToProps(state) {
    return {
        cryptoCurrencyList: state.currency.list,
        settings: state.settings,
    }
}

CryptocurrencyList.propTypes = {
    cryptoCurrencyList: PropTypes.array,
    settings: PropTypes.object,
    getCryptoCurrenciesList: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(CryptocurrencyList)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: GLOBALS.COLOR.WHITE
    },
})
