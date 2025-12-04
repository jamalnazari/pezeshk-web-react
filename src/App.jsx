import './App.css'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import PatientForm from "./components/Forms/PatientForm"
import Parvandeh from './components/Forms/Parvandeh'
import SharhHal from './components/Forms/SharhHal'
import NobatDehi from './components/Forms/NobatDehi'
function App() {

  return (

    <div>
      <Router>
        <Routes>
          <Route path='/Patient-Form' element={<PatientForm/>}/>
          <Route path='/Parvandeh' element={<Parvandeh/>}/>
          <Route path='/SharhHal' element={<SharhHal/>}/>
          <Route path='/NobatDehi' element={<NobatDehi/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
