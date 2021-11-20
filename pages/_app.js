import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/allFontawesome.min.css'
import '../styles/circle.css'
import '../styles/okayNav.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')

  }, [])
  return <Component {...pageProps} />
}

export default MyApp
