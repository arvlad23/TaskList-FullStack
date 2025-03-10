import { AppProps } from 'next/app'
import '../style/global.scss'
const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default App
