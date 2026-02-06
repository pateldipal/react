import React from 'react'
import { Card } from './component/Card'
import Navbar from './component/Navbar'

const App = () => {
  return (
      <div className='parent'>
      <Card user = 'Dipal' img = 'https://images.unsplash.com/photo-1720377696100-bb0af780c000?q=80&w=342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' lorems = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'/>
      <Card user = 'Jignesh' img = 'https://images.unsplash.com/photo-1689704383312-313672e156bb?q=80&w=395&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' lorems = 'You mean everything to me. I love You'/>
      <Card user = 'Trishiv' img = 'https://plus.unsplash.com/premium_photo-1724824737068-a6a90b88fbd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' lorems = 'You taught me what true love is, and I’m grateful every day'/>
      <Card user = 'Parthvi' img = 'https://plus.unsplash.com/premium_photo-1692956570969-476b34882c2e?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' lorems= 'Even after all this time, I still can’t believe how lucky I am to have you.'/>
    </div>
  )
}

export default App