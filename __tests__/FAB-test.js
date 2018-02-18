import React from 'react'
import FAB from '../app/components/FAB'
import renderer from 'react-test-renderer'

test('<FAB/> Snapshot Test', () => {
    const tree = renderer.create(
        <FAB
            refreshTrigger={()=>{}}
        />).toJSON()
    expect(tree).toMatchSnapshot()
})








