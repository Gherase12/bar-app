import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/app/store'
import { saveState } from '../redux/localStorage';
import throttle from 'lodash.throttle';

store.subscribe(
  throttle(() => {
    saveState({
      cart: store.getState().cart.products
    });
  }, 1000));

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp
