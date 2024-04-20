import './App.css';
import { Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';



function App() {
  return (
    <div className="App">
    <Link to ="/login">Login</Link>
    <Link to = "/friends-list">Friends List</Link>
    <Link to = "/add-friend">Add Friend</Link>
      <h1>Client Auth Projesi: Friends</h1>
      <Switch>
        <Route exact path="/" component = {LoginForm} />
        <Route path="/login" component = {LoginForm} />
        <Route path="/friends-list" component = {FriendsList} />
      </Switch>
      
    </div>
  );
}

export default App;
