import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//APP components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
    <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/teacher" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;