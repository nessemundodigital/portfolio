import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ThemeProvider from './context/ThemeContext';
import AuthProvider from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

// Importar Layouts
import AdminLayout from './components/admin/AdminLayout';

// Importar Páginas Públicas
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import PortfolioDetail from './pages/PortfolioDetail';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Importar Páginas Admin
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManagePortfolio from './pages/admin/ManagePortfolio';
import ManageBlog from './pages/admin/ManageBlog';
import ManageTestimonials from './pages/admin/ManageTestimonials';
import ManageAbout from './pages/admin/ManageAbout';
import ManageSettings from './pages/admin/ManageSettings';

// Importar Componentes Auxiliares
import PrivateRoute from './components/auth/PrivateRoute';
import { Toaster, ToastProvider } from './components/ui/Toaster';

// Layout Público (Cabeçalho/Rodapé)
function PublicLayout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* Páginas públicas serão renderizadas aqui */}
      </main>
      <Footer />
    </>
  );
}

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
              <Routes>
                {/* Rotas Públicas usando PublicLayout */}
                <Route element={<PublicLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                  <Route path="/sobre" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/contato" element={<Contact />} />
                  <Route path="/privacidade" element={<PrivacyPolicy />} />
                  <Route path="/termos" element={<TermsOfUse />} />
                </Route>

                {/* Rota de Login Admin (sem layout público ou admin) */}
                <Route path="/admin/login" element={<Login />} />

                {/* Rotas de Admin Aninhadas usando AdminLayout */}
                <Route 
                  path="/admin" 
                  element={
                    <PrivateRoute>
                      <AdminLayout /> 
                    </PrivateRoute>
                  }
                >
                  {/* Redirecionamento da raiz /admin para /admin/dashboard */}
                  <Route index element={<Navigate to="dashboard" replace />} /> 
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="portfolio" element={<ManagePortfolio />} />
                  <Route path="blog" element={<ManageBlog />} />
                  <Route path="depoimentos" element={<ManageTestimonials />} />
                  <Route path="sobre" element={<ManageAbout />} />
                  <Route path="configuracoes" element={<ManageSettings />} />
                </Route>

                {/* Rota 404 (sem layout específico) */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
            </div>
          </Router>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;