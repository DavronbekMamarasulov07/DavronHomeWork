import './App.css';
import CardMovie from './Components/CardMovie/CardMovie';
import UserTable from './Components/UserTable/UserTable';

function App() {
  return (
    <div className="App">
      <UserTable/>
      <br/>
      <hr></hr>
      <CardMovie/>
    </div>
  );
}

export default App;
