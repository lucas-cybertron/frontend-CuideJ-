import { Calendar } from "lucide-react";

export const UpcomingAppointments = ({ appointments = [], patients = [], totalPatients = 0 }) => {

  if (!appointments || appointments.length === 0) {
    return (
      <div className="bg-[#88C1D3]/30 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Próximos Agendamentos</h2>
        <div className="text-center py-8">
          <Calendar className="w-16 h-16 text-dark/30 mx-auto mb-4" />
          <p className="text-dark/70 mb-2">Nenhum agendamento futuro encontrado.</p>
          <p className="text-sm text-dark/50">
            {totalPatients === 0
              ? "Você ainda não possui pacientes cadastrados."
              : "Todos os agendamentos estão em dia!"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#88C1D3]/30 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Próximos Agendamentos</h2>
      <div className="space-y-3">
        {appointments.map((appointment) => {
          const patient = patients.find((p) => p.id === appointment.patientId);
          return (
            <div
              key={appointment.id}
              className="flex justify-between items-center p-3 bg-white/10 rounded-lg"
            >
              <div>
                <p className="font-medium text-dark">{patient?.name || "Paciente não encontrado"}</p>
                <p className="text-sm text-dark/70">
                  {new Date(appointment.date).toLocaleDateString("pt-BR")} às {appointment.time}
                </p>
                <p className="text-xs text-dark/60">{appointment.description}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  appointment.status === "agendado"
                    ? "bg-blue-100 text-blue-800"
                    : appointment.status === "iniciado"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {appointment.status === "agendado"
                  ? "Agendado"
                  : appointment.status === "iniciado"
                  ? "Iniciado"
                  : "Concluído"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
