import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { StrictMode } from 'react'
/* const { worker } = require('./_mockData/browser'); 
worker.start({ onUnhandledRequest: 'bypass' });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) */

 
 const callFunction = async () => {

  const { worker } = await import('./_mockData/browser'); 
  worker.start();
 }

if (process.env.NODE_ENV === 'development') {
   callFunction()

}
const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
/* import('./_mockData/browser')
.then(({ worker }) => {
  // worker.start()
})
.then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}) */

/* import("./mocks/browser").then(({ worker }) => {
  worker.start({ onUnhandledRequest: "bypass" });

}) */