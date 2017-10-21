import Layout from '../components/layout'
import Link from 'next/link'

export default () =>
  <Layout>
    <section className='hero is-large'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>
            Addicted Developers
          </h1>
          <h2 className='subtitle'>
            Unidos pelo código.
          </h2>
          <p>
            <Link>
              <a className='hero-link'>Let's code!</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
