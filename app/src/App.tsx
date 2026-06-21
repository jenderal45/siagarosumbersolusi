import { Routes, Route } from 'react-router';
import { AdminAuthProvider } from './hooks/useAdminAuth';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import ArticlePage from './pages/ArticlePage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <AdminAuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/catalog"
          element={
            <Layout>
              <Catalog />
            </Layout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductDetail />
            </Layout>
          }
        />
        <Route
          path="/article/:id"
          element={
            <Layout>
              <ArticlePage />
            </Layout>
          }
        />
        {/* Admin route with its own layout (no Navbar/Footer) */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </AdminAuthProvider>
  );
}
