import React from 'react';
import './sass/main.sass';
//react router
import {BrowserRouter, Route} from 'react-router-dom';
//importing pages for Router
import Home from './components/Home';
import Info from './components/ROI/Info';
import HourSaved from './components/ROI/hoursSaved';
import DollarsSaved from './components/ROI/dollarsSaved';
import clientsServed from './components/ROI/clientsServed';
import Results from './components/ROI/results';

function App() {
  return (
    <BrowserRouter basename="components">

        {/* Pages */}
      <Route exact path="/" component={Home}/>
      <Route path="/Info" component={Info}/>
      <Route path="/HoursSaved" component={HourSaved}/>
      <Route path="/DollarsSaved" component={DollarsSaved}/>
      <Route path="/ClientsServed" component={clientsServed}/>
      <Route path="/Results" component={Results}/>


    </BrowserRouter>
    
    
  );
}

export default App;