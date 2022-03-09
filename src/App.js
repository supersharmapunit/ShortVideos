import Signup from './Components/Signup';
import Login from './Components/MaterialUI/Login'
import AuthProvider from './Context/AuthProvider';
import './App.css';
import Ioa from './Components/Ioa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRouter from './Components/PrivateRouter';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
          <Route exact path='/' element={<PrivateRouter/>}>
            <Route exact path='/' element={<Ioa/>}/>
          </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
