import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Daskboard/EmployeeDashboard'
import AdminDashboard from './components/Daskboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider.jsx'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  const [User, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  useEffect(() => {

    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [])

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedUser', JSON.stringify({ role: 'admin' }))
    }
    else if (userData) {
      const employee = userData.find(emp => emp.email === email && emp.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedUser', JSON.stringify({ role: 'employee' }))
      }
    }
    else {
      alert('Invalid Credentials')
    }
  }



  return (
    <>
      {!User ? <Login handleLogin={handleLogin} /> : ''}
      {User == 'admin' ? <AdminDashboard changeUser={setUser} /> : (User == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}


export default App
