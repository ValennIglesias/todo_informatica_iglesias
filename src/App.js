
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContatiner';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = ()=> {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer greeting="ItemListContatiner"
      /> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
