
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Dashboard1 from './pages/dashboard/Dashboard1';
import Header1 from  './pages/header/Header1'
import Nomatch from './pages/nomatch/Nomatch';
import PostUser from './pages/crm/postuser';

function App() {
  return (
  <>
    <Header1/>
    <Routes>
      <Route path='/' element={<Dashboard1/>}/>
      <Route path='/register' element={<PostUser/>}/>
      <Route path='*' element={<Nomatch/>}/>
    </Routes>
  </>
  );
}

export default App;
