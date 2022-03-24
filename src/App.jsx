
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Calendar } from './components/pages/Calendar'
import { Dashboard } from './components/pages/Dashboard'
import { ForgotPass } from './components/pages/ForgotPass'
import { Login } from './components/pages/Login'
import { Profile } from './components/pages/Profile'
import { Settings } from './components/pages/Settings'
import { Signup } from './components/pages/Signup'
import { Table } from './components/pages/Table'

import { StyleGuide } from './components/reference/StyleGuide'

 {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
    
          <Route path="forgot_pass" element={<ForgotPass />} />
          <Route path="profile" element={<Profile />} />
    
          <Route path="settings" element={<Settings />} />
          <Route path="table" element={<Table />} />
    
          <Route path="calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
      hi */}

function App() {
    return ( 
        <div>
        <div>hi</div>
        <div><Dashboard/></div>
        
        {/* <StyleGuide/> */}
        </div>
        
    );
}

export default App