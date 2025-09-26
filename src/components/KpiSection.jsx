import { Users, Calendar, CheckCheck, Bell } from "lucide-react";

export const KpiSection = ({
  totalPatients = 0,
  todayAppointments = [],
  completedSessions = 0,
  pendingRequests = 0
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <Users className="w-8 h-8 text-light mx-auto mb-2" />
        <h3 className="text-2xl font-bold text-dark">{totalPatients}</h3>
        <p className="text-dark/70">Pacientes Ativos</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
        <h3 className="text-2xl font-bold text-dark">{todayAppointments.length}</h3>
        <p className="text-dark/70">Sessões Hoje</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <CheckCheck className="w-8 h-8 text-medium mx-auto mb-2" />
        <h3 className="text-2xl font-bold text-dark">{completedSessions}</h3>
        <p className="text-dark/70">Sessões Concluídas</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <Bell className="w-8 h-8 text-orange-500 mx-auto mb-2" />
        <h3 className="text-2xl font-bold text-dark">{pendingRequests}</h3>
        <p className="text-dark/70">Solicitações Pendentes</p>
      </div>
    </div>
  );
};
