import React from 'react'//inportação da biblioteca react
import ReactDOM from 'react-dom/client' //redenrizar conteúdo
import App from './App.jsx' // conteudo principal (aplicação)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
