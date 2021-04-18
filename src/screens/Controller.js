import React, {Component} from 'react';
import { BrowserRouter , Route } from 'react-router-dom'


import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
import BookShow from '../screens/bookshow/BookShow';
import Confirmation from '../screens/confirmation/Confirmation';


class Controller extends Component {
   render(){
       return(
        <BrowserRouter>
        <div>
          <Route exact path='/' render={(props) => <Home/>} />
          <Route path='/movie/:id' render={(props) => <Details  />} />
          <Route path='/bookshow/:id' render={(props) => <BookShow/>} />
          <Route path='/confirm/:id' render={(props) => <Confirmation/>} />
        </div>
      </BrowserRouter>
       );
   }
}

export default Controller;