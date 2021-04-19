import React, {Component} from 'react';
import { BrowserRouter , Route } from 'react-router-dom'


import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
import BookShow from '../screens/bookshow/BookShow';
import Confirmation from '../screens/confirmation/Confirmation';

class Controller extends Component {
 
   render(){
    const baseUrl='http://localhost:3000/api/v1/';
       return(
        <BrowserRouter>
        <div>
          <Route exact path='/' render={(props) => <Home {...props} baseUrl={baseUrl} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props} baseUrl={baseUrl}/>} />
          <Route path='/bookshow/:id' render={(props) => <BookShow {...props} baseUrl={baseUrl}/>} />
          <Route path='/confirm/:id' render={(props) => <Confirmation {...props} baseUrl={baseUrl}/>} />
        </div>
      </BrowserRouter>
       );
   }
}

export default Controller;