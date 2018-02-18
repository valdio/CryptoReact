import GLOBALS from '../lib/globals'
import React, {Component} from 'react'
import {
    Image,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'
import PropTypes from 'prop-types'
import refresh from'../assets/images/ic_refresh.png'

export default class FAB extends Component {
    render() {
        const {refreshTrigger} = this.props
        return (
            <TouchableHighlight
                underlayColor={GLOBALS.COLOR.RED}
                style={styles.container}
                onPress={refreshTrigger}
            >
                <Image
                    source={refresh}
                    style={styles.image}
                />
            </TouchableHighlight>
        )
    }
}

FAB.propTypes = {
    refreshTrigger: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: GLOBALS.COLOR.HEADER_COLOR,
        margin: 16,
        padding: 6,
        elevation: 6,
        shadowColor: GLOBALS.COLOR.BLACK,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        zIndex: 5,
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    image: {
        alignSelf: 'center',
        width: 24,
        height: 24,
    },
    button: {}

})
