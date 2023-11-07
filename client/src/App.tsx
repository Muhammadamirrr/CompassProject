import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import UserList from './components/UserList/UserList'
import { Error } from './components/Error/Error'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
