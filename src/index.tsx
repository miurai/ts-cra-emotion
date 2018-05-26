import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './index.css'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Routes />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
