import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = getPageMetadata('Sobre | VENTURI');

const team = [
  {
    name: 'Ciro Ramon Vaz',
    role: 'S\u00f3cio-Administrador',
    credential: 'Bacharel em Direito',
    initials: 'CR',
    photo: '/team/ciro.jpg',
    specialties: ['Regulariza\u00e7\u00e3o Fundi\u00e1ria', 'Licenciamento Ambiental', 'Tributa\u00e7\u00e3o Rural', 'Cr\u00e9ditos de Carbono'],
    bio: 'Bacharel em Direito com d\u00e9cada de atua\u00e7\u00e3o estrat\u00e9gica na Pol\u00edcia Militar do Paran\u00e1 (PMPR), onde desenvolveu compet\u00eancias em gest\u00e3o institucional, compliance e interlocu\u00e7\u00e3o com \u00f3rg\u00e3os p\u00fablicos \u2014 capacidades que hoje s\u00e3o o diferencial da assessoria junto a entes ambientais e fundi\u00e1rios. P\u00f3s-graduado em Contabilidade, Tributa\u00e7\u00e3o e Direito do Agroneg\u00f3cio, cursa MBA em Atualiza\u00e7\u00f5es Tribut\u00e1rias e MBA em Cr\u00e9ditos de Carbono. Lidera a Venturi com vis\u00e3o integrada entre leitura regulat\u00f3ria e prova territorial, entregando solu\u00e7\u00f5es patrimoniais seguras e sustent\u00e1veis para o setor rural paranaense.',
  },
  {
    name: 'Eduardo Gabriel F. de Andrade',
    role: 'S\u00f3cio-Administrador',
    credential: 'OAB/PR 58.941',
    initials: 'EA',
    photo: '/team/eduardo.jpg',
    specialties: ['Direito Empresarial', 'Direito Civil', 'Direito Penal', 'Propriedade Intelectual'],
    bio: 'Advogado com atua\u00e7\u00e3o consagrada no Direito Privado e experi\u00eancia em mais de 780 processos judiciais perante o TJPR e tribunais superiores. Especialista em Direito do Consumidor, Direito Empresarial, Direito Civil, Direito de Tr\u00e2nsito, Direito Penal e Propriedade Intelectual, oferece assessoria personalizada com foco em estrat\u00e9gia, agilidade e resultados. Seu hist\u00f3rico de excel\u00eancia no contencioso c\u00edvel e criminal \u00e9 garantia de defesa t\u00e9cnica rigorosa para empresas e pessoas f\u00edsicas.',
  },
  {
    name: 'Geliandra Lopes A. Pereira',
    role: 'S\u00f3cia Especialista',
    credential: 'OAB/PR 115.178',
    initials: 'GA',
    photo: '/team/geliandra.jpg',
    specialties: ['Direito Ambiental', 'Agroneg\u00f3cio', 'EIA/RIMA', 'Compliance Ambiental'],
    bio: 'Advogada ambiental e do agroneg\u00f3cio com mais de 10 anos de experi\u00eancia em contencioso administrativo, compliance ambiental, estudos de impacto ambiental (EIA/RIMA) e assessoria estrat\u00e9gica. Presidente da Comiss\u00e3o de Direito Ambiental da OAB/PR \u2014 Subse\u00e7\u00e3o Ponta Grossa, MBA em Avalia\u00e7\u00e3o de Impacto Ambiental pela UNICURITIBA, palestrante e consultora reconhecida em sustentabilidade e gest\u00e3o p\u00fablica. Sua lideran\u00e7a em media\u00e7\u00e3o e concilia\u00e7\u00e3o ambiental \u00e9 refer\u00eancia no setor.',
  },
  {
    name: 'Jos\u00e9 Alaertes Silveira',
    role: 'S\u00f3cio-Administrador',
    credential: 'OAB/PR 60.934',
    initials: 'JS',
    photo: '/team/jose.jpg',
    specialties: ['Direito do Consumidor', 'Direito Empresarial', 'Direito Civil', 'Precat\u00f3rios'],
    bio: 'Advogado com trajet\u00f3ria s\u00f3lida e consolidada no Direito Privado, com participa\u00e7\u00e3o em mais de 110 processos judiciais perante o TJPR e outros tribunais. Especialista em Direito do Consumidor, Direito Empresarial, Direito Civil e atua\u00e7\u00e3o estrat\u00e9gica em precat\u00f3rios, combina experi\u00eancia de d\u00e9cadas com vis\u00e3o pragm\u00e1tica para entregar solu\u00e7\u00f5es jur\u00eddicas eficientes. Sua assessoria \u00e9 marcada pelo comprometimento com \u00e9tica, precis\u00e3o t\u00e9cnica e defesa intransigente dos interesses de seus clientes.',
  },
];

