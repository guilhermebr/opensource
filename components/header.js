import Link from 'next/link'

export default () =>
  <header>
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link href='/index'>
          <a className='navbar-item'>globo.com Open source</a>
        </Link>
        <div className='navbar-burger burger'>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <Link href='/projects'>
            <a className='navbar-item'>Projetos</a>
          </Link>
          <Link href='/team'>
            <a className='navbar-item'>Time</a>
          </Link>
          <Link href='/opportunities'>
            <a className='navbar-item'>Oportunidades</a>
          </Link>
          <Link href='/events'>
            <a className='navbar-item'>Eventos</a>
          </Link>
          <Link href='/hacktober'>
            <a className='navbar-item'>Hacktober</a>
          </Link>
        </div>
      </div>
    </nav>
  </header>
