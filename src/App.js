
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Culture from './components/culture/Culture';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Notfind from './components/not_find/Notfind';
import UserDetails from './components/userdetails/UserDetails';
import Users from './components/users/Users';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>


      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route exact path='/about'>
          <About></About>
        </Route>

        <Route path='/about/culture'>
          <Culture></Culture>
        </Route>

        <Route path='/users'>
          <Users></Users>
        </Route>

        <Route path='/user/:userId'>
          <UserDetails></UserDetails>
        </Route>

        <Route path='*'>
          <Notfind></Notfind>
        </Route>


      </Switch>
      </BrowserRouter>

      


      
    </div>
  );
}

export default App;
