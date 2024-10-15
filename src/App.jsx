import './App.css'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contacts from './pages/Contacts'
import './media.css'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Homepage/>}></Route>
          <Route path='contacts' element={<Contacts></Contacts>} ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
