import { useState } from 'react'
import bookLogo from './assets/books.png'

//Import the components into the app
import Books from "./components/Books"
import Navigations from './components/Navigations'

import Account from './components/Account';
import SingleBook from './components/SingleBook'

// import components from react router dom
import { Routes, Route } from "react-router-dom"

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>
    <Navigations />
      <Routes>
        <Route path="/books" element={<Books />}/>
        <Route path="/books/:id" element={<SingleBook />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register/>} />
        <Route path="/account" element={<Account />}/>
      </Routes>

    </>
  )
}

export default App
