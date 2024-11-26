/*import React from 'react';

import './App.css';
 // Adjust the path if needed
import SearchBar from './components/SearchBar';
import CardSection from './components/CardSection';
import ConsultationSection from './components/ConsultationSection';
import ClinicConsultation from './components/ClinicConsultation';
import HealthExperts from './components/HealthExperts';
import TestimonialCarousel from './components/TestimonialCarousel';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import HeroSection from './components/header/HeroSection';
import StickyHeader from './components/Header';
function App() {
  return (
    <div className="App">
      <HeroSection />
      <SearchBar />
      <CardSection />
      <ConsultationSection />
      <ClinicConsultation />
      <HealthExperts />
      <TestimonialCarousel />
      <AppDownload />
      <Footer />
      <StickyHeader />
    </div>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; // Adjust the path if needed
import SearchBar from './components/SearchBar';
import CardSection from './components/CardSection';
import ConsultationSection from './components/ConsultationSection';
import ClinicConsultation from './components/ClinicConsultation';
import HealthExperts from './components/HealthExperts';
import TestimonialCarousel from './components/TestimonialCarousel';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import HeroSection from './components/header/HeroSection';
import Header from './components/Header';
import Login from './components/Login'; // Create this LoginPage component
import Footer1 from './components/Footer1';


function App() {
  return (
    <Router>
      <div className="App">
         {/* Always render the Sticky Header */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SearchBar />
                <CardSection />
                <ConsultationSection />
                <ClinicConsultation />
                <HealthExperts />
                <TestimonialCarousel />
                <AppDownload />
                <Footer />
              </>
            }
          />
          {/* Login Page */}
          <Route
            path="/login"
            element={
              <>
                <Login /> {/* Render LoginPage Component */}
              </>
            }
          />
        </Routes>
        <Footer1 /> {/* Always render the Footer */}
      </div>
    </Router>
  );
}

export default App;
