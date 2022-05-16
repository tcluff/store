import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import FindHome from './components/findStore/FindHome';
import MainHeader from './components/header/MainHeader';
import CreateStore from './components/create/CreateStore';
import Test from './components/test';
import StoreHome from './components/individualStore/StoreHome';
import CreateItem from './components/create/CreateItem';
import ItemDisplay from './components/individualItem/ItemDisplay';
import MyStores from './components/myStores/MyStores';



function App() {
  return (
    <div>
      <Router>
        <MainHeader />
        <Routes>
          <Route path="/*" element={<FindHome />} />
          <Route path="/createStore" element={<CreateStore />} />
          <Route path="/test" element={<Test /> } />
          <Route path="/storeHome/:storeName" element={<StoreHome />} />
          <Route path="/createItem/:storeName" element={<CreateItem />} />
          <Route path="/viewItem/:itemId" element={<ItemDisplay />} />
          <Route path="/myStores" element={<MyStores />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
