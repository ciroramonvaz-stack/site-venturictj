import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/content/siteData'

export const metadata: Metadata = {
  title: 'Dívidas Rurais | Renegociação, Defesa e Revisão de Contratos Bancários | VENTURI',
  description: 'Advogados especialistas em dívidas rurais: renegociação de cédula de crédito rural, defesa em execuções bancárias, revisão de contratos abusivos, recuperação judicial do produtor rural e suspensão de leilão. Atendimento em todo o Brasil.',
  openGraph: {
    title: 'Dívidas Rurais | VENTURI Consultoria Técnica & Jurídica',
    description: 'Seu imóvel rural está ameaçado por dívidas bancárias? A Venturi defende seu patrimônio com estratégia jurídica especializada: renegociação, revisão contratual e suspensão de leilão.',
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
            Dívida Rural Ameaçando{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
              Seu Patrimônio?
            </span>{' '}
            Nós Defendemos Você.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Bancos cobram juros abusivos, capitalizam encargos ilegais e ameaçam
            tomar sua propriedade. A Venturi atua com estratégia jurídica
            agressiva para <strong className="text-white">renegociar, revisar e suspender</strong> cobranças
            indevidas — protegendo quem produz.
          </p>

          {/* Urgency bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-red-300">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Leilão marcado? Podemos suspender
            </div>
            <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 text-yellow-300">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              Análise gratuita do contrato
            </div>
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-300">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Atendemos todo o Brasil
            </div>
          </div>

          {/* Single CTA button */}
          <Link
            href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Tenho uma dívida rural e preciso de orientação jurídica urgente.')}`}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
            target="_blank"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            WhatsApp: Análise Urgente
          </Link>
        </div>
      </section>

      {/* ══════════ SOCIAL PROOF BAR ══════════ */}
      <section className="bg-[#050810] border-y border-white/5 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 'R$ 45 Mi+', label: 'em dívidas renegociadas' },
              { number: '200+', label: 'produtores defendidos' },
              { number: '94%', label: 'taxa de êxito em revisões' },
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

      {/* ══════════ IDENTIFICOU SEU PROBLEMA? ══════════ */}
      <section className="bg-gray-950 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">O Problema</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Você Reconhece Alguma Dessas Situações?
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Se você marcou pelo menos uma, seus direitos provavelmente estão sendo violados.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '⚠️',
                title: 'Juros acima do permitido',
                desc: 'O banco está cobrando taxas acima do teto legal ou capitalizando juros sobre juros (juros sobre juros - anatocismo) na sua cédula de crédito rural.',
              },
              {
                icon: '🏠',
                title: 'Ameaça de perda do imóvel',
                desc: 'Banco te processando em andamento, penhora sobre a fazenda ou leilão já marcado para seu imóvel rural.',
              },
              {
                icon: '💸',
                title: 'Dívida que só cresce',
                desc: 'Mesmo pagando parcelas, o saldo devedor não diminui — sinal clássico de encargos abusivos embutidos no contrato.',
              },
              {
                icon: '📄',
                title: 'Contrato com cláusulas obscuras',
                desc: 'Termos que você não entende, cobranças surpresa, multas desproporcionais e condições que mudam unilateralmente.',
              },
              {
                icon: '⚖️',
                title: 'Sendo processado pelo banco',
                desc: 'Recebeu citação em ação de cobranças e não sabe como se defender adequadamente.',
              },
              {
                icon: '🚫',
                title: 'Nome negativado injustamente',
                desc: 'CPF/CNPJ inscrito em cadastros de inadimplentes (SPC/Serasa) por dívida que você contesta ou já pagou.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-black/50 border border-red-900/30 rounded-xl p-6 hover:border-red-500/40 transition-all group">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">Identificou sua situação? <strong className="text-white">Fale agora com um especialista.</strong></p>
            <Link
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Estou com uma dívida rural e preciso de ajuda jurídica.')}`}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all"
              target="_blank"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Falar com Advogado Agora
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ O QUE DEFENDEMOS (MERGED) ══════════ */}
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Nossa Atuação</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              O Que Defendemos
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Cobrimos todas as modalidades de dívida rural com serviços integrados para proteger seu patrimônio.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🌾',
                title: 'Cédula de Crédito Rural',
                desc: 'Análise de CCR (cédula de produto rural, industrial e investimento) identificando cobranças abusivas e juros ilegais com revisão contratual completa.',
                service: 'Revisão',
              },
              {
                icon: '🏦',
                title: 'Financiamento Bancário Rural',
                desc: 'Defesa contra cobranças excessivas em contratos com Banco do Brasil, Sicoob, Cresol, Sicredi, Bradesco e demais instituições de crédito rural.',
                service: 'Defesa',
              },
              {
                icon: '📋',
                title: 'PRONAF e PRONAMP',
                desc: 'Renegociação de dívidas em programas governamentais de financiamento rural com correção de enquadramento incorreto e revisão de encargos.',
                service: 'Renegociação',
              },
              {
                icon: '🚜',
                title: 'Financiamento de Máquinas',
                desc: 'Defesa contra leasing, CDC e financiamentos de tratores, colheitadeiras e implementos agrícolas com cláusulas abusivas.',
                service: 'Defesa',
              },
              {
                icon: '🏡',
                title: 'Imóvel dado como Garantia',
                desc: 'Defesa contra execução de propriedades rurais dadas em garantia (hipoteca ou imóvel dado como garantia) com suspensão de leilão urgente.',
                service: 'Urgente',
              },
              {
                icon: '💳',
                title: 'CPR e Títulos do Agro',
                desc: 'Revisão de Cédula de Produto Rural, duplicatas rurais e demais títulos do agronegócio com identificação de cobranças irregulares.',
                service: 'Revisão',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-950/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/40 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">{item.service}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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
              Da Análise à Liberação: Como Funciona
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/60 via-yellow-500/60 to-green-500/60" />
            {[
              { step: '01', title: 'Análise Gratuita do Contrato', desc: 'Você envia o contrato e documentos pelo WhatsApp. Em até 48h, identificamos irregularidades e informamos se há fundamento para atuar.', side: 'left' },
              { step: '02', title: 'Recálculo da Dívida', desc: 'Realizamos cálculo técnico completo da dívida, removendo juros abusivos, capitalização ilegal (juros sobre juros), taxas indevidas e encargos moratórios excessivos.', side: 'right' },
              { step: '03', title: 'Estratégia Jurídica', desc: 'Definimos a melhor via: negociação extrajudicial, ação revisional, defesa em execução ou reestruturação de dívidas — conforme a urgência e perfil do caso.', side: 'left' },
              { step: '04', title: 'Execução e Acompanhamento', desc: 'Implementamos a estratégia com acompanhamento semanal. Você recebe relatórios de status e tem acesso direto ao advogado responsável.', side: 'right' },
              { step: '05', title: 'Resolução e Liberação', desc: 'Dívida renegociada, contrato revisado ou leilão suspenso — seu patrimônio protegido e sua operação destravada.', side: 'left' },
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

      {/* ══════════ RESULTADOS REAIS (WITH DIFERENCIAIS MERGED) ══════════ */}
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Resultados Reais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Quem Já Protegeu Seu Patrimônio
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                text: 'Minha fazenda ia a leilão em 20 dias. A Venturi conseguiu suspensão liminar e revisou o contrato que tinha R$ 380 mil em juros abusivos. Hoje estou renegociando com condições justas.',
                author: 'Produtor Rural (S.M.)',
                result: 'Leilão suspenso + R$ 380 mil em redução',
              },
              {
                text: 'Devia R$ 1,2 milhão ao banco. Após o cálculo técnico da Venturi, o valor real caiu para R$ 640 mil. Quase metade era cobrança indevida. Renegociei e voltei a produzir tranquilo.',
                author: 'Produtor Rural (J.A.)',
                result: 'Redução de 47% do saldo devedor',
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
                      <p className="text-yellow-500/60 text-xs">★★★★★</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full hidden sm:inline-block">{t.result}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Why Venturi - Diferenciais */}
          <div className="bg-gray-950/50 border border-gray-800 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Por Que a Venturi?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Especialistas em Direito Rural + Bancário',
                  desc: 'Combinamos conhecimento profundo do agronegócio com expertise em direito bancário. Entendemos tanto a realidade do produtor quanto os mecanismos financeiros dos bancos.',
                },
                {
                  title: 'Cálculo Técnico Próprio',
                  desc: 'Equipe técnica que realiza cálculo pericial in-house, sem depender de peritos terceirizados. Isso acelera o processo e reduz custos para o cliente.',
                },
                {
                  title: 'Medidas Urgentes em 48h',
                  desc: 'Para casos críticos como leilões marcados ou penhoras iminentes, atuamos com medida judicial de emergência em até 48 horas.',
                },
                {
                  title: 'Atendimento 100% Digital',
                  desc: 'Atendemos produtores rurais em todo o Brasil de forma remota. Você envia documentos pelo WhatsApp e acompanha tudo online, sem precisar sair da fazenda.',
                },
              ].map((diff, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{diff.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="bg-gradient-to-r from-red-900/30 via-black to-red-900/30 py-20 md:py-24 border-t border-b border-red-500/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Não Espere Perder Seu Patrimônio.{' '}
            <span className="text-yellow-400">Aja Agora.</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Cada dia que passa com juros abusivos correndo, sua dívida cresce e
            seu patrimônio encolhe. A análise inicial é gratuita e pode
            ser feita em minutos pelo WhatsApp.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Análise gratuita
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
              Resposta em até 2h
            </div>
          </div>

          {/* Single CTA */}
          <Link
            href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Tenho uma dívida rural e gostaria de uma análise gratuita do meu contrato.')}`}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/40 text-lg mb-6"
            target="_blank"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            Fale no WhatsApp Agora
          </Link>

          <p className="text-gray-500 text-sm">
            Resposta em até 2h • 100% remoto • Atendimento em todo o Brasil
          </p>
          <p className="text-gray-600 text-xs mt-4">
            Dúvidas frequentes? <Link href="/faq/" className="text-yellow-400 hover:text-yellow-300">Consulte nossa FAQ</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
