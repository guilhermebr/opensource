/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Head from 'next/head'
import Layout from './layout'

describe('Component - <Layout />', () => {
  const defaultTitle = 'Open Source - Globo.com'
  const defaultDescription = 'A globo.com ama a comunida open source! Conheça e contribua para os nossos projetos.'

  test('should have a Head commponent', () => {
    const layout = shallow(<Layout />)
    expect(layout.find(Head).length).toBe(1)
  })

  test('should have a global style', () => {
    const layout = shallow(<Layout />)
    expect(layout.find('style').length).toBe(1)
  })

  test('should render children', () => {
    const layout = shallow((
      <Layout>
        <p className='my-content'>Hello page</p>
      </Layout>
    ))
    expect(layout.find('.my-content').length).toBe(1)
  })

  describe('Meta tags default', () => {
    let layout

    beforeEach(() => {
      layout = shallow(<Layout />)
    })

    test('should render a default title', () => {
      expect(layout.find('title').text()).toBe(defaultTitle)
    })

    test('should render a meta httpEquiv', () => {
      expect(layout.find('meta[httpEquiv="X-UA-Compatible"]').prop('content')).toBe('IE=edge,chrome=1')
    })

    test('should render a meta og:title', () => {
      expect(layout.find('meta[property="og:title"]').prop('content')).toBe(defaultTitle)
    })

    test('should render a meta og:type', () => {
      expect(layout.find('meta[property="og:type"]').prop('content')).toBe('website')
    })

    test('should render a meta og:description', () => {
      expect(layout.find('meta[property="og:description"]').prop('content')).toBe(defaultDescription)
    })

    test('should render a meta og:url', () => {
      expect(layout.find('meta[property="og:url"]').prop('content')).toBe('https://opensource.globo.com')
    })

    test('should render a meta og:image', () => {
      expect(layout.find('meta[property="og:image"]').prop('content')).toBe('/static/img/fb-logo.png')
    })

    test('should render a meta og:site_name', () => {
      expect(layout.find('meta[property="og:site_name"]').prop('content')).toBe(defaultTitle)
    })

    test('should render a meta og:locale', () => {
      expect(layout.find('meta[property="og:locale"]').prop('content')).toBe('pt_BR')
    })

    test('should render a meta fb:app_id', () => {
      expect(layout.find('meta[property="fb:app_id"]').prop('content')).toBe('496534050370989')
    })

    test('should render a meta viewport', () => {
      expect(layout.find('meta[name="viewport"]').prop('content')).toBe('width=device-width, initial-scale=1.0')
    })

    test('should render a meta description', () => {
      expect(layout.find('meta[name="description"]').prop('content')).toBe(defaultDescription)
    })

    test('should render a meta author', () => {
      expect(layout.find('meta[name="author"]').prop('content')).toBe('Globo.com Developers Team')
    })

    test('should render a favicon', () => {
      expect(layout.find('link[rel="shortcut icon"]').prop('href')).toBe('/static/img/favicon.png')
    })
  })

  describe('Meta tags with different pageTitle', () => {
    let layout
    let someTitle = 'Some page'

    beforeEach(() => {
      layout = shallow(<Layout pageTitle={someTitle} />)
    })

    test('should render the title', () => {
      expect(layout.find('title').text()).toBe(someTitle)
    })

    test('should render a meta og:title', () => {
      expect(layout.find('meta[property="og:title"]').prop('content')).toBe(someTitle)
    })

    test('should render a meta og:site_name', () => {
      expect(layout.find('meta[property="og:site_name"]').prop('content')).toBe(someTitle)
    })
  })

  describe('Meta tags with different pageDescription', () => {
    let layout
    let someDescription = 'Some description'

    beforeEach(() => {
      layout = shallow(<Layout pageDescription={someDescription} />)
    })

    test('should render a meta og:description', () => {
      expect(layout.find('meta[property="og:description"]').prop('content')).toBe(someDescription)
    })

    test('should render a meta description', () => {
      expect(layout.find('meta[name="description"]').prop('content')).toBe(someDescription)
    })
  })
})
