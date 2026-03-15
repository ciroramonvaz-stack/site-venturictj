import Link from 'next/link';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = getPageMetadata('Sobre | VENTURI');

const team = [
  {
    name: 'Ciro Ramon Silveira Barreto Vaz',
    role: 'Sócio-Administrador',
    credential: 'Bacharel em Direito',
    initials: 'CR',
    photo: '/ciro.jpg.jpeg',
    specialties: ['Regularização Fundiária', 'Licenciamento Ambiental', 'Tributação Rural', 'Créditos de Carbono'],
    bio: 'Bacharel em Direito com mais de uma década de atuação estratégica na Polícia Militar do Paraná (PMPR), onde desenvolveu expertise de alto nível em gestão institucional, compliance, inteligência operacional e articulação direta com órgãos públicos das esferas estadual e federal — competências que hoje aceleram a resolução de processos ambientais e fundiários complexos. Pós-graduado em Contabilidade, Tributação e Direito do Agronegócio, cursa simultaneamente MBA em Atualizações Tributárias e MBA em Créditos de Carbono e Sustentabilidade. Idealizador e líder da Venturi, conecta leitura regulatória aprofundada, prova territorial e visão de mercado para destravar patrimônios rurais travados por embargos, sobreposições e pendências fundiárias — sempre com segurança jurídica e resultado mensurável.',
  },
  {
    name: 'Eduardo Gabriel F. de Andrade',
    role: 'Sócio-Administrador',
    credential: 'OAB/PR 58.941',
    initials: 'EA',
    photo: '/eduardo.jpg.jpeg',
    specialties: ['Direito Empresarial', 'Direito Civil', 'Direito Penal', 'Propriedade Intelectual'],
    bio: 'Advogado com atuação consolidada no Direito Privado e mais de 780 processos conduzidos perante o TJPR e tribunais superiores. Especialista em Direito Empresarial, Civil, Penal e Propriedade Intelectual, entrega assessoria com foco em estratégia e resultado mensurável. Referência em contencioso cível e criminal, assegura defesa técnica rigorosa para produtores rurais e empresas do agro.',
  },
  {
    name: 'Geliandra Lopes A. Pereira',
    role: 'Sócia Especialista',
    credential: 'OAB/PR 115.178',
    initials: 'GA',
    photo: '/geliandra.jpg.jpeg',
    specialties: ['Direito Ambiental', 'Agronegócio', 'EIA/RIMA', 'Compliance Ambiental'],
    bio: 'Advogada ambiental e do agronegócio com mais de 10 anos em contencioso administrativo, compliance ambiental e estudos de impacto (EIA/RIMA). Presidente da Comissão de Direito Ambiental da OAB/PR — Subseção Ponta Grossa, MBA em Avaliação de Impacto Ambiental pela UNICURITIBA. Referência em mediação ambiental, transforma embargos e autuações em acordos viáveis para o produtor rural.',
  },
  {
    name: 'José Alaertes Silveira',
    role: 'Sócio-Administrador',
    credential: 'OAB/PR 60.934',
    initials: 'JS',
    photo: '/jose.jpg.jpeg',
    specialties: ['Direito do Consumidor', 'Direito Empresarial', 'Direito Civil', 'Precatórios'],
    bio: 'Advogado com trajetória consolidada no Direito Privado e mais de 110 processos conduzidos perante o TJPR e tribunais superiores. Especialista em Direito Empresarial, Civil, do Consumidor e atuação estratégica em precatórios, combina décadas de experiência com visão pragmática. Sua assessoria é marcada pela ética, precisão técnica e defesa intransigente dos interesses patrimoniais de seus clientes.',
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
                <span className="gradient-text">destrava</span>{' '}
                patrim&ocirc;nios rurais
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
                Consultoria técnica e jurídica especializada em propriedades rurais embargadas, sobrepostas com UC ou com pendências fundiárias, ambientais e tributárias. Reunimos todas as frentes num único escritório — para que você não precise de cinco.
              </p>
            </div>
          </div>
        </section>

        {/* ===== MISSION / VALUES ===== */}
        <section className="py-24 md:py-32 border-t border-white/5">
          <div className="section-wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div className="reveal">
                <div className="gold-kicker mb-4">Nossa Missão</div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Destravar propriedades rurais com inteligência técnica e <span className="gradient-text">segurança jurídica</span>
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">
                  A Venturi nasceu da frustração real de proprietários que perdiam prazos, pagavam multas evitáveis e viam seu patrimônio desvalorizar por falta de assessoria integrada. Com sede em Ponta Grossa/PR e atuação em todo o Brasil, reunimos as frentes técnica, jurídica e regulatória num único escritório — para que você não precise de cinco.
                </p>
                <p className="text-white/50 leading-relaxed">
                  Cada caso é tratado com a seriedade de quem sabe que por trás de cada hectare há gerações de trabalho, capital investido e planos de sucessão. Nossa abordagem combina diagnóstico profundo, estratégia sob medida e execução com prazo definido.
                </p>
              </div>

              <div className="reveal-left space-y-6">
                {[
                  { title: 'Rigor Técnico', desc: 'Análise documental e territorial com precisão cirúrgica. Cada parecer é fundamentado em legislação vigente, jurisprudência consolidada e validação cruzada de bases públicas.' },
                  { title: 'Ética Inegociável', desc: 'Transparência total em cada etapa — você acompanha cada movimentação em tempo real. Nosso compromisso é com a verdade dos fatos e a defesa legítima dos seus interesses.' },
                  { title: 'Visão Estratégica', desc: 'Não resolvemos apenas o embargo atual. Antecipamos cenários regulatórios, prevenimos autos de infração futuros e construímos segurança patrimonial que atravessa gerações.' },
                  { title: 'Atendimento Premium', desc: 'Cada cliente tem gestor dedicado, comunicação semanal com status atualizado, prazos definidos em contrato e acesso direto aos sócios responsáveis.' },
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
                Quem está por trás da <span className="gradient-text">Venturi</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                Uma equipe multidisciplinar que reúne direito, gestão pública, ciência ambiental e visão empresarial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="reveal premium-card rounded-2xl p-8 md:p-10 group"
                >
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    {/* Avatar with photo */}
                    <div className="shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-venturi-gold/20 to-venturi-gold/5 border border-venturi-gold/20 flex items-center justify-center group-hover:border-venturi-gold/40 group-hover:from-venturi-gold/30 transition-all duration-500 overflow-hidden relative">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover rounded-2xl"
                          sizes="80px"
                        />
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
                  desc: 'Unimos direito, engenharia, contabilidade e gestão ambiental em um único diagnóstico. Você não precisa de cinco escritórios diferentes.',
                },
                {
                  number: '02',
                  title: 'Experiência Comprovada',
                  desc: 'Mais de 900 processos judiciais, década de atuação em órgãos públicos e liderança em comissões da OAB. Nosso time entrega resultado.',
                },
                {
                  number: '03',
                  title: '100% Remoto, Todo o Brasil',
                  desc: 'Com sede em Ponta Grossa/PR, atendemos proprietários rurais em qualquer estado com a mesma qualidade e dedicação.',
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
