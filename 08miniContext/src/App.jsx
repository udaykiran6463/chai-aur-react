import './App.css'
import Login from './components/Login/Login.jsx'
import Profile from './components/Profile/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {

    return (
        <UserContextProvider>
            <h1>context api</h1>
            <Login/>
            <Profile/>
        </UserContextProvider>
    )
}

export default App
