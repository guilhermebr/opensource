import stylesheet from '../styles/index.scss';
import Head from 'next/head';

export default () => 
	<div>
		<Head>
			<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
		</Head>
		<div>Bem-vindos!</div>
	</div>
