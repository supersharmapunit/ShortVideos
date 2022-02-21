import Signup from './Components/Signup';
import AuthProvider from './Context/AuthProvider';
import './App.css';

function App() {
  return (
    <div>
      <AuthProvider>
        <Signup/>
      </AuthProvider>
    </div>
  );
}

export default App;
