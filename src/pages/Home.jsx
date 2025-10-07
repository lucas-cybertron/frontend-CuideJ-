// Importações necessárias
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import { motion } from 'framer-motion'; // Para animações suaves
import { Button } from '../components/Button'; // Botão customizado do projeto
import { Card } from '../components/Card';
import { ClipboardClock, Cross } from 'lucide-react';

// Página inicial (Home)
export const Home = () => {
  return (
    <div className = "mt-10" >
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center text-center ">
        <div>
          <div>
            {/* Animação de entrada do framer-motion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Início invisível + deslocado
              animate={{ opacity: 1, y: 0 }}   // Anima até visível + posição normal
              transition={{ duration: 0.8 }}
            >
              {/* Logo centralizada */}
              <div className="w-32 h-32 rounded-3xl flex items-center justify-center mx-auto -my-40 mb-10 shadow-2xl overflow-hidden bg-white">
                <img src="/logo.png" alt="CuideJá" className="w-full h-full object-cover" />
              </div>

              {/* Nome do sistema */}
              <Card className='flex items-center justify-center mx-auto bg-light/50 backdrop-blur-sm rounded-full w-sm mb-1.5'>
                <h1 className="text-5xl md:text-6xl font-bold text-dark   " style={{ fontFamily: '"Nunito Sans", serif' }}>
                  CuideJá
                </h1>
              </Card>
              <div className='flex w-auto space-x-10 mt-10 mx-auto'>
                <Card className='  rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm'>
                  <ClipboardClock className=' size-50 mx-auto ' color='#ffffff' />
                  <h1 className='text-2xl text-white font-bold '
                    style={{ fontFamily: '"Hanken Grotesk", serif' }}>
                  Agende Sua Consulta<br/> Agora</h1>
                </Card>
                <Card className= ' rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm'>
                    <h1 className='text-4xl font-bold text-white text-center ' style={{ fontFamily: '"Hanken Grotesk", serif' }}>Faça parte da mudança</h1>
                    <p className='text-white text-2xl font-[roboto]'>Una tecnologia e responsabilidade <br/> social. Ajude a democratizar <br/> o acesso à saúde mental <br/> através de uma plataforma pensada para o bem-estar coletivo</p>
                    <Button variant='customise' size='custon' style={{ fontFamily: '"Hanken Grotesk", serif' }}>
                      Crie Sua Conta Agora
                    </Button>
                </Card>
                <Card className=' rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm'>
                  <Cross className='size-50' color='#ffffff' />
                  <h1 className='text-white text-center text-2xl font-bold'>Sua Saude <br/> Nossa Prioridade</h1>
                </Card>
              </div>
              <h1 className=' text-dark text-3xl font-bold mx-auto mt-10 font-[Hanken Grotesk]'>Facilitando o acesso ao cuidado psicológico, com empatia e inovação</h1>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
