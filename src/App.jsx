import { useState } from 'react'
import Clock from './components/clock';




function App() {
  const [count, setCount] = useState(0)

  let time= new Date().toLocaleDateString();
  
  return (
    <>
   <nav>
    
    <p className='h1 d-flex justify-content-center  '>Digital Clock</p>
   </nav>
   <div className="container d-flex justify-content-center align-items-center ">
    <div className="clock ">
     <Clock/>
    </div>
   </div>
   
    </>
   
  )
}

export default App
