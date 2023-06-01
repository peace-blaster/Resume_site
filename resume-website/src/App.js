//libs
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// components
import NavigationHeader from './components/NavigationHeader';
import AppRoutes from './components/AppRoutes';
// css
import './App.css';
import './css/navigational_header_style.css';
import './css/index.css';
import './css/home_page_style.css';
import './css/experience_syle.css';
import './css/contact_style.css';
// media
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <NavigationHeader 
        headerTitle='Julian DeVille' 
        headerSubtitle='Data Engineer' 
        headerLinksList={['Skills', 'Sample Work', 'Experience', 'Contact', 'Resume']}
      />
      <AppRoutes />
    </Router>
  );
}

export default App;
