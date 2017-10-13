/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Header from './header'
import Link from 'next/link'

describe('Component - <Header />', () => {
  let header = null
  let menu = null

  beforeEach(() => {
    header = shallow(<Header />)
    menu = header.find('.navbar > .navbar-menu')
  })

  test('should have a navbar brand', () => {
    expect(header.find('.navbar > .navbar-brand').length).toBe(1)
  })

  test('should have a navbar brand home link', () => {
    const link = header.find('.navbar > .navbar-brand').find(Link)
    expect(link.prop('href')).toEqual('/')
    expect(link.dive().text()).toEqual('globo.com Open source')
  })

  test('should have a menu', () => {
    expect(menu.length).toBe(1)
  })

  test('should have menu links', () => {
    expect(menu.find(Link).length).toBe(5)
  })

  test('should have a projects link', () => {
    const link = menu.find(Link).at(0)
    expect(link.prop('href')).toEqual('/projects')
    expect(link.dive().text()).toEqual('Projetos')
  })

  test('should have a team link', () => {
    const link = menu.find(Link).at(1)
    expect(link.prop('href')).toEqual('/team')
    expect(link.dive().text()).toEqual('Time')
  })

  test('should have an opportunities link', () => {
    const link = menu.find(Link).at(2)
    expect(link.prop('href')).toEqual('/opportunities')
    expect(link.dive().text()).toEqual('Oportunidades')
  })

  test('should have an events link', () => {
    const link = menu.find(Link).at(3)
    expect(link.prop('href')).toEqual('/events')
    expect(link.dive().text()).toEqual('Eventos')
  })

  test('should have a hacktober link', () => {
    const link = menu.find(Link).at(4)
    expect(link.prop('href')).toEqual('/hacktober')
    expect(link.dive().text()).toEqual('Hacktober')
  })
})
