import Head from 'next/head';
import stylesheet from '../styles/index.scss';

export default (props) =>
  <Head>
    <title>{ props.title }</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta property="og:title" content={ props.title } />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={ props.description } />
    <meta property="og:url" content="https://opensource.globo.com" />
    <meta property="og:image" content="https://opensource.globo.com/assets/img/fb.png" />
    <meta property="og:site_name" content={ props.title } />
    <meta property="og:locale" content="pt_BR" />
    <meta property="fb:app_id" content="496534050370989" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={ props.description } />
    <meta name="author" content="Globo.com Developers Team" />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  </Head>
