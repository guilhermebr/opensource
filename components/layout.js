import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import stylesheet from '../styles/index.scss'

const Aux = props => props.children

const Layout = (props) =>
  <Aux>
    <Head>
      <title>{ props.pageTitle }</title>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      <meta property='og:title' content={props.pageTitle} />
      <meta property='og:type' content='website' />
      <meta property='og:description' content={props.pageDescription} />
      <meta property='og:url' content='https://opensource.globo.com' />
      <meta property='og:image' content='https://opensource.globo.com/assets/img/fb.png' />
      <meta property='og:site_name' content={props.pageTitle} />
      <meta property='og:locale' content='pt_BR' />
      <meta property='fb:app_id' content='496534050370989' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={props.pageDescription} />
      <meta name='author' content='Globo.com Developers Team' />
      <link rel='shortcut icon' href='/static/img/favicon.png' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </Aux>

Layout.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  children: PropTypes.element
}

Layout.defaultProps = {
  pageTitle: 'Open Source - Globo.com',
  pageDescription: 'A globo.com ama a comunidade open source! Conheça e contribua para os nossos projetos.'
}

export default Layout
