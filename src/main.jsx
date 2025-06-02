import { render } from 'preact'
import './index.css'
import App from './App.jsx' // <--- AQUI ESTÁ A MUDANÇA! Removido as chaves { }

render(<App />, document.getElementById('root'))