import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import News from './pages/News'
import Blogs from './pages/Blogs'
import Podcast from './pages/Podcast'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/news' element={<News />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/podcast' element={<Podcast />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
