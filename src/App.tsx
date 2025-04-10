import { useState } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  FaStar,
  FaSmile,
  FaCreditCard,
  FaBuilding,
  FaStethoscope,
  FaSyringe,
} from "react-icons/fa";

import { GiTooth, GiToothbrush, GiPuzzle, GiScalpel } from "react-icons/gi";
import { FaRegCommentDots } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Benefits = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <motion.div
    className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
    whileHover={{
      scale: 1.02,
      y: -5,
      backgroundColor: "rgba(210, 180, 128, 0.1)",
      transition: { duration: 0.2 },
    }}
    initial={fadeIn.initial}
    animate={fadeIn.animate}
    viewport={{ once: true }}
  >
    <motion.div
      className="bg-primary-light/10 p-3 rounded-xl"
      whileHover={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="text-primary w-8 h-8" />
    </motion.div>
    <div>
      <h3 className="font-semibold text-lg text-primary-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Statistic = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-4xl font-bold text-gray-700 mb-2">{number}</div>
    <div className="text-sm font-bold text-gray-600">{label}</div>
  </motion.div>
);

const ProcedureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <motion.div
    className="bg-white p-6 rounded-2xl shadow-lg text-center"
    whileHover={{
      scale: 1.02,
      backgroundColor: "rgba(210, 180, 128, 0.1)",
      transition: { duration: 0.2 },
    }}
    initial={fadeIn.initial}
    animate={fadeIn.animate}
    viewport={{ once: true }}
  >
    <motion.div
      className="bg-primary-light/10 p-3 rounded-xl w-fit mb-4 mx-auto"
      whileHover={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="text-primary w-6 h-6" />
    </motion.div>
    <h3 className="font-semibold text-lg text-primary-dark mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 overflow-hidden"
      initial={false}
      animate={{
        backgroundColor: isOpen ? "rgba(210, 180, 128, 0.05)" : "transparent",
      }}
    >
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left rounded-lg hover:bg-cream-light/10 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800 flex items-center gap-3">
          <span
            className={`text-primary transition-colors duration-200 ${
              isOpen ? "text-primary-dark" : ""
            }`}
          >
            Q.
          </span>
          {question}
        </span>
        <span
          className={`transform transition-transform duration-300 text-primary ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="px-4 pb-5 text-gray-600 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const testimonials = [
  {
    text: "Gostaria de expressar meu sincero agradecimento pelo excelente atendimento que recebi durante minha consulta. Sua atenção, profissionalismo e cuidado fizeram toda a diferença na minha experiência. Fiquei muito satisfeita com o tratamento e a forma como vocês explicaram cada etapa do processo. É reconfortante saber que estou em boas mãos.",
    author: "Thaís Matos",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    text: "Bom dia! Dormi super bem, perdi até a novela, rsrs! Geralmente durmo meia-noite, mas ontem deitei às 21h e acordei me sentindo ótima. Tomei o remédio que a Dra. Maria do Carmo me passou e a dor que estava começando a aparecer, sumiu. Dra. Maria do Carmo, agradeço imensamente a Deus por ter colocado em meu caminho uma profissional tão carinhosa e competente como a senhora!",
    author: "Adélio Nunes",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
  {
    text: "Estou muito feliz com o resultado do clareamento! A praticidade e facilidade de uso da contenção surpreenderam as minhas expectativas. Graças à orientação da Marcela, fiz a troca pela contenção Vivera, e posso dizer com certeza que foi o melhor investimento que fiz! Além de ser auxiliar no clareamento, ela me permite fazer uma limpeza muito mais profunda.",
    author: "Talita Moura",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80",
  },
  {
    text: "Nunca imaginei que um tratamento odontológico pudesse ser tão tranquilo! A equipe da Excelence me deixou muito confortável desde o primeiro momento. O resultado do meu tratamento superou todas as expectativas. Agora tenho confiança para sorrir em qualquer situação!",
    author: "Roberto Silva",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    text: "Fiz implantes dentários e foi uma experiência surpreendentemente tranquila. A tecnologia utilizada pela equipe da Excelence minimizou qualquer desconforto. O atendimento personalizado fez toda a diferença na minha recuperação. Recomendo a todos que precisam de tratamento odontológico de qualidade!",
    author: "Carolina Mendes",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
];

const TestimonialCard = ({
  text,
  author,
  image,
}: {
  text: string;
  author: string;
  image: string;
}) => (
  <div className="keen-slider__slide p-2">
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary-light/10 rounded-bl-full" />
      <FaRegCommentDots className="text-primary w-8 h-8 mb-4" />
      <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
        "{text}"
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-primary-dark">{author}</p>
          <p className="text-sm text-gray-500">Paciente Excelence</p>
        </div>
      </div>
    </motion.div>
  </div>
);

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
    },
    drag: true,
    renderMode: "performance",
    defaultAnimation: {
      duration: 2000,
    },
    animationEnded(s) {
      setTimeout(() => {
        s.next();
      }, 3000);
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-light to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-16 overflow-hidden">
        {/* Fundo com imagens diferentes para mobile e desktop */}
        <div className="absolute inset-0 z-0">
          {/* Imagem para dispositivos móveis (visível apenas em telas menores que md) */}
          <img
            src="https://i.postimg.cc/yN3bwdwd/Whats-App-Image-2025-03-12-at-14-47-22-1.jpg"
            alt="Consultório Odontológico (Mobile)"
            className="w-full h-full object-cover object-[center_35%] opacity-80 block md:hidden"
          />

          {/* Imagem para telas médias e maiores (oculta em telas menores que md) */}
          <img
            src="https://i.postimg.cc/fbxNX1J2/Whats-App-Image-2025-03-12-at-14-47-22.jpg"
            alt="Consultório Odontológico"
            className="w-full h-full object-cover object-[center_35%] opacity-80 hidden md:block"
          />
        </div>

        {/* Sobreposição de gradiente no fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/50 to-transparent z-0" />

        {/* Conteúdo principal */}
        <motion.div
          className="container mx-auto text-center z-10 mt-20 md:mt-32"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed py-4 px-6 rounded-lg">
              <strong>Transforme seu sorriso</strong> com tecnologia avançada e
              profissionais especializados em um{" "}
              <strong>ambiente acolhedor</strong> e sofisticado.
            </p>
          </motion.div>

          <motion.button
            className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg flex items-center gap-2 mx-auto group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={pulseAnimation}
          >
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <FaCalendarAlt className="w-5 h-5" />
            <span className="relative z-10">AGENDAR CONSULTA</span>
          </motion.button>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Statistic number="30+" label="Anos de Experiência" />
            <Statistic number="10k+" label="Pacientes Atendidos" />
            <Statistic number="98%" label="Satisfação" />
          </motion.div>
        </motion.div>

        {/* Gradiente de transição no rodapé da seção */}
        <motion.div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">
              Nossa Clínica Atende Quem
            </h2>
            <p className="text-gray-600 text-lg">
              Conheça os casos que solucionamos com excelência e dedicação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                "Deseja um sorriso bonito e confiante.",
                "Busca atendimento humanizado e sem dor",
                "Necessita de tratamento ortodôntico, restaurador e reabilitador",
                "Não abre mão de procedimentos e profissionais modernos e minimamente invasivos",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(210, 180, 128, 0.1)",
                  }}
                >
                  <FaCheckCircle className="text-primary flex-shrink-0 w-6 h-6" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://i.postimg.cc/jSqpk3Gp/fnda.jpg"
                alt="Atendimento Odontológico"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">
              Nossos Procedimentos
            </h2>
            <p className="text-gray-600 text-lg">
              Disponibilizamos uma seleção exclusiva de tratamentos
              odontológicos para realçar a saúde e a beleza seu sorriso
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcedureCard
              icon={FaStethoscope}
              title="Clínica Geral"
              description="Atendimento especializado para adultos e crianças"
            />
            <ProcedureCard
              icon={GiTooth}
              title="Ortodontia"
              description="Invisalign e aparelhos convencionais"
            />
            <ProcedureCard
              icon={FaSmile}
              title="Estética Dental"
              description="Facetas em resinas e restaurações estéticas"
            />
            <ProcedureCard
              icon={GiTooth}
              title="Prótese Dental"
              description="Protocolo, prótese total, parcial e unitária"
            />
            <ProcedureCard
              icon={GiToothbrush}
              title="Implante"
              description="Implantes dentários de última geração"
            />
            <ProcedureCard
              icon={FaSyringe}
              title="Endodontia"
              description="Tratamento de canal com tecnologia avançada"
            />
            <ProcedureCard
              icon={GiPuzzle}
              title="Restaurações"
              description="Restaurações estéticas e funcionais"
            />
            <ProcedureCard
              icon={GiScalpel}
              title="Exodontia"
              description="Extrações com técnicas minimamente invasivas"
            />
          </div>

          <motion.button
            className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg flex items-center gap-2 mx-auto mt-12 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={pulseAnimation}
          >
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <FaCalendarAlt className="w-5 h-5" />
            <span className="relative z-10">AGENDE SUA AVALIAÇÃO</span>
          </motion.button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 bg-gradient-to-b from-white to-cream-light/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(210,180,128,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">
              Por que escolher a Excelence?
            </h2>
            <p className="text-gray-600 text-lg">
              Oferecemos uma experiência única em odontologia, combinando
              expertise, tecnologia e conforto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Benefits
              icon={FaStar}
              title="Atendimento Especializado"
              description="Profissionais altamente qualificados para cuidar de adultos e crianças com toda atenção necessária."
            />
            <Benefits
              icon={GiTooth}
              title="Ortodontia Moderna"
              description="Tecnologias avançadas como Invisalign e aparelhos autoligados para resultados superiores."
            />
            <Benefits
              icon={FaSmile}
              title="Estética Dental"
              description="Procedimentos estéticos personalizados para um sorriso natural e harmonioso."
            />
            <Benefits
              icon={GiToothbrush}
              title="Implantes Avançados"
              description="Técnicas minimamente invasivas e planejamento digital para máxima precisão."
            />
            <Benefits
              icon={FaBuilding}
              title="Ambiente Premium"
              description="Consultório moderno com equipamentos de última geração em localização privilegiada."
            />
            <Benefits
              icon={FaCreditCard}
              title="Facilidade de Pagamento"
              description="Diversas opções de pagamento e parcelamento para seu conforto financeiro."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(210,180,128,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">
              Histórias de Transformação
            </h2>
            <p className="text-gray-600 text-lg">
              Conheça alguns dos nossos casos de sucesso e veja como
              transformamos sorrisos e vidas.
            </p>
          </motion.div>

          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>

            {loaded && instanceRef.current && (
              <div className="flex justify-center gap-2 mt-8">
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length
                  ).keys(),
                ].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "bg-primary w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}

            {loaded && instanceRef.current && (
              <div className="hidden md:flex">
                <button
                  onClick={() => instanceRef.current?.prev()}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-primary-light/10 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 19L8 12L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => instanceRef.current?.next()}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-primary-light/10 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L16 12L9 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <motion.button
            className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg flex items-center gap-2 mx-auto mt-12 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={pulseAnimation}
          >
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <FaCalendarAlt className="w-5 h-5" />
            <span className="relative z-10">TRANSFORME SEU SORRISO AGORA</span>
          </motion.button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-cream-light/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,180,128,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">
              Dúvidas Frequentes
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Encontre respostas para as principais dúvidas sobre nossos
              tratamentos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <FAQ
                question="Como marcar uma consulta?"
                answer="É simples! Basta clicar no botão de agendamento ou nos contatar via WhatsApp. Nossa equipe está pronta para atendê-lo e agendar sua avaliação gratuita."
              />
              <FAQ
                question="Onde estamos localizados?"
                answer="Estamos estrategicamente localizados no Shopping Mestre Álvaro: Av. João Palácio, 300, Centro Empresarial, Torre B – Salas 605/606, Serra – ES. Um ambiente sofisticado e de fácil acesso."
              />
              <FAQ
                question="A clínica atende crianças?"
                answer="Sim! Temos uma equipe especializada em odontopediatria, preparada para atender crianças de todas as idades em um ambiente acolhedor e divertido."
              />
              <FAQ
                question="Quanto tempo dura uma consulta inicial?"
                answer="Nossa consulta de avaliação dura aproximadamente 40 minutos, tempo suficiente para conhecermos suas necessidades, realizar um exame completo e elaborar um plano de tratamento personalizado."
              />
              <FAQ
                question="Quanto tempo dura o clareamento dental?"
                answer="O resultado do clareamento dental pode durar de 1 a 3 anos, dependendo dos seus hábitos alimentares, higiene bucal e cuidados pós-tratamento. Oferecemos orientações personalizadas para prolongar os resultados."
              />
              <FAQ
                question="Os tratamentos são dolorosos?"
                answer="Não! Utilizamos técnicas modernas e minimamente invasivas, além de anestesia adequada quando necessário, garantindo seu conforto durante todo o procedimento."
              />
            </div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://i.postimg.cc/XqxGn6Ch/Whats-App-Image-2025-02-27-at-13-58-24.jpg"
                alt="Consultório Odontológico"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img
                src="https://i.postimg.cc/50ZZj3m5/Log2.png"
                alt="Excelence Odontologia Integrada"
                className="h-16 mb-4"
              />
              <p className="text-sm opacity-80">
                Transformando sorrisos e vidas com excelência e tecnologia de
                ponta.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Endereço</h3>
              <address className="not-italic text-sm opacity-80">
                Av. João Palácio, 300
                <br />
                Centro Empresarial do Shopping Mestre Álvaro
                <br />
                Torre B, Salas 605 e 606
                <br />
                Eurico Salles | Serra | ES
                <br />
                CEP: 29160-169
              </address>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <motion.a
                href="tel:+5527996588600"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
              >
                <FaPhoneAlt className="w-4 h-4" />
                (27) 99658-8600
              </motion.a>

              <motion.button
                className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-full text-sm shadow-lg flex items-center gap-2 mt-4 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <FaCalendarAlt className="w-4 h-4" />
                <span className="relative z-10">Agendar Consulta</span>
              </motion.button>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
            © {new Date().getFullYear()} Excelence Odontologia Integrada. Todos
            os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/5527996588600"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 flex items-center gap-2 hover:bg-green-600 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={pulseAnimation}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden md:inline">Agendar Consulta</span>
      </motion.a>
    </div>
  );
}

export default App;
