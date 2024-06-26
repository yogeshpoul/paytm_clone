import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Dashboard} from './pages/Dashboard'
import {SendMoney} from './pages/SendMoney'
import Loader from './components/Loader'
// const url="http://localhost:3000"
// const url="https://paytm-clone-coral-two.vercel.app"
function App() {
// new comments added
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup/>}/>
            {/* <Route path="/signin" element={<Signin/>}/> */}
            <Route path="/" element={<Signin/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/send" element={<SendMoney/>}/>
            
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
