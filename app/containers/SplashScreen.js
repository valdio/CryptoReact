import GLOBALS from '../lib/globals'
import React, {Component} from 'react'
import {
    Image,
    StyleSheet,
    View
} from 'react-native'
import bitcoinImage from '../assets/images/bitcoin.png'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={bitcoinImage}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBALS.COLOR.WHITE,
    },
    image: {
        width: 150,
        height: 150
    }
})
