import React      from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Navbar from './Navbar'
                                                         
const routes = () => (
  <Router>
          <div>

            <Route exact path = "/Home" component   =  {Home}/>
            <Route exact path = "/About" component   = {About}/> 
            <Route exact path = "/Contact" component   = {Contact}/> 
            <Route exact path = "/Gallery" component   = {Gallery}/> 
          </div>
  </Router>
)

export default routes