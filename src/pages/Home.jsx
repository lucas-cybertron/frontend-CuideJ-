// Importações necessárias
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ClipboardClock, Cross } from "lucide-react";

// Página inicial (Home)
export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl"
        >
          {/* Logo centralizada */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl overflow-hidden bg-white">
            <img
              src="/logo.png"
              alt="CuideJá"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nome do sistema */}
          <Card className="flex items-center justify-center mx-auto bg-light/50 backdrop-blur-sm rounded-full w-fit px-8 py-3 mb-3">
            <h1
              className="text-4xl md:text-6xl font-bold text-dark"
              style={{ fontFamily: '"Nunito Sans", serif' }}
            >
              CuideJá
            </h1>
          </Card>

          {/* Cards responsivos */}
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 mt-10 mx-auto max-w-6xl px-4">
            {/* Card 1 */}
            <Card className="flex flex-col items-center justify-center rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm p-6 text-center shadow-lg">
              <ClipboardClock className="w-16 h-16 mx-auto mb-4" color="#ffffff" />
              <h1
                className="text-2xl text-white font-bold font-[Hanken Grotesk]"
              >
                Agende Sua Consulta<br />Agora
              </h1>
            </Card>

            {/* Card 2 */}
            <Card className="flex flex-col items-center rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm p-6 text-center shadow-lg">
              <h1
                className="text-3xl md:text-4xl font-bold text-white mb-3 font-[Hanken Grotesk]"
              >
                Faça parte da mudança
              </h1>
              <p className="text-white text-lg md:text-2xl font-roboto mb-4">
                Una tecnologia e responsabilidade<br />
                social. Ajude a democratizar<br />
                o acesso à saúde mental<br />
                através de uma plataforma pensada<br />
                para o bem-estar coletivo
              </p>
              <Button
                variant="customise"
                size="custom"
                className="mt-auto font-[Hanken Grotesk]"
              >
                Crie Sua Conta Agora
              </Button>
            </Card>

            {/* Card 3 */}
            <Card className="flex flex-col items-center justify-center rounded-3xl bg-gradient-to-tl from-light/65 to-white/40 backdrop-blur-sm p-6 text-center shadow-lg">
              <Cross className="w-16 h-16 mx-auto mb-4" color="#ffffff" />
              <h1 className="text-white text-2xl font-bold">
                Sua Saúde<br />Nossa Prioridade
              </h1>
            </Card>
          </div>

          {/* Texto final */}
          <h1 className="text-dark text-2xl md:text-3xl font-bold mx-auto mt-10 font-[Hanken Grotesk] max-w-4xl leading-snug">
            Facilitando o acesso ao cuidado psicológico, com empatia e inovação.
          </h1>
        </motion.div>
      </section>
    </div>
  );
};
