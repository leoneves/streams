import React from 'react'
import { shallow } from 'enzyme'

import App from '../components/App'

describe(App, () => {
  context('with App reders Corret', () => { 
    it('Should match with snapshot', () => {
      const wrapper = shallow(<App />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
