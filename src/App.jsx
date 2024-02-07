import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Timetable from './Pages/Timetable';
import SavedClasses from './Pages/SavedClasses';
import Contact from './Pages/Contact';
import BrowseClasses from './Pages/BrowseClasses';
import Footer from './Components/Footer';

function App() {
    return <Router>
        <NavBar />
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="browse" element={<BrowseClasses />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="savedclasses" element={<SavedClasses />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>;
}
export default App
