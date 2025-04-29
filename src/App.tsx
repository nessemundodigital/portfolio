import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ThemeProvider from './context/ThemeContext';
import AuthProvider from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import PortfolioDetail from './pages/PortfolioDetail';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManagePortfolio from './pages/admin/ManagePortfolio';
import ManageBlog from './pages/admin/ManageBlog';
import ManageTestimonials from './pages/admin/ManageTestimonials';
import ManageAbout from './pages/admin/ManageAbout';
import ManageSettings from './pages/admin/ManageSettings';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/auth/PrivateRoute';
import { Toaster, ToastProvider } from './components/ui/Toaster';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento de recursos
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-24 h-24 bg-primary/20 rounded-full mb-4"></div>
          <div className="h-6 w-40 bg-primary/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-background text-foreground">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                  <Route path="/sobre" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/contato" element={<Contact />} />
                  <Route path="/admin/login" element={<Login />} />
                  <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                  <Route path="/admin/portfolio" element={<PrivateRoute><ManagePortfolio /></PrivateRoute>} />
                  <Route path="/admin/blog" element={<PrivateRoute><ManageBlog /></PrivateRoute>} />
                  <Route path="/admin/depoimentos" element={<PrivateRoute><ManageTestimonials /></PrivateRoute>} />
                  <Route path="/admin/sobre" element={<PrivateRoute><ManageAbout /></PrivateRoute>} />
                  <Route path="/admin/configuracoes" element={<PrivateRoute><ManageSettings /></PrivateRoute>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <Toaster />
            </div>
          </Router>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;