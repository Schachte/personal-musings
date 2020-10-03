import '../styles/themes/theme.css'
import '../App.css'

import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

function RootWrapper({children}) {
  return (
    <div className="main-container">
      {children}
    </div>
  )
}

export default ({ Component, pageProps }) => {
    return (
        <div>
            <Navigation/>
            <RootWrapper>
                <Component {...pageProps} />
                <Footer/>
            </RootWrapper>
        </div>
    )
}