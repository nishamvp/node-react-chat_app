import './App.css'
import AuthPage from './Pages/AuthPage'
import { useState } from 'react'
import ChatPage from './Pages/ChatPage'

function App() {
  const [user, setUser] = useState()

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />
  } else {
    return <ChatPage user={user} />
  }
}

export default App
