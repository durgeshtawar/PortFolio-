
import './App.css'
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './components/Navbar/Index';
//import Hero from './components/HeroSection/Index';
import Skills from './components/Skills/Index';
import Education from './components/Education/Index';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection/Index';
//import Experience from './components/Experience/Index';
import Index from './components/Experience/Index';
import Project from './components/Projetcs/Index';
import ProjectDetails from './components/ProjectDetails/Index';
import Footer from './components/Footer/Index';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
      <Router>
      <Navbar />
     <Body>
      <HeroSection/>
      <Wrapper>
      <Skills />
      <Index />
     
      
      </Wrapper>
      <Project setOpenModal={setOpenModal} />
          {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
      <Wrapper>
      <Education />
      </Wrapper>
        <Wrapper>
        <Footer />
        </Wrapper>
        
        
      </Body>
      </Router>
    </ThemeProvider>
  )
}

export default App
