// Importações necessárias
import { Link } from 'react-router-dom'; // Usado para navegação entre páginas sem recarregar o site
import { Button } from '../components/Button'; // Importa um botão reutilizável
import { Heart, Target, Award, Users, Brain, Shield, Zap, Calendar, Activity, FileText, Eye } from 'lucide-react'; // Biblioteca de ícones SVG
import { Card } from '../components/Card';

// Componente funcional "About"
export const About = () => {
  // Lista de problemas que a plataforma busca resolver
  const problems = [
    'Falta de controle e organização nos agendamentos',
    'Dificuldade de busca psicólogos dispostos a realizar acompanhamentos voluntários',
    'Impossibilidade de mapear perfis de risco com dados',
    'Ausência de ferramentas de análise e acompanhamento'
  ];

  // Lista de soluções propostas
  const solutions = [
    'Sistema digital centralizado com agendamento automatizado',
    'Registro estruturado e seguro de todas as sessões',
    'Painel administrativo com visão completa da agenda',
    'Machine Learning para agrupamento de perfis comportamentais',
    'Interface responsiva, acessível e emocionalmente confortável'
  ];

  return (
    <div> {/* Container principal com espaçamento entre seções */}

      {/* Seção Hero (introdução com logo e descrição) */}
      <section className="text-center py-20 ">
        <div className="max-w-4xl mx-auto">
          {/* Logo centralizado */}
          <div className="w-25 h-25 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
            <img src="/logo.png" alt="Lunysse" className="w-26 h-26 rounded-2xl" />
          </div>
          <Card className=' items-center justify-center mb-10 mx-auto my-auto bg-gradient-to-tl from-light/65 to-white/40  backdrop-blur-sm rounded-full w-lg'>
          <h1 className="text-4xl md:text-5xl font-bold text-dark " style={{ fontFamily: '"Nunito Sans", serif' }}>Sobre o CuideJá</h1>
          </Card>
          <div className=' rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm p-1.5  '>
            <p className="text-xl  text-dark font-bold leading-relaxed mb-6 mx-5 mt-2.5" style={{ fontFamily: '"Hanken Grotesk", serif' }}>
              Somos uma plataforma que une tecnologia e responsabilidade social para otimizar atendimentos psicológicos voluntários em universidades, ONGs e projetos sociais.
            </p>
            <p className="text-lg text-white leading-relaxed mx-7 mb-1.5" style={{ fontFamily: '"Roboto", serif' }}>
              Desenvolvido especificamente para instituições que oferecem apoio psicológico gratuito, nosso sistema organiza agendas, registra históricos e utiliza inteligência artificial para identificar padrões que auxiliam profissionais na tomada de decisões clínicas.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Missão e Visão */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Missão */}
          <div className=" rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm p-5.5 ">
            <div className='flex space-x-2'>
              <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: '"Hanken Grotesk", serif' }}>Nossa Missão</h2>
              <Target className='w-6  mt-1 ' color='#052850' />
            </div>
            <p className="text-white leading-relaxed mb-4" style={{ fontFamily: '"Roboto", serif' }}>
              Desenvolver uma solução digital que organize agendas, registre históricos de sessões e analise padrões de risco emocional, garantindo privacidade, usabilidade e suporte analítico para projetos de impacto social em saúde mental.
            </p>
          </div>
          {/* Visão */}
          <div className="rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm p-5.5">
            <div className='flex space-x-2'>
              <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: '"Hanken Grotesk", serif' }}>Nossa Visão </h2>
              <Eye className='w-6  mt-1 ' color='#052850'/>
            </div>
            <p className="text-white leading-relaxed mb-4" style={{ fontFamily: '"Roboto", serif' }}>
            Ser a principal plataforma de gestão de atendimentos psicológicos voluntários, reconhecida pela inovação tecnológica e compromisso com o bem-estar coletivo.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Problemas e Soluções */}
      <section className="py-5">
        <div className="max-w-6xl mx-auto mb-10">
        <Card className=' items-center justify-center mb-10 mx-auto my-auto bg-gradient-to-tl from-light/65 to-white/40  backdrop-blur-sm rounded-full w-lg '>
          <h2 className="text-3xl font-bold text-dark text-center " style={{ fontFamily: '"Nunito Sans", serif' }}>Problemas que Resolvemos</h2>
          </Card>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lista de problemas */}
            <div className="rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm p-5.5">
              <h3 className="text-2xl font-semibold text-dark mb-4" style={{ fontFamily: '"Hanken Grotesk", serif' }}>Desafios Encontrados</h3>
              <ul className="space-y-3">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {/* Bolinha decorativa */}
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white text-md"  style={{ fontFamily: '"Roboto", serif' }}>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Lista de soluções */}
            <div className="rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm p-5.5">
              <h3 className="text-2xl font-semibold text-dark mb-4" style={{ fontFamily: '"Hanken Grotesk", serif' }}>Nossas Soluções</h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {/* Bolinha decorativa */}
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white text-md" style={{ fontFamily: '"Roboto", serif' }}>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
