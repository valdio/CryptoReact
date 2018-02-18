import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'
import CryptoList from './Cryptocurrency​List'
import Detail from './Detail'
import Settings from './Settings'
import ToolBar from '../components/Toolbar'

import {NativeRouter, Route, BackButton} from 'react-router-native'

class App extends Component {
    render() {
        return (
            <NativeRouter>
                <BackButton>
                    {this._renderRoutes()}
                </BackButton>
            </NativeRouter>
        )
    }

    _renderRoutes() {
        // return <Settings {...this.props}/>
        return <View style={styles.container}>
            <Route exact path="/" render={(props) => {
                return (
                    <View style={styles.content}>
                        <ToolBar title='CryptoReact' routeInfo={props}/>
                        <CryptoList {...this.props}/>
                    </View>
                )
            }}/>
            <Route path="/details/:id" render={(props) => {
                return (
                    <View style={styles.content}>
                        <ToolBar title={props.match.params.id} routeInfo={props}/>
                        <Detail {...this.props} currencyId={props.match.params.id}/>
                    </View>
                )
            }}/>
            <Route path="/settings" render={(props) => {
                return (
                    <View style={styles.content}>
                        <ToolBar title='Settings' routeInfo={props}/>
                        <Settings {...this.props}/>
                    </View>
                )
            }}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        flexDirection: 'column'
    }
})

//bind the redux actions to the app pros to we can dispatch redux actions thought props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

//map portions of the redux state to this component's props
function mapStateToProps(state) {
    return {
        //E.g.
        // test: state.test,
    }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
export default connect(mapStateToProps, mapDispatchToProps)(App)




