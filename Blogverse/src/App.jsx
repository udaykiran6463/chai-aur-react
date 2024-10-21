import { useEffect, useState } from 'react';
import './App.css';
import config from './config/config.js'; // Ensure this file exists and is configured properly
import { useDispatch } from 'react-redux';
import authServices from './appwrite/auth.js'; // Ensure this file exports the expected functions
import { login, logout } from './store/features/authSlice.js'; // Ensure these actions are defined correctly
import { Header, Footer, LoadingPage } from './components/index.components.js'; // Ensure Header and Footer are exported correctly

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authServices.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout()); 
                }
            })
            .catch((err) => {
                console.error('Error while getting the user data:', err); 
            })
            .finally(() => {
                setLoading(false);
            });
    }, [dispatch]); 

    return !loading ? 
    (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-grow'>
                {/* Your main content here */}
                main
            </main>
            <Footer />
        </div>
    ) : 
    (
        <div>
            <LoadingPage/>
        </div> 
    );
}

export default App;
