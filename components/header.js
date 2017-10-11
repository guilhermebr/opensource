import Link from 'next/link';

export default () =>
  <header>
    <Link href="/index">
      <a>globo.com Open source</a>
    </Link>
    <Link href="/projects">
      <a>Projetos</a>
    </Link>
    <Link href="/team">
      <a>Time</a>
    </Link>
    <Link href="/opportunities">
      <a>Oportunidades</a>
    </Link>
    <Link href="/events">
      <a>Eventos</a>
    </Link>
    <Link href="/hacktober">
      <a>Hacktober</a>
    </Link>
  </header>
