import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './component/users/Index.jsx'
import Create from './component/users/Create.jsx'
import Details from './component/users/Details.jsx'
import Edit from './component/users/Edit.jsx'

function App() {

  return (
    <>
<Routes>
  <Route  path='/' element={<Index />} / >
  <Route path='/user/index' element={<Index/>} />
  <Route path='/user/create' element={<Create/>} />
<Route   path='/user/:id'     element={<Details />}   />
<Route  path='/user/edit/:id' element={<Edit />} />
  <Route path='*' element={<p> page not found </p>} />

  </Routes>    </>
  )
}

export default App
