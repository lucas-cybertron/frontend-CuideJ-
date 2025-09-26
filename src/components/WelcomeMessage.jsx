import { Users } from "lucide-react";

export const WelcomeMessage = () => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-dashed border-light/30">
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
);
