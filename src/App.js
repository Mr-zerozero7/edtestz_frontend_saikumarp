// import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import ContactUs from './components/ContactUs';
import BookAppointments from './components/BookAppointments';
import AppointmentsHistory from './components/AppointmentHistory';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <>
    <HashRouter>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact element={<ProtectedRoute/>}>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contactus' element={<ContactUs/>} />
            <Route exact path='/appointments/create' element={<BookAppointments/>} />
            <Route exact path='/appointments/' element={<AppointmentsHistory/>} />
          </Route>
          <Route exact path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </AuthProvider>
    </HashRouter>
    
    </>
  );
}

export default App;
