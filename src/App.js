import React, { useEffect, useRef, useState } from 'react'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import {dark} from './styles/Themes'
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from './sections/Home'

import {

  Routes,
  Route,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
import ScrollTriggerProxy from './components/ScrollTriggerProxy'
import Banner from './sections/Banner'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import Trend from './sections/Trend'
import Footer from './sections/Footer'
import Loader from './components/Loader'
function App() {
  const containerRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(()=>{
      setLoaded(true)
    },3000)
  }, []);
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={dark}>

        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              }
            }
          }
          watch={
            [
              //...all the dependencies you want to watch to update the scroll EXCEPT the location one
            ]
          }
       
          containerRef={containerRef}

        > 
          <AnimatePresence>
            {
              loaded ? null : <Loader />
            }
          </AnimatePresence>

          <ScrollTriggerProxy/>
          <AnimatePresence>
            <main className='App' data-scroll-container ref={containerRef}>
              <Routes>

                <Route path='/' element={<Home />} />
              </Routes>
              <About/>
              <Portfolio/>
              <Banner/>
              <Trend/>
              <Footer/>
            </main>
          </AnimatePresence>

        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

export default App