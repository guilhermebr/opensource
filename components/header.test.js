/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Header from './header'

describe('Component - <Header />', () => {
  it('Should render a navbar brand', () => {
    const header = shallow(<Header />)
    expect(header.find('.navbar > .navbar-brand').length).toBe(1)
  })
})
