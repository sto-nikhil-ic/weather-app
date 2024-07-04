import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Weather from './components/Weather.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Weather from './components/Weather.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home/> */}
    {/* <Header title="Mero Header" subtitle="Welecome to Header"  color="green" /> */}
    {/* <Header title="Mero 2" subtitle="Welecome to  Header 2"  color="orange" /> */}
    {/* <Header title="Arko" subtitle="Welecome to  Header 2"  color="green" /> */}
    {/* <Footer/> */}
    {/* <Weather/> */}
    <Weather/>
  </React.StrictMode>,
)
