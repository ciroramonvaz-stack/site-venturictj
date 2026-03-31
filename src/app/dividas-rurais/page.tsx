import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/content/siteData'

export const metadata: Metadata = {
  title: 'D\u00edvidas Rurais | Renegocia\u00e7\u00e3o, Defesa e Revis\u00e3o de Contratos Banc\u00e1rios | VENTURI',
  description: 'Advogados especialistas em d\u00edvidas rurais: renegocia\u00e7\u00e3o de c\u00e9dula de cr\u00e9dito rural, defesa em execu\u00e7\u00f5es banc\u00e1rias, revis\u00e3o de contratos abusivos, recupera\u00e7\u00e3o judicial do produtor rural e suspens\u00e3o de leil\u00e3o. Atendimento em todo o Brasil.',
  openGraph: {
    title: 'D\u00edvidas Rurais | VENTURI Consultoria T\u00e9cnica & Jur\u00eddica',
    description: 'Seu im\u00f3vel rural est\u00e1 amea\u00e7ado por d\u00edvidas banc\u00e1rias? A Venturi defende seu patrim\u00f4nio com estrat\u00e9gia jur\u00eddica especializada: renegocia\u00e7\u00e3o, revis\u00e3o contratual e suspens\u00e3o de leil\u00e3o.',
    url: 'https://venturictj.com/dividas-rurais/',
    siteName: company.name,
    type: 'website',
  },
}

