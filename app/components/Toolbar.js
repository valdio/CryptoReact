import GLOBALS from '../lib/globals'
import React, {Component} from 'react'
import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import {Route, Link} from 'react-router-native'
import settings_icon from '../assets/images/ic_settings.png'
import back_icon from '../assets/images/ic_back.png'

export default class Toolbar extends Component {
    render() {
        const routePath = this.props.routeInfo.location.pathname
        const routerHistory = this.props.routeInfo.history
        return (
            <View style={styles.toolbarContainer}>
                <View style={styles.nav}>
                    {routePath !== '/' ?  //back button only visible when not in home route
                        <TouchableOpacity
                            style={styles.backContainer}
                            onPress={routerHistory.goBack}>
                            <Image
                                source={back_icon}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                        : <View style={{flex: 1}}/>
                    }

                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{this.formatTitle()}</Text>
                    </View>

                    {routePath !== '/settings' ? //render settings link only if not in settings route
                        <Link
                            to="/settings"
                            underlayColor='#f0f4f7'
                            style={styles.navItem}>
                            <Image
                                source={settings_icon}
                                style={styles.image}
                            />
                        </Link>
                        : <View style={{flex: 1}}/>
                    }
                </View>
            </View>
        )
    }

    formatTitle() {
        if (this.props.title)
            return this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)
        return 'CryptoReact'
    }
}

Toolbar.propTypes = {
    routeInfo: PropTypes.object.isRequired,
    title: PropTypes.string
}

const styles = StyleSheet.create({
    toolbarContainer: {
        backgroundColor: GLOBALS.COLOR.HEADER_COLOR,
        justifyContent: 'center'
    },
    backContainer: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 18,
        color: GLOBALS.COLOR.WHITE
    },
    image: {
        width: 24,
        height: 24,
        margin: 16
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})
