import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from './Components/Navbar/Navbar'
import "./styles.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Navbar 
      empresa={"Gift-API"} 
      id_fb={61567038896683} 
      user_insta={"Betuko.35"} 
      user_git={"Betuko37"} 
      num_wha={6621324345} 
    />

  </StrictMode>,
)
