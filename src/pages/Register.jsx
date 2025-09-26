//! importação das bibliotecas e componentes
import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { mockApi } from "../services/mockApi";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import toast from "react-hot-toast";
 
export const Register = () => {
  const [userType, setUserType] = useState("paciente");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    CRP: "",
    specialty: "",
    phone: "",
    birthDate: "",
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
 
  const handleInputChange = useCallback(
    (field) => (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Senhas não coincidem");
      return;
    }
    setLoading(true);
    try {
      const { user, token } = await mockApi.register({
        ...formData,
        type: userType,
      });
      login(user, token);
      toast.success("Conta criada com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 bg-[#e9f9ff]">
      <Card className="bg-light/45 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">Criar Conta</h1>
        </div>
 
        {/* Seletor de usuário */}
        <div className="flex mb-6 gap-1">
          <Button
            type="button"
            variant={userType === "paciente" ? "primary" : "secondary"}
            size="sm"
            onClick={() => setUserType("paciente")}
            className="flex"
          >
            Paciente
          </Button>
 
          <Button
            type="button"
            variant={userType === "psicologo" ? "primary" : "secondary"}
            size="sm"
            onClick={() => setUserType("psicologo")}
            className="flex"
          >
            Psicólogo
          </Button>
        </div>
 
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nome completo"
            value={formData.name}
            onChange={handleInputChange("name")}
            placeholder="Seu nome completo"
            required
          />
          <Input
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            placeholder="seu@email.com"
            required
          />
          <Input
            label="Senha"
            type="password"
            value={formData.password}
            onChange={handleInputChange("password")}
            placeholder="sua senha"
            required
          />
          <Input
            label="Confirme sua senha"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange("confirmPassword")}
            placeholder="Confirme sua senha"
            required
          />
          <Input
            label="Telefone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange("phone")}
            placeholder="Digite seu telefone"
            required
          />
 
          {userType === "paciente" && (
            <Input
              label="Data de Nascimento"
              type="date"
              value={formData.birthDate}
              onChange={handleInputChange("birthDate")}
              placeholder="Digite a sua data de nascimento"
              required
            />
          )}
 
          {userType === "psicologo" && (
            <>
              <Input
                label="CRP"
                value={formData.CRP}
                onChange={handleInputChange("CRP")}
                placeholder="Ex: 12/34567"
                required
              />
              <Input
                label="Especialidade"
                value={formData.specialty}
                onChange={handleInputChange("specialty")}
                placeholder="Ex: Psicologia Clínica, Terapia Cognitiva"
                required
              />
            </>
          )}
 
          <Button type="submit" loading={loading} className="w-full" variant="login">
            Criar Conta
          </Button>
        </form>
 
        <div className="mt-6 text-center space-y-2">
          <p className="text-white">Já possui conta?  <Link to="/login" className="ml-1 text-dark/70 font-bold hover:text-dark">
            Faça login!
          </Link></p>
        
        </div>
      </Card>
    </div>
  );
};
 
 