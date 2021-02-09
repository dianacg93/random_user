import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import UserSummary from './components/UserSummary';
import fetchUser from './services/randomUser';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  
  const refreshUser = async () => {
    const userRes = await fetchUser();
    setCurrentUser(userRes.results)
  }

  
  useEffect(() => {
    refreshUser();
  }, [])
  
  return (
    <div className="App">
      <Header />
      <button onClick={refreshUser}>New User</button>
      {currentUser != null ? 
          currentUser.map(user => {
            return <UserSummary user={user} />
      }) 
      :
      <UserSummary user={currentUser}/>}
    </div>
  );
}

export default App;
