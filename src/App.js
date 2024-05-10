import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Provider} from 'react-redux';

// import Product from './components/Product';
import { createBrowserRouter,createRoutesFromElements , RouterProvider , Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import NavBar from './components/Navbar';
import store from './components/store/store';
import RootLayout from './components/RootLayout';






function App() {
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Dashboard />}></Route>
    <Route path='/cart' element= {<Cart/>}></Route>
  </Route>
))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
