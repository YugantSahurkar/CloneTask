
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Kyc from './components/Kyc';
import Registration from './components/Registration';
import Status from './components/Status';
function App(){
  return <>
  <Router>
    <div>
    
 <Routes>
  <Route path='/' element={<Kyc/>}/>
  <Route path='/registration' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/status' element={<Status/>}/>



 </Routes>

    </div>
  </Router>

  </>
}
export default App;