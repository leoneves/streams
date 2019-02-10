import React from 'react'
import { shallow } from 'enzyme'

import { StreamList } from '../components/streams/StreamList'

describe(StreamList, () => {
  const mockFetchStreams = jest.fn()
  
  context('with empty streams', () => {
    it('should return empty stream list',() => {
      const wrapper = shallow(<StreamList streams={[]} fetchStreams={mockFetchStreams} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
