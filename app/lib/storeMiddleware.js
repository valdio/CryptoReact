import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, compose} from 'redux'

const middlewares = []
// to keep trace of the redux state change
// this middleware is only used in development
if (process.env.NODE_ENV === `development`) {
    const {logger} = require(`redux-logger`)
    middlewares.push(logger)
}

/**
 * Add other middleware if need be, to use with re redux store
 */
middlewares.push(thunkMiddleware);

export default storeEnhancer = compose(
    applyMiddleware(
        ...middlewares
    ),
)