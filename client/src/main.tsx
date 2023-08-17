import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider as ReduxProvider} from "react-redux";
import store from './store'
import {BrowserRouter} from 'react-router-dom'

const root = createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
)
