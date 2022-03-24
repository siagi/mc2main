import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Router from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () => console.log('start')); 
  Router.events.on('routeChangeComplete', () =>console.log('complete')); 
  return(
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  ) 
}

export default MyApp
