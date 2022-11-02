import 'bootstrap/dist/css/bootstrap.css'
// import "../styles/mt.css"
//import '../styles/globals.css'
import "../styles/style.css"
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
