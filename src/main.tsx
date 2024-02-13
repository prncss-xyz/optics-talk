import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import "@code-hike/mdx/dist/index.css"
import 'unfonts.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
