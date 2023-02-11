import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import './bootstrap.min.css'
import Restaurantlist from './components/Restaurantlist';
import Viewrest from './components/Viewrest'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Header/>
       </header>

<Routes>
  <Route path='/' element={<Restaurantlist/>}/>
  <Route path='/viewrest/:id' element={<Viewrest/>}/>

</Routes>

       
       <Footer/>
      
    </div>
  );
}

export default App;