export default function SobrePage() {
  const { company, stats, methodology } = siteData;

  return (
    <>
      <ScrollReveal />
      <main className="bg-black text-white">
        {/* ===== HERO ===== */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-black/95 to-black overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />

          <div className="section-wrap relative z-10">
            <div className="max-w-3xl reveal">
              <div className="gold-kicker mb-6">Sobre a Venturi</div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
                Excel&ecirc;ncia que{' '}
                <span className="gradient-text">transforma</span>{' '}
                o agro brasileiro
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
                Somos uma consultoria t&eacute;cnica e jur&iacute;dica fundada na convic&ccedil;&atilde;o de que propriedades rurais merecem o mesmo n&iacute;vel de assessoria estrat&eacute;gica que grandes corpora&ccedil;&otilde;es. Combinamos rigor t&eacute;cnico, vis&atilde;o regulat&oacute;ria e expertise jur&iacute;dica para destravar o potencial de cada im&oacute;vel.
              </p>
            </div>
          </div>
        </section>

        {/* ===== MISSION / VALUES ===== */}
        <section className="py-24 md:py-32 border-t border-white/5">
          <div className="section-wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div className="reveal">
                <div className="gold-kicker mb-4">Nossa Miss&atilde;o</div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Proteger patrim&ocirc;nios rurais com intelig&ecirc;ncia e <span className="gradient-text">precis&atilde;o</span>
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">
                  A Venturi nasceu da necessidade real de propriet&aacute;rios rurais que enfrentam desafios fundi&aacute;rios, ambientais e tribut&aacute;rios sem acesso a consultoria de alto n&iacute;vel. Com sede em Ponta Grossa/PR e atendimento em todo o Brasil, integramos as dimens&otilde;es t&eacute;cnica, jur&iacute;dica e regulat&oacute;ria para proteger seu patrim&ocirc;nio.
                </p>
                <p className="text-white/50 leading-relaxed">
                  Cada caso &eacute; tratado com a seriedade de quem entende que por tr&aacute;s de cada hectare h&aacute; hist&oacute;ria, investimento e futuro. Nossa abordagem combina diagn&oacute;stico profundo, estrat&eacute;gia personalizada e execu&ccedil;&atilde;o precisa.
                </p>
              </div>

              <div className="reveal-left space-y-6">
                {[
                  { title: 'Rigor T\u00e9cnico', desc: 'An\u00e1lise documental e territorial com precis\u00e3o cirurg\u00edca. Cada parecer \u00e9 fundamentado em legisla\u00e7\u00e3o vigente e jurisprud\u00eancia consolidada.' },
                  { title: '\u00c9tica Inegoci\u00e1vel', desc: 'Transpar\u00eancia total em cada etapa. Nosso compromisso \u00e9 com a verdade dos fatos e a defesa leg\u00edtima dos seus interesses.' },
                  { title: 'Vis\u00e3o Estrat\u00e9gica', desc: 'N\u00e3o resolvemos apenas o problema imediato. Antecipamos cen\u00e1rios, prevenimos riscos e constru\u00edmos seguran\u00e7a patrimonial de longo prazo.' },
                  { title: 'Atendimento Premium', desc: 'Cada cliente recebe dedica\u00e7\u00e3o exclusiva, com comunica\u00e7\u00e3o clara, prazos cumpridos e acesso direto aos respons\u00e1veis.' },
                ].map((value, i) => (
                  <div key={i} className="premium-card rounded-xl p-6 group">
                    <h3 className="font-semibold text-base mb-2 group-hover:text-venturi-gold transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TEAM ===== */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="section-wrap">
            <div className="reveal mb-16 md:mb-20 text-center">
              <div className="gold-kicker mb-4">Nosso Time</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Quem est&aacute; por tr&aacute;s da <span className="gradient-text">Venturi</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                Uma equipe multidisciplinar que re&uacute;ne direito, gest&atilde;o p&uacute;blica, ci&ecirc;ncia ambiental e vis&atilde;o empresarial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="reveal premium-card rounded-2xl p-8 md:p-10 group"
                >
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    {/* Avatar */}
                    <div className="shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-venturi-gold/20 to-venturi-gold/5 border border-venturi-gold/20 flex items-center justify-center group-hover:border-venturi-gold/40 group-hover:from-venturi-gold/30 transition-all duration-500">
                        <span className="text-venturi-gold font-serif text-2xl font-bold">
                          {member.initials}
                        </span>
                      </div>
                    </div>

                    {/* Header */}
                    <div>
                      <h3 className="font-serif text-xl font-bold group-hover:text-venturi-gold transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-venturi-gold/70 text-sm font-medium mt-1">
                        {member.role}
                      </p>
                      <p className="text-white/30 text-xs mt-1 tracking-wide">
                        {member.credential}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-[0.15em] text-venturi-gold/50 border border-venturi-gold/10 rounded-full px-3 py-1"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        {stats && stats.length > 0 && (
          <section className="py-20 border-y border-white/5 bg-[#050810]">
            <div className="section-wrap">
              <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-serif">
                      {stat.number}
                    </div>
                    <p className="text-white/40 text-sm font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== DIFFERENTIALS ===== */}
        <section className="py-24 md:py-32">
          <div className="section-wrap">
            <div className="reveal mb-16 md:mb-20">
              <div className="gold-kicker mb-4">Por que a Venturi</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold max-w-2xl">
                O que nos torna <span className="gradient-text">diferentes</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
              {[
                {
                  number: '01',
                  title: 'Abordagem Integrada',
                  desc: 'Unimos direito, engenharia, contabilidade e gest\u00e3o ambiental em um \u00fanico diagn\u00f3stico. Voc\u00ea n\u00e3o precisa de cinco escrit\u00f3rios diferentes.',
                },
                {
                  number: '02',
                  title: 'Experi\u00eancia Comprovada',
                  desc: 'Mais de 900 processos judiciais, d\u00e9cada de atua\u00e7\u00e3o em \u00f3rg\u00e3os p\u00fablicos e lideran\u00e7a em comiss\u00f5es da OAB. Nosso time entrega resultado.',
                },
                {
                  number: '03',
                  title: '100% Remoto, Todo o Brasil',
                  desc: 'Com sede em Ponta Grossa/PR, atendemos propriet\u00e1rios rurais em qualquer estado com a mesma qualidade e dedica\u00e7\u00e3o.',
                },
              ].map((diff, i) => (
                <div key={i} className="reveal premium-card rounded-2xl p-8 md:p-10 group">
                  <div className="text-5xl font-serif font-bold text-white/[0.04] mb-6 select-none">
                    {diff.number}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-venturi-gold transition-colors duration-300">
                    {diff.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <SchedulingCTA />
      </main>
    </>
  );
}
