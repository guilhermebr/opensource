import Link from 'next/link'

export default () =>
  <footer className='footer'>
    <div className='container'>
      <nav className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <Link href='/'>
              <a className='has-text-weight-bold'>Open source</a>
            </Link>
          </div>
          <div className='level-item'>
            <Link href='https://github.com/globocom/opensource'>
              <a target='_blank'>Github</a>
            </Link>
          </div>
          <div className='level-item'>
            <Link href='https://talentos.globo.com/'>
              <a target='_blank'>Talentos</a>
            </Link>
          </div>
        </div>
        <div className='level-right'>
          <div className='level-item'>
            Globo.com 2017
          </div>
        </div>
      </nav>
    </div>
  </footer>
