import Navigation from '../components/Navigation/Navigation'
import '../styles/themes/theme.css'
import '../App.css'

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
            </RootWrapper>
        </div>
    )
}