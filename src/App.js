import './App.css';// Import the application-wide CSS file.

// Import necessary components and libraries
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PdfComponent from './components/PdfComponent';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import DetailsFilling from './components/DetailsFilling';



function App() {
  return (
    <Container fluid className="bg-white p-0">

      <Navigation></Navigation>

      {/* Define routes for the components */}

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/preview" element={<PdfComponent/>}></Route>
        <Route path="/DetailsFilling" element={ <DetailsFilling/> } exact></Route>
        <Route path="/preview" element={<PdfComponent/>}></Route>
        <Route path="/Home" element={ <Home/> } exact></Route>
        <Route path="/AboutUs" element={ <AboutUs/> } exact></Route>
      </Routes>
      
      <Footer></Footer>

    </Container>
  );
}

export default App; // Export the App component as the application's entry point.
