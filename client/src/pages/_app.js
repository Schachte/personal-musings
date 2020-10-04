import '../styles/themes/theme.css'
import '../App.css'
import {useEffect} from 'react'

import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

function RootWrapper({children}) {
    return <div className="main-container">{children}</div>
}

const App = ({Component, pageProps}) => {
    useEffect(() => {
        let app = document.getElementsByTagName('BODY')[0]
        app.setAttribute('data-theme', localStorage.schachteTheme || 'light')
        let bodySelector = document.querySelector('body').classList
        bodySelector.remove('preload')
    })

    return (
        <div>
            <Navigation />
            <RootWrapper>
                <Component {...pageProps} />
                <Footer />
            </RootWrapper>
        </div>
    )
}

App.getInitialProps = async (appContext) => {
    let pageProps = {}
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx)
    }
    return {pageProps}
}

export default App
