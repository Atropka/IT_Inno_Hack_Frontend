import { Route, Routes, BrowserRouter} from "react-router-dom";
import SignIn from './modules/SingIn/SignIn';
import SignUp from './modules/SignUp/SignUp';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;