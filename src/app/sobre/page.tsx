import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata('Sobre | VENTURI');

const socios = [
  {
    nome: 'Ciro Ramon Silveira Barreto Vaz',
    oab: 'Bacharel em Direito · 40º Exame da OAB aprovado',
    cargo: 'Consultor Fundiário & Tributário Rural',
    foto: '/team/Foto_Ciro.jpeg',
    bio: 'Bacharel em Direito com 10 anos de carreira na Polícia Militar do Paraná, onde desenvolveu rigor técnico, gestão e interlocução institucional com órgãos públicos. Pós-graduado em Contabilidade, Tributação e Direito do Agronegócio (EBPÓS). Atua com abordagem integrada entre leitura regulatória e prova territorial — regularização fundiária, licenciamento ambiental, tributação rural e créditos de carbono. Sócio-fundador da Venturi.',
    areas: ['Regularização Fundiária', 'Tributação Rural', 'Licenciamento Ambiental', 'Créditos de Carbono'],
  },
  {
    nome: 'Eduardo Gabriel Ferreira de Andrade',
    oab: 'Advogado · OAB/PR 58.941',
    cargo: 'Advogado | Direito Privado & Tributário',
    foto: '/team/Foto_Eduardo.jpeg',
    bio: 'Sócio-administrador da Andrade e Silveira Sociedade de Advogados (Ponta Grossa/PR). Especialista em Direito do Consumidor, Empresarial, Civil, Tributário e Propriedade Intelectual. Mais de 780 processos no TJPR e outros tribunais. Atua com foco em soluções estratégicas e personalizadas para empresas e pessoas físicas.',
    areas: ['Direito Empresarial', 'Tributário', 'Contencioso Cível'],
  },
  {
    nome: 'Geliandra Lopes Alves Pereira',
    oab: 'Advogada · OAB/PR 115.178',
    cargo: 'Advogada Ambiental & do Agronegócio',
    foto: '/team/Foto_Geliandra.jpeg',
    bio: 'Especialista em Direito Ambiental, Agronegócio, Direito Administrativo e Sustentabilidade. Mais de 10 anos em contencioso administrativo, compliance ambiental, EIA/RIMA e mediação. Presidente da Comissão de Direito Ambiental da OAB/PR – Subseção Ponta Grossa. MBA em Avaliação de Impacto Ambiental (UNICURITIBA). Palestrante e consultora em sustentabilidade e gestão pública.',
    areas: ['Direito Ambiental', 'Agronegócio', 'Compliance Ambiental', 'EIA/RIMA'],
  },
  {
    nome: 'José Alaertes Silveira',
    oab: 'Advogado · OAB/PR 60.934',
    cargo: 'Advogado | Direito Privado & Tributário',
    foto: '/team/Foto_José_Alaertes.jpeg',
    bio: 'Sócio-administrador da Andrade e Silveira Sociedade de Advogados (Ponta Grossa/PR). Trajetória consolidada no Direito Privado com foco em Direito do Consumidor, Empresarial, Civil e Tributário. Mais de 110 processos no TJPR e outros tribunais. Comprometido com excelência, ética e soluções estratégicas para empresas e pessoas físicas.',
    areas: ['Direito Civil', 'Tributário', 'Contencioso Empresarial'],
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        kicker="Quem somos"
        title="Equipe com profundidade técnica e responsabilidade territorial"
        description="A Venturi reúne advogados e consultores especializados em direito rural, ambiental, fundiário e tributário — prontos para identificar o que está bloqueando o seu imóvel e entregar um plano claro para resolver."
      />

      <section className="section-wrap py-14">
        <div className="max-w-3xl">
          <p className="text-slate-300 text-lg leading-relaxed">
            A <strong className="text-white">Venturi Consultoria Técnica &amp; Jurídica</strong> foi
            estruturada para apoiar proprietários rurais, herdeiros, investidores e produtores em
            decisões com impacto patrimonial relevante. Priorizamos diagnóstico rigoroso,
            documentação robusta e comunicação direta — sem enrolação.
          </p>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <h2 className="text-2xl font-semibold text-white mb-10">Sócios &amp; Consultores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socios.map((s) => (
            <div
              key={s.nome}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-72 bg-slate-900">
                <Image
                  src={s.foto}
                  alt={`Foto de ${s.nome}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-white font-semibold text-lg leading-tight">{s.nome}</h3>
                  <p className="text-amber-400 text-sm font-medium mt-0.5">{s.cargo}</p>
                  <p className="text-slate-500 text-xs mt-1">{s.oab}</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">{s.bio}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {s.areas.map((a) => (
                    <span
                      key={a}
                      className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
