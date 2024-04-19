import './App.css';
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';



function App() {
  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      <LoginForm />
      <FriendsList />
    </div>
  );
}

export default App;
