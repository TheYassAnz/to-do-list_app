import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'

import Home from '../Home'
import Login from '../Login';
import Register from '../Register';
import Header from '../../components/Header';
import AuthRoute from '../../components/AuthRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Header />}
                >
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route element={<AuthRoute />}>
                        <Route path="/home" element={<Home />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    )
}