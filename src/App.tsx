import {Container,Row,Col} from 'react-bootstrap'
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Register'
import "./App.css"
import { UserAuthContextProvider } from './context/userAuthContext'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import PhoneSignup from './components/PhoneSignup'

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
            <Route path='/' element={<Login></Login>} >
              
            </Route>
            <Route path='/signup' element={<Signup></Signup>}>

            </Route>
            <Route path='/phone-signup' element={<PhoneSignup></PhoneSignup>}>

            </Route>
            <Route path='/home' element={<ProtectedRoute><Home></Home></ProtectedRoute>}>

            </Route>

          </Routes>

        </UserAuthContextProvider>
          
        </Col>
      </Row>
    
    </Container>
  )
}

export default App