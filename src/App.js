
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContatiner';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=> {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="ItemListContatiner"/>
    </div>
  );
}

export default App;
