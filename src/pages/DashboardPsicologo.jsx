import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Calendar, Users, Bell , CheckCheck } from 'lucide-react';
import { UpcomingAppointments } from '../components/UpcomingAppointments';
 
export const DashboardPsicologo = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const loadData = useCallback(async () => {
    try {
      const [appointmentsData, patientsData, requestsData] = await Promise.all([
        mockApi.getAppointments(user.id, 'psicologo'),
        mockApi.getPatients(user.id),
        mockApi.getRequests(user.id)
      ]);
      setAppointments(appointmentsData);
      setPatients(patientsData);
      setRequests(requestsData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  }, [user.id]);
 
  useEffect(() => {
    loadData();
  }, [loadData]);
 
  useEffect(() => {
    const handleFocus = () => loadData();
    window.addEventListener('focus', handleFocus);
   
    const interval = setInterval(loadData, 5000);
   
    return () => {
      window.removeEventListener('focus', handleFocus);
      clearInterval(interval);
    };
  }, [loadData]);
 
  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="w-12 h-12 border-4 border-light border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
 
  const today = new Date();
  today.setHours(0, 0, 0, 0);
 
  const todayAppointments = appointments.filter(apt => {
    const appointmentDate = new Date(apt.date);
    appointmentDate.setHours(0, 0, 0, 0);
 
    const isToday = appointmentDate.getTime() === today.getTime();
    const isPsychologist = apt.psychologistId === user.id;
    const isScheduled = apt.status === 'agendado';
 
    return isToday && isPsychologist && isScheduled;
  });
 
  const totalPatients = patients.length;
  const completedSessions = appointments.filter(apt =>
    apt.status === 'concluido' && apt.psychologistId === user.id
  ).length;
  const pendingRequests = requests.filter(req =>
    req.status === 'pendente' && req.preferredPsychologist === user.id
  ).length;
 
  const upcomingAppointments = appointments.filter(apt =>
    new Date(apt.date) >= new Date() &&
    apt.status === 'agendado' &&
    apt.psychologistId === user.id
  ).slice(0, 5);
 
  const isNewPsychologist = totalPatients === 0 && appointments.length === 0 && requests.length ===0;
 
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-dark">Dashboard</h1>
        <p className="text-white">Bem-vindo, {user.name}</p>
      </div>
 
      {/* Mensagem para psicólogos novos */}
      {isNewPsychologist && (
        <div className="bg-[#88C1D3]/30 rounded-lg shadow-md p-6 text-center border-2 border-dashed border-light/30">
          <Users className="w-16 h-16 text-light/50 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-dark mb-2">Bem-vindo ao Lunysse!</h3>
          <p className="text-dark/70 mb-4">
            Você é novo por aqui. Seus pacientes e agendamentos aparecerão neste dashboard
            conforme você começar a receber solicitações e agendar sessões.
          </p>
          <p className="text-sm text-dark/50">
            Explore o menu lateral para conhecer todas as funcionalidades disponíveis.
          </p>
        </div>
      )}
 
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-[#88C1D3]/30 rounded-lg shadow-md p-6 text-center">
        <Users className="w-8 h-8 text-light mx-auto mb-2" />
        <h3 className="text-2xl font-bold text-dark">{totalPatients}</h3>
        <p className="text-dark/70">Pacientes Ativos</p>
      </div>

      <div className="bg-[#88C1D3]/30 rounded-lg shadow-md p-6 text-center">
        <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
        <h3 className="text-2xl font-bold text-dark">{todayAppointments.length}</h3>
        <p className="text-dark/70">Sessões Hoje</p>
      </div>

      <div className="bg-[#88C1D3]/30 rounded-lg shadow-md p-6 text-center">
        <CheckCheck className="w-8 h-8 text-medium mx-auto mb-2" />
        <h3 className="text-2xl font-bold text-dark">{completedSessions}</h3>
        <p className="text-dark/70">Sessões Concluídas</p>
      </div>

      <div className="bg-[#88C1D3]/30 rounded-lg shadow-md p-6 text-center">
        <Bell className="w-8 h-8 text-orange-500 mx-auto mb-2" />
        <h3 className="text-2xl font-bold text-dark">{pendingRequests}</h3>
        <p className="text-dark/70">Solicitações Pendentes</p>
      </div>
    </div>

 
      {/* Próximos Agendamentos */}
      {!isNewPsychologist && (
  <UpcomingAppointments
    appointments={upcomingAppointments}
    patients={patients}
    totalPatients={totalPatients}
  />
)}

    </div>
  );
};