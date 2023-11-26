'use client'

import { useState, useEffect } from 'react'
import LoginForm from './components/login/loginForm'
import NavBar from './components/navbar/NavBar'
import Redirect from './components/redirect/redirect'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);


  return (
    <main className="items-center justify-between">
      <NavBar auth={isAuthenticated} />
      {isAuthenticated ? <Redirect to="/messages" /> : (<LoginForm />)}
    </main>
  )
}
