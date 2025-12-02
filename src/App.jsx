import './App.css'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import PatientForm from "./components/Forms/PatientForm"
function App() {

  return (

    <div>
      <Router>
        <Routes>
          <Route path='/Patient-Form' element={<PatientForm/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