export default function DividasRuraisPage() {
  return (
    <main className="min-h-screen">

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-red-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-red-400/30 px-4 py-1.5 rounded-full">
            Defesa do Produtor Rural
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            D&iacute;vida Rural Amea&ccedil;ando{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
              Seu Patrim&ocirc;nio?
            </span>{' '}
            N&oacute;s Defendemos Voc&ecirc;.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Bancos cobram juros abusivos, capitalizam encargos ilegais e amea&ccedil;am
            tomar sua propriedade. A Venturi atua com estrat&eacute;gia jur&iacute;dica
            agressiva para <strong className="text-white">renegociar, revisar e suspender</strong> cobran&ccedil;as
            indevidas &mdash; protegendo quem produz.
          </p>

          {/* Urgency bar - Morgan & Morgan style */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-red-300">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Leil&atilde;o marcado? Podemos suspender
            </div>
            <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 text-yellow-300">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              An&aacute;lise gratuita do contrato
            </div>
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-300">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Atendemos todo o Brasil
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${company.whatsappLink}?text=${encodeURIComponent('Ol\u00e1! Tenho uma d\u00edvida rural e preciso de orienta\u00e7\u00e3o jur\u00eddica urgente.')}`}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
              target="_blank"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              WhatsApp: An&aacute;lise Urgente
            </Link>
            <Link
              href="/contato/"
              className="inline-flex items-center justify-center gap-2 border-2 border-yellow-500/60 text-yellow-400 hover:bg-yellow-500/10 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Solicitar An&aacute;lise Gratuita do Contrato
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ SOCIAL PROOF BAR ══════════ */}
      <section className="bg-[#050810] border-y border-white/5 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 'R$ 45 Mi+', label: 'em d\u00edvidas renegociadas' },
              { number: '200+', label: 'produtores defendidos' },
              { number: '94%', label: 'taxa de \u00eaxito em revis\u00f5es' },
              { number: '< 48h', label: 'para medidas urgentes' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-1 font-serif">
                  {stat.number}
                </div>
                <p className="text-white/40 text-xs font-medium tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ O PROBLEMA ══════════ */}
      <section className="bg-gray-950 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">O Problema</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Voc&ecirc; Reconhece Alguma Dessas Situa&ccedil;&otilde;es?
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Se voc&ecirc; marcou pelo menos uma, seus direitos provavelmente est&atilde;o sendo violados.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '\u26A0\uFE0F',
                title: 'Juros acima do permitido',
                desc: 'O banco est\u00e1 cobrando taxas acima do teto legal ou capitalizando juros sobre juros (anatocismo) na sua c\u00e9dula de cr\u00e9dito rural.',
              },
              {
                icon: '\uD83C\uDFE0',
                title: 'Amea\u00e7a de perda do im\u00f3vel',
                desc: 'Execu\u00e7\u00e3o judicial em andamento, penhora sobre a fazenda ou leil\u00e3o j\u00e1 marcado para seu im\u00f3vel rural.',
              },
              {
                icon: '\uD83D\uDCB8',
                title: 'D\u00edvida que s\u00f3 cresce',
                desc: 'Mesmo pagando parcelas, o saldo devedor n\u00e3o diminui \u2014 sinal cl\u00e1ssico de encargos abusivos embutidos no contrato.',
              },
              {
                icon: '\uD83D\uDCC4',
                title: 'Contrato com cl\u00e1usulas obscuras',
                desc: 'Termos que voc\u00ea n\u00e3o entende, cobran\u00e7as surpresa, multas desproporcionais e condi\u00e7\u00f5es que mudam unilateralmente.',
              },
              {
                icon: '\u2696\uFE0F',
                title: 'Sendo processado pelo banco',
                desc: 'Recebeu cita\u00e7\u00e3o em a\u00e7\u00e3o de execu\u00e7\u00e3o ou cobran\u00e7a e n\u00e3o sabe como se defender adequadamente.',
              },
              {
                icon: '\uD83D\uDEAB',
                title: 'Nome negativado injustamente',
                desc: 'CPF/CNPJ inscrito em cadastros de inadimplentes (SPC/Serasa) por d\u00edvida que voc\u00ea contesta ou j\u00e1 pagou.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-black/50 border border-red-900/30 rounded-xl p-6 hover:border-red-500/40 transition-all group">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Urgency CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">Identificou sua situa&ccedil;&atilde;o? <strong className="text-white">Fale agora com um especialista.</strong></p>
            <Link
              href={`${company.whatsappLink}?text=${encodeURIComponent('Ol\u00e1! Estou com uma d\u00edvida rural e preciso de ajuda jur\u00eddica.')}`}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all"
              target="_blank"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Falar com Advogado Agora
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ NOSSOS SERVIÇOS ══════════ */}
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Como Atuamos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Defesa Jur&iacute;dica Completa em D&iacute;vidas Rurais
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Cada caso recebe uma estrat&eacute;gia personalizada &mdash; do diagn&oacute;stico
              contratual at&eacute; a defesa judicial, com foco em preservar seu patrim&ocirc;nio.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '\uD83D\uDD0D',
                title: 'Revis\u00e3o de Contratos Banc\u00e1rios',
                desc: 'An\u00e1lise t\u00e9cnica minuciosa de c\u00e9dulas de cr\u00e9dito rural, contratos de financiamento e opera\u00e7\u00f5es de cr\u00e9dito para identificar cl\u00e1usulas abusivas, juros ilegais e cobran\u00e7as indevidas.',
                tag: 'An\u00e1lise',
              },
              {
                icon: '\uD83D\uDCB0',
                title: 'Renegocia\u00e7\u00e3o de D\u00edvidas',
                desc: 'Negocia\u00e7\u00e3o direta com institui\u00e7\u00f5es financeiras para redu\u00e7\u00e3o do saldo devedor, alongamento de prazos e condi\u00e7\u00f5es compat\u00edveis com sua capacidade de pagamento.',
                tag: 'Negocia\u00e7\u00e3o',
              },
              {
                icon: '\uD83D\uDEE1\uFE0F',
                title: 'Defesa em Execu\u00e7\u00f5es Banc\u00e1rias',
                desc: 'Atua\u00e7\u00e3o em a\u00e7\u00f5es de execu\u00e7\u00e3o movidas por bancos e cooperativas, com embargos \u00e0 execu\u00e7\u00e3o fundamentados em per\u00edcia cont\u00e1bil e argumenta\u00e7\u00e3o jur\u00eddica s\u00f3lida.',
                tag: 'Defesa',
              },
              {
                icon: '\uD83C\uDFDB\uFE0F',
                title: 'Suspens\u00e3o de Leil\u00e3o',
                desc: 'Medidas judiciais urgentes (tutela de urg\u00eancia) para suspender leil\u00f5es extrajudiciais e judiciais de propriedades rurais dadas em garantia.',
                tag: 'Urgente',
              },
              {
                icon: '\uD83D\uDCC9',
                title: 'Recupera\u00e7\u00e3o Judicial',
                desc: 'Assessoria completa para produtores rurais que precisam de recupera\u00e7\u00e3o judicial: elabora\u00e7\u00e3o do plano, negocia\u00e7\u00e3o com credores e acompanhamento processual.',
                tag: 'Reestrutura\u00e7\u00e3o',
              },
              {
                icon: '\uD83D\uDCCA',
                title: 'Per\u00edcia Cont\u00e1bil',
                desc: 'Elabora\u00e7\u00e3o de laudo pericial cont\u00e1bil que demonstra cobran\u00e7as indevidas, recalcula o saldo devedor e fundamenta a defesa com dados t\u00e9cnicos irrefut\u00e1veis.',
                tag: 'T\u00e9cnico',
              },
            ].map((service, i) => (
              <div key={i} className="bg-gray-950/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/40 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">{service.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMO FUNCIONA ══════════ */}
      <section className="bg-gray-950 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Metodologia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Da An&aacute;lise &agrave; Libera&ccedil;&atilde;o: Como Funciona
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/60 via-yellow-500/60 to-green-500/60" />
            {[
              { step: '01', title: 'An\u00e1lise Gratuita do Contrato', desc: 'Voc\u00ea envia o contrato e documentos pelo WhatsApp. Em at\u00e9 48h, identificamos irregularidades e informamos se h\u00e1 fundamento para atuar.', side: 'left' },
              { step: '02', title: 'Per\u00edcia Cont\u00e1bil Detalhada', desc: 'Realizamos o recalculo completo da d\u00edvida, expurgando juros abusivos, capitaliza\u00e7\u00e3o ilegal, taxas indevidas e encargos morat\u00f3rios excessivos.', side: 'right' },
              { step: '03', title: 'Estrat\u00e9gia Jur\u00eddica', desc: 'Definimos a melhor via: negocia\u00e7\u00e3o extrajudicial, a\u00e7\u00e3o revisional, embargos \u00e0 execu\u00e7\u00e3o ou recupera\u00e7\u00e3o judicial \u2014 conforme a urg\u00eancia e perfil do caso.', side: 'left' },
              { step: '04', title: 'Execu\u00e7\u00e3o e Acompanhamento', desc: 'Implementamos a estrat\u00e9gia com acompanhamento semanal. Voc\u00ea recebe relat\u00f3rios de status e tem acesso direto ao advogado respons\u00e1vel.', side: 'right' },
              { step: '05', title: 'Resolu\u00e7\u00e3o e Libera\u00e7\u00e3o', desc: 'D\u00edvida renegociada, contrato revisado ou leil\u00e3o suspenso \u2014 seu patrim\u00f4nio protegido e sua opera\u00e7\u00e3o destravada.', side: 'left' },
            ].map((item, i) => (
              <div key={i} className={`relative flex items-center mb-10 md:mb-0 md:min-h-[120px] ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${item.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5 inline-block">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-yellow-400 font-bold text-sm">{item.step}</span>
                      <h3 className="text-white font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-gray-950 z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TIPOS DE DÍVIDA ══════════ */}
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">\u00c1reas de Atua\u00e7\u00e3o</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Tipos de D&iacute;vidas que Defendemos
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '\uD83C\uDF3E',
                title: 'C\u00e9dula de Cr\u00e9dito Rural (CCR)',
                desc: 'Revis\u00e3o de c\u00e9dulas de produto rural, industrial e de investimento com identifica\u00e7\u00e3o de cobran\u00e7as abusivas.',
                benefit: 'Mais comum',
              },
              {
                icon: '\uD83C\uDFE6',
                title: 'Financiamento Banc\u00e1rio Rural',
                desc: 'Contratos com Banco do Brasil, Sicoob, Cresol, Sicredi e demais institui\u00e7\u00f5es que operam cr\u00e9dito rural.',
                benefit: 'Todos os bancos',
              },
              {
                icon: '\uD83D\uDCCB',
                title: 'PRONAF / PRONAMP',
                desc: 'D\u00edvidas em programas governamentais de financiamento rural, incluindo renegocia\u00e7\u00f5es e enquadramento incorreto.',
                benefit: 'Programas oficiais',
              },
              {
                icon: '\uD83D\uDE9C',
                title: 'Financiamento de M\u00e1quinas',
                desc: 'Leasing, CDC e financiamentos de tratores, colheitadeiras e implementos agr\u00edcolas com cl\u00e1usulas abusivas.',
                benefit: 'Ve\u00edculos e m\u00e1quinas',
              },
              {
                icon: '\uD83C\uDFE0',
                title: 'Hipoteca Rural',
                desc: 'Defesa contra execu\u00e7\u00e3o hipotec\u00e1ria de propriedades rurais dadas em garantia a institui\u00e7\u00f5es financeiras.',
                benefit: 'Prote\u00e7\u00e3o patrimonial',
              },
              {
                icon: '\uD83D\uDCB3',
                title: 'CPR e T\u00edtulos do Agro',
                desc: 'C\u00e9dula de Produto Rural, duplicatas rurais e demais t\u00edtulos do agroneg\u00f3cio com cobran\u00e7as irregulares.',
                benefit: 'T\u00edtulos especiais',
              },
            ].map((project, i) => (
              <div key={i} className="bg-gray-950/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/40 transition-all">
                <span className="text-3xl block mb-3">{project.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                  {project.benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DIFERENCIAIS ══════════ */}
      <section className="bg-gray-950 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Por que a Venturi?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Diferenciais da Nossa Atua&ccedil;&atilde;o
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Especialistas em Direito Rural + Banc\u00e1rio',
                desc: 'Combinamos conhecimento profundo do agroneg\u00f3cio com expertise em direito banc\u00e1rio. Entendemos tanto a realidade do produtor quanto os mecanismos financeiros dos bancos.',
              },
              {
                title: 'Per\u00edcia Cont\u00e1bil Pr\u00f3pria',
                desc: 'Equipe t\u00e9cnica que realiza recalculo pericial in-house, sem depender de peritos terceirizados. Isso acelera o processo e reduz custos para o cliente.',
              },
              {
                title: 'Medidas Urgentes em 48h',
                desc: 'Para casos cr\u00edticos como leil\u00f5es marcados ou penhoras iminentes, atuamos com medidas judiciais de emerg\u00eancia em at\u00e9 48 horas.',
              },
              {
                title: 'Atendimento 100% Digital',
                desc: 'Atendemos produtores rurais em todo o Brasil de forma remota. Voc\u00ea envia documentos pelo WhatsApp e acompanha tudo online, sem precisar sair da fazenda.',
              },
            ].map((diff, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{diff.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DEPOIMENTOS ══════════ */}
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Resultados Reais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Quem J&aacute; Protegeu Seu Patrim&ocirc;nio
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                text: 'Minha fazenda ia a leil\u00e3o em 20 dias. A Venturi conseguiu suspens\u00e3o liminar e revisou o contrato que tinha R$ 380 mil em juros abusivos. Hoje estou renegociando com condi\u00e7\u00f5es justas.',
                author: 'Produtor Rural (S.M.)',
                result: 'Leil\u00e3o suspenso + R$ 380 mil em redu\u00e7\u00e3o',
              },
              {
                text: 'Devia R$ 1,2 milh\u00e3o ao banco. Ap\u00f3s a per\u00edcia cont\u00e1bil da Venturi, o valor real caiu para R$ 640 mil. Quase metade era cobran\u00e7a indevida. Renegociei e voltei a produzir tranquilo.',
                author: 'Produtor Rural (J.A.)',
                result: 'Redu\u00e7\u00e3o de 47% do saldo devedor',
              },
            ].map((t, i) => (
              <div key={i} className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8">
                <div className="text-4xl font-serif text-yellow-500/20 leading-none mb-3">&ldquo;</div>
                <p className="text-gray-300 text-lg italic leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-yellow-400 font-semibold text-sm">{t.author.charAt(t.author.indexOf('(') + 1)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.author}</p>
                      <p className="text-yellow-500/60 text-xs">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full hidden sm:inline-block">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="bg-gray-950 py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Perguntas Frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              D&uacute;vidas Sobre D&iacute;vidas Rurais
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'O banco pode tomar minha fazenda por d\u00edvida?',
                a: 'Sim, se o im\u00f3vel foi dado em garantia (hipoteca ou aliena\u00e7\u00e3o fiduci\u00e1ria). Por\u00e9m, em muitos casos existem irregularidades no contrato ou na execu\u00e7\u00e3o que permitem suspender o leil\u00e3o e renegociar a d\u00edvida em condi\u00e7\u00f5es justas.',
              },
              {
                q: 'Quanto custa a an\u00e1lise do contrato?',
                a: 'A an\u00e1lise preliminar \u00e9 gratuita. Avaliamos o contrato e informamos se h\u00e1 fundamento para atuar. Caso haja, apresentamos proposta com escopo, prazo e valor definidos antes de come\u00e7ar.',
              },
              {
                q: 'J\u00e1 tem leil\u00e3o marcado. Ainda d\u00e1 tempo?',
                a: 'Sim. Atuamos com medidas judiciais urgentes (tutela de urg\u00eancia) que podem ser deferidas em 24-48 horas. Quanto antes voc\u00ea entrar em contato, maiores as chances de suspens\u00e3o.',
              },
              {
                q: 'Voc\u00eas atuam contra quais bancos?',
                a: 'Atuamos contra todas as institui\u00e7\u00f5es financeiras: Banco do Brasil, Sicoob, Cresol, Sicredi, Bradesco, Ita\u00fa, Santander, Bancoob, e demais cooperativas e bancos que operam cr\u00e9dito rural.',
              },
              {
                q: 'O que \u00e9 anatocismo e por que \u00e9 ilegal?',
                a: 'Anatocismo \u00e9 a cobran\u00e7a de juros sobre juros (capitaliza\u00e7\u00e3o composta). Em contratos de cr\u00e9dito rural, essa pr\u00e1tica \u00e9 vedada em diversas situa\u00e7\u00f5es pela legisla\u00e7\u00e3o brasileira. Quando identificada, permite recalcular a d\u00edvida com redu\u00e7\u00f5es significativas.',
              },
              {
                q: 'Posso renegociar mesmo com a\u00e7\u00e3o judicial em andamento?',
                a: 'Sim. A renegocia\u00e7\u00e3o pode ocorrer em qualquer fase, inclusive durante o processo judicial. Em muitos casos, a defesa t\u00e9cnica com per\u00edcia cont\u00e1bil torna a renegocia\u00e7\u00e3o mais favor\u00e1vel ao produtor.',
              },
              {
                q: 'Voc\u00eas atendem minha regi\u00e3o?',
                a: 'Sim. Atendemos produtores rurais em todo o Brasil de forma 100% remota. Documentos s\u00e3o enviados pelo WhatsApp, reuni\u00f5es por videoconfer\u00eancia, e a\u00e7\u00f5es judiciais podem ser protocoladas eletronicamente em qualquer comarca.',
              },
            ].map((item, i) => (
              <details key={i} className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-semibold hover:text-yellow-400 transition-colors">
                  {item.q}
                  <span className="text-yellow-500 group-open:rotate-45 transition-transform text-xl ml-4">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-400 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="bg-gradient-to-r from-red-900/30 via-black to-red-900/30 py-20 md:py-24 border-t border-b border-red-500/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            N&atilde;o Espere Perder Seu Patrim&ocirc;nio.{' '}
            <span className="text-yellow-400">Aja Agora.</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Cada dia que passa com juros abusivos correndo, sua d&iacute;vida cresce e
            seu patrim&ocirc;nio encolhe. A an&aacute;lise inicial &eacute; gratuita e pode
            ser feita em minutos pelo WhatsApp.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              An&aacute;lise gratuita
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Sigilo total
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Resposta em at&eacute; 2h
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${company.whatsappLink}?text=${encodeURIComponent('Ol\u00e1! Tenho uma d\u00edvida rural e gostaria de uma an\u00e1lise gratuita do meu contrato.')}`}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/40 text-lg"
              target="_blank"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              Fale no WhatsApp Agora
            </Link>
            <Link
              href="/contato/"
              className="inline-flex items-center justify-center gap-2 border-2 border-yellow-500/60 text-yellow-400 hover:bg-yellow-500/10 font-semibold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Enviar Mensagem
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Resposta em at&eacute; 2h &bull; 100% remoto &bull; Atendimento em todo o Brasil
          </p>
        </div>
      </section>

      {/* ══════════ RODAPÉ CONTEXTUAL ══════════ */}
      <section className="bg-gray-950 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            A Venturi Consultoria T&eacute;cnica &amp; Jur&iacute;dica atua na defesa do
            produtor rural contra cobran&ccedil;as abusivas de institui&ccedil;&otilde;es financeiras.
            Nossa equipe combina expertise em direito banc&aacute;rio, direito rural e
            per&iacute;cia cont&aacute;bil para proteger seu patrim&ocirc;nio com seguran&ccedil;a jur&iacute;dica.
          </p>
        </div>
      </section>
    </main>
  )
}
