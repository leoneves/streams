import React from 'react'
import { shallow } from 'enzyme'

import StreamList from '../components/streams/StreamList'

describe(StreamList, () => {
  context('with empty streams', () => {
    it('should return empty stream list',() => {
      debugger
      const wrapper = shallow(<StreamList streams={[]} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
