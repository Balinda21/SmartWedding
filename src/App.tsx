// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Login from './Pages/auth/Login';
import SignUp from './Pages/auth/SignUp';
import Dashboard from './Pages/admin/adminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;