import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// Componentes reutilizáveis
import { PublicNavbar } from "../components/publicNavBar";
import { Sidebar } from "../components/SideBar";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { NotFound } from "../pages/notFound";

// Páginas públicas
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { useAuth } from "../context/AuthContext";

// Páginas privadas
import { DashboardPaciente } from "../pages/DashboardPaciente";
import { DashboardPsicologo } from "../pages/DashboardPsicologo";
import { Agendamento } from "../pages/Agendamentos";
import { ChatIA } from "../pages/ChatComIa";
import { Relatorios } from "../pages/relatorios";
import { Solicitacoes } from "../pages/solicitacoes";
import { Pacientes } from "../pages/Pacientes";
import { PacienteDetalhes } from "../pages/PacienteDetalhes";
import { SessaoDetalhes } from "../pages/SessaoDetalhes";

// Rotas privadas
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <LoadingSpinner size="lg" />;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen flex">
    <Sidebar /> {/* Sidebar lateral sempre visível */}
    <main className="flex-1 lg:ml-64 p-8">
      {children} {/* Conteúdo da página protegida */}
    </main>
  </div>
  );
};

// Rotas públicas
const PublicRoute = ({ children }) => {
  return (
    <div className="min-h-screen">
      <PublicNavbar />
      <main className="flex-grow px-4 pt-24 sm:pt-28" >{children}</main>
    </div>
  );
};

// Dashboard que escolhe o tipo de usuário
const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null; // evita erro se user ainda não carregou
  return user.type === "psicologo" ? <DashboardPsicologo /> : <DashboardPaciente />;
};

// Rotas da aplicação
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PublicRoute>
              <About />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/agendamento"
          element={
            <ProtectedRoute>
              <Agendamento />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat-ia"
          element={
            <ProtectedRoute>
              <ChatIA />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relatorios"
          element={
            <ProtectedRoute>
              <Relatorios/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/solicitacoes"
          element={
            <ProtectedRoute>
              <Solicitacoes/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pacientes"
          element={
            <ProtectedRoute>
              <Pacientes/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pacientes/:id"
          element={
            <ProtectedRoute>
              <PacienteDetalhes/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sessao/:sessionId"
          element={
            <ProtectedRoute>
              <SessaoDetalhes/>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
