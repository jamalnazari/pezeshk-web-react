import './App.css'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import PatientForm from "./components/Forms/PatientForm"
import Parvandeh from './components/Forms/Parvandeh'
import SharhHal from './components/Forms/SharhHal'
import NobatDehi from './components/Forms/NobatDehi'
import { UserProvider } from './context/UserContext'
import UsersTable from './components/Tables/UsersTable'
import UserForm from './components/Forms/UserForm'
function App() {

  return (

    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/Patient-Form' element={<PatientForm/>}/>
            <Route path='/Parvandeh' element={<Parvandeh/>}/>
            <Route path='/SharhHal' element={<SharhHal/>}/>
            <Route path='/NobatDehi' element={<NobatDehi/>}/>
            <Route path='UsersTable' element={<UsersTable/>}/>
            <Route path='UserForm' element={<UserForm/>}/>
          </Routes>
        </Router>
      </UserProvider>
    </div>
  )
}

export default App
