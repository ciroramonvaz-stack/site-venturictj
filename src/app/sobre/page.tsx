import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/content/siteData';

export const metadata: Metadata = {
  title: 'Sobre | Venturi CTJ - Especialistas em Regularização Fundiária',
  description: 'Conheça o time de especialistas da Venturi CTJ. Mais de 900 processos resolvidos em 8 estados brasileiros. Direito, Técnica e Meio Ambiente, sob um mesmo teto.',
};

export default function SobrePage() {
  const partners = [
    {
      name: 'Ciro Ramon Vaz',
      role: 'Sócio-Fundador & Diretor de Operações',
      credential: 'Bacharel em Direito | Especialista em Regularização Fundiária',
      image: '/ciro.jpg.jpeg',
      specialties: ['Regularização Fundiária', 'Sobreposição UC', 'Gestão de Casos'],
      bio: 'Ciro fundou a Venturi após perceber que proprietários rurais perdiam patrimônio não por falta de direito, mas por falta de orientação técnica adequada. Com formação em Direito e especialização em questões fundiárias, já coordenou mais de 200 diagnósticos de imóveis rurais em 8 estados brasileiros. Sua abordagem combina rigor técnico com comunicação direta — o cliente sempre sabe exatamente onde está e para onde vai. Lidera a equipe de análise e é responsável pela estratégia de cada caso que entra na Venturi.',
    },
    {
      name: 'Eduardo Gabriel',
      role: 'Sócio & Diretor Jurídico',
      credential: 'OAB/PR 58.941',
      image: '/eduardo.jpg.jpeg',
      specialties: ['Contencioso', 'Defesa Administrativa', 'Processos Judiciais'],
      bio: 'Eduardo é o advogado que os clientes querem do seu lado quando o caso é complexo. Com inscrição na OAB/PR sob o número 58.941, atua há mais de uma década em contencioso ambiental e fundiário, com experiência direta em varas federais, tribunais estaduais e processos administrativos junto a ICMBio, IBAMA e IAT. Já conduziu mais de 350 processos judiciais e administrativos, com taxa de êxito superior a 90% em reversão de embargos ambientais. É o responsável por toda a estratégia jurídica e defesa processual da Venturi.',
    },
    {
      name: 'Geliandra Lopes',
      role: 'Sócia Especialista',
      credential: 'OAB/PR 115.178',
      image: '/geliandra.jpg.jpeg',
      specialties: ['Direito Ambiental', 'CAR/APP/Reserva Legal', 'Pareceres Técnicos'],
      bio: 'Geliandra é referência interna em Direito Ambiental. Com OAB/PR 115.178, atua na interseção entre legislação ambiental e direitos do proprietário rural. Sua expertise cobre APPs, Reserva Legal, Zonas de Amortecimento, CAR e todas as restrições ambientais que podem travar uma propriedade. Participou de comissões da OAB-PR sobre meio ambiente e é responsável pelos pareceres técnicos ambientais que a Venturi entrega aos clientes e apresenta aos órgãos públicos.',
    },
    {
      name: 'José Alaertes',
      role: 'Sócio & Diretor Empresarial',
      credential: 'OAB/PR 60.934',
      image: '/jose.jpg.jpeg',
      specialties: ['Direito Empresarial', 'Contratos Agrários', 'Sucessão e Inventário'],
      bio: 'José traz para a Venturi a visão empresarial e patrimonial que complementa a expertise técnica e ambiental do time. Com OAB/PR 60.934 e décadas de experiência em Direito Empresarial, é especialista em estruturação societária, contratos agrários, inventários rurais e planejamento sucessório. Quando um cliente precisa proteger patrimônio, estruturar uma holding familiar ou negociar contratos de arrendamento, José é quem lidera. Já assessorou mais de 150 operações envolvendo imóveis rurais.',
    },
  ];

  const values = company.values.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#050810] to-[#0a0f1a] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-[#C5A059]/20 rounded-full border border-[#C5A059]/50">
            <span className="text-sm font-semibold text-[#C5A059]">Quem Somos</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Por trás de cada propriedade destravada, existe um time que entende o campo.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Combinamos expertise jurídica, análise técnica rigorosa e especialização ambiental sob um único teto. Não trabalhamos por convênio ou terceirização — nossos sócios entram pessoalmente em cada estratégia, desde o diagnóstico até a resolução.
          </p>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#050810] mb-4">Nossa Missão</h2>
            <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
              {company.mission}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border-l-4 border-[#C5A059] shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#050810] mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#050810] mb-4">O Time</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Quatro sócios com formação multidisciplinar, mais de 25 anos de atuação combinada e um único objetivo: resolver o caso do seu jeito.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[#C5A059]/30">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                          priority={idx < 2}
                        />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[#050810] mb-1">{partner.name}</h3>
                      <p className="text-[#C5A059] font-semibold text-sm mb-2">{partner.role}</p>
                      <p className="text-gray-700 text-sm mb-4">{partner.credential}</p>

                      <div className="flex flex-wrap gap-2">
                        {partner.specialties.map((spec, specIdx) => (
                          <span
                            key={specIdx}
                            className="inline-block px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#050810] text-xs font-medium rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                    {partner.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#050810] mb-4">Por Que Confiam em Nós</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-t-4 border-[#C5A059] shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C5A059]/20 flex items-center justify-center">
                  <span className="text-[#C5A059] font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#050810] mb-2">Equipe Multidisciplinar</h3>
                  <p className="text-gray-700">
                    Jurídico, técnico fundiário e ambiental trabalham integrados. Sem silos, sem intermediários.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-t-4 border-[#C5A059] shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C5A059]/20 flex items-center justify-center">
                  <span className="text-[#C5A059] font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#050810] mb-2">Atuação Nacional</h3>
                  <p className="text-gray-700">
                    Presença comprovada em 8 estados brasileiros. Totalmente remoto — não importa onde você está.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-t-4 border-[#C5A059] shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C5A059]/20 flex items-center justify-center">
                  <span className="text-[#C5A059] font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#050810] mb-2">Mais de 900 Processos</h3>
                  <p className="text-gray-700">
                    Experiência comprovada em casos complexos. Taxa de êxito acima de 90% em reversão de embargos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-t-4 border-[#C5A059] shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C5A059]/20 flex items-center justify-center">
                  <span className="text-[#C5A059] font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#050810] mb-2">Acesso Direto ao Especialista</h3>
                  <p className="text-gray-700">
                    Resposta em menos de 2 horas. Você fala com o sócio responsável, nunca com uma secretária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#050810] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#C5A059] mb-2">900+</div>
              <p className="text-gray-400 font-medium">Processos Resolvidos</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#C5A059] mb-2">150+</div>
              <p className="text-gray-400 font-medium">Propriedades Regularizadas</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#C5A059] mb-2">8</div>
              <p className="text-gray-400 font-medium">Estados Atendidos</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-[#C5A059] mb-2">&lt;2h</div>
              <p className="text-gray-400 font-medium">Tempo de Retorno</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#050810] to-[#0a0f1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Quer conversar com o time?
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Envie uma mensagem agora. Você vai falar direto com um dos nossos sócios em menos de 2 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de conversar com o time da Venturi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A059] hover:bg-[#D4AF6F] text-[#050810] font-bold rounded-lg transition-colors duration-200 shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.168.505-2.236 1.236-3.101 2.115a9.847 9.847 0 00-2.115 3.101 9.833 9.833 0 00-.949 4.255c0 5.445 4.431 9.85 9.85 9.85 1.148 0 2.271-.195 3.345-.576a9.864 9.864 0 003.101-2.115 9.847 9.847 0 002.115-3.101 9.833 9.833 0 00.949-4.255c0-5.445-4.431-9.85-9.85-9.85m8.502.13c2.46 0 4.442-1.979 4.442-4.422 0-2.444-1.982-4.423-4.442-4.423S8.041 1.321 8.041 3.765c0 2.443 1.982 4.422 4.441 4.422Z" />
              </svg>
              Envie uma Mensagem via WhatsApp
            </a>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 font-bold rounded-lg transition-colors duration-200"
            >
              Ou Acesse o Formulário
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
