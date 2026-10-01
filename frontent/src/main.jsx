import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import HomePage from './landing/home/HomePage.jsx'
import Signup from './landing/signup/Signup.jsx'
import AboutPage from './landing/about/AboutPage.jsx'
import Products from './landing/products/Products.jsx'
import PrincingPage from './landing/pricing/PricingPage.jsx'
import Support from './landing/support/Support.jsx'
import Footer from './landing/Footer.jsx'
import Navbar from './landing/Navbar.jsx'

import NotFound from './landing/notFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes> <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/price" element={<PrincingPage />} />
        <Route path="/support" element={<Support />} />

        {/* Page not found */}
        <Route path="*" element={<NotFound />} />   
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
