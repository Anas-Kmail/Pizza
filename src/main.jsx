
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Card from './Card' 
import Footer from './Footer'
createRoot(document.getElementById('root')).render(
  <>
<Navbar />
<Card/>
<Footer/>



</>

)
