import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Users, Mail, Phone, Calendar, Activity, CheckCircle } from 'lucide-react';
 
export const Pacientes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const loadPatients = async () => {
    setLoading(true);
    try {
      const data = await mockApi.getPatients(user.id);
      console.log('Pacientes carregados:', data); // Debug
      setPatients(data);
    } catch (error) {
      console.error('Erro ao carregar pacientes:', error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    loadPatients();
  }, [user.id]);
 
  // Recarrega quando a página fica visível
  useEffect(() => {
    const handleFocus = () => loadPatients();
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);
 
  if (loading) return <LoadingSpinner size="lg" />;
 
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-white">Meus Pacientes</h1>
      </div>
 
      <div className="grid gap-6">
        {patients.length === 0 ? (
          <Card className="text-center py-12">
            <Users className="w-16 h-16 text-dark/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-dark mb-2">Nenhum paciente encontrado</h3>
            <p className="text-dark/70">
              Seus pacientes aparecerão aqui conforme os agendamentos.
            </p>
          </Card>
        ) : (
          patients.map(patient => (
            <Card
              key={patient.id}
              className="cursor-pointer hover:shadow-lg transition-shadow p-6 bg-[#88C1D3]/30"
              onClick={() => navigate(`/pacientes/${patient.id}`)}
            >
              <div className="flex items-start gap-6">
                {/* FOTO DO PACIENTE */}
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  {patient.photo ? (
                    <img
                      src={patient.photo}
                      alt={patient.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-light to-accent flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                  )}
                </div>
 
                {/* INFORMAÇÕES */}
                <div className="grid grid-cols-3 gap-6 w-full ">
                  {/* Coluna 1 */}
                  <div>
                    <h3 className="text-lg font-bold text-white">{patient.name}</h3>
                    <p className="text-sm text-dark/60">Paciente</p>
 
                    <div className="mt-3 space-y-1">
                      <p className="text-sm text-dark">
                        <span className="font-bold">Idade: </span><br/>{patient.age} anos
                      </p>
                      <p className="text-sm text-dark">
                        <span className="font-bold">Email: </span><br/>{patient.email}
                      </p>
                    </div>
                  </div>
 
                  {/* Coluna 2 */}
                  <div className="space-y-1 mt-15">
                    <p className="text-sm text-dark">
                      <span className="font-bold">Data de Nascimento: </span><br/>
                      {patient.birthDate}
                    </p>
                    <p className="text-sm text-dark">
                      <span className="font-bold">Total de Sessões: </span><br/>
                      {patient.totalSessions}
                    </p>
                  </div>
 
                  {/* Coluna 3 */}
                  <div className="space-y-1 mt-15">
                    <p className="text-sm text-dark">
                      <span className="font-bold">Telefone: </span><br/>{patient.phone}
                    </p>
                    <p className="text-sm text-dark flex items-center gap-2">
                      <span className="font-bold">Status do Tratamento: </span><br/>
                      <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          patient.status === "Em tratamento"
                            ? "bg-[#eec409c9] text-dark"
                            : "bg-[#09fd3edc] text-dark"
                        }`}
                      >
                        {patient.status}
                      </span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
 
};
 