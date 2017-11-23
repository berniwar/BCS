
import React      from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import App        from './App'
import SecondPage from './SecondPage'
                                                         
const routes = () => (
  <Router>
          <div>
            <Route exact path = "/"      component   =  {App}/>
            <Route exact path = "/page2" component   = {SecondPage}/> 
          </div>
  </Router>
)
export default routes