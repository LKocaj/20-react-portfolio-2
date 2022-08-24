// dependencies
import "./App.css";
import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

// render 'current page'
const renderPage = () => {
  if (currentPage === 'About') {
    return <About />;
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }
  if (currentPage === 'Contact') {
    return <Contact />;
  }
  return <Resume />;
};
// default: 
//        return null;

const handlePageChange = (page) => setCurrentPage(page);
  return <div>
  <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
  <PortfolioContainer renderPage={renderPage} />
  <Footer />
  </div>
}

export default App;