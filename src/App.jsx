import { useState } from 'react';

import Footer from './components/footer/Footer'
import './App.css'
import Content from './components/content/Content';
import Header from './components/header/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='app-container'>
      <Header />
      <Content />
      <Footer />
      </main>
    </>
  )
}

export default App
