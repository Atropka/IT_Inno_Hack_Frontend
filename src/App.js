import { Route, Routes, BrowserRouter} from "react-router-dom";
import SignIn from './modules/SingIn/SignIn';
import SignUp from './modules/SignUp/SignUp';
import Projects from './modules/Projects/Projects';
import Dashboard from "./modules/Dashboard/Dashboard";
import Profile from "./modules/Profile/Profile";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;