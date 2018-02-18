import React from 'react'
import CryptocurrencyList from '../app/containers/Cryptocurrency​List'

import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

const testProps = {
    cryptoCurrencyList: [],
    settings: {},
    getCryptoCurrenciesList: () => {
    }
}
describe('Test component CryptocurrencyList', () => {
    it('renders correctly', () => {
        configure(<CryptocurrencyList {...testProps}/>)
    })
})
