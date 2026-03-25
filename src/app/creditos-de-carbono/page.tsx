import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/content/siteData'

export const metadata: Metadata = {
  title: 'Consultoria em Créditos de Carbono | Projetos, Certificação e Assessoria Jurídica | VENTURI',
  description: 'Consultoria especializada em créditos de carbono para produtores rurais, empresas e órgãos públicos. Inventário de GEE, projetos de carbono, assessoria jurídica e certificação. Atendimento em todo o Brasil.',
  openGraph: {
    title: 'Créditos de Carbono | VENTURI Consultoria Técnica & Jurídica',
    description: 'Monetize suas ações ambientais com segurança. Consultoria completa em créditos de carbono: inventário GEE, projetos REDD+, certificação e assessoria jurídica para produtores rurais e empresas.',
    url: 'https://venturictj.com/creditos-de-carbono/',
    siteName: company.name,
    type: 'website',
  },
}

export default function CreditosDeCarbonoPage() {
  return (
    <main className="min-h-screen">

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-green-400/30 px-4 py-1.5 rounded-full">
            Consultoria Especializada
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transforme Sua Terra em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Ativo de Carbono
            </span>{' '}
            com Segurança Jurídica
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            O mercado de créditos de carbono no Brasil movimenta bilhões e a nova legislação
            (Lei 15.042/2024) abriu as portas para produtores rurais, empresas e municípios.
            A Venturi é a consultoria que une expertise técnica e jurídica para você
            monetizar suas ações ambientais com total segurança e credibilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a consultoria em Créditos de Carbono da Venturi.')}`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
              target="_blank"
            >
              <span>📱</span> Fale com um Especialista
            </Link>
            <Link
              href="/contato/"
              className="inline-flex items-center justify-center gap-2 border-2 border-yellow-500/60 text-yellow-400 hover:bg-yellow-500/10 font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Solicitar Diagnóstico Gratuito
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ O QUE SÃO CRÉDITOS DE CARBONO ══════════ */}
      <section className="bg-gray-950 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Entenda o Mercado</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              O Que São Créditos de Carbono?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Um crédito de carbono representa <strong className="text-white">1 tonelada de CO₂ equivalente</strong> que
                foi reduzida, evitada ou removida da atmosfera por um projeto certificado. É um ativo negociável
                no mercado voluntário e regulado.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Com a <strong className="text-yellow-400">Lei 15.042/2024</strong>, o Brasil criou o Sistema Brasileiro
                de Comércio de Emissões (SBCE), tornando obrigatório para milhares de empresas reportar e compensar
                suas emissões de gases de efeito estufa.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Isso significa que <strong className="text-green-400">produtores rurais, empresas e municípios</strong> que
                desenvolvem projetos de carbono têm agora um mercado crescente e regulamentado para monetizar
                suas ações ambientais.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">📊</span> Números do Mercado
              </h3>
              <div className="space-y-5">
                {[
                  { value: 'US$ 2 bi+', label: 'Mercado voluntário global em 2024' },
                  { value: '15.042', label: 'Lei brasileira que criou o SBCE' },
                  { value: '50 mil+', label: 'Empresas potencialmente impactadas no Brasil' },
                  { value: '12-24 meses', label: 'Tempo médio para estruturar um projeto' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-yellow-400 min-w-[100px]">{stat.value}</span>
                    <span className="text-gray-400 text-sm leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PARA QUEM ══════════ */}
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Público-Alvo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Para Quem É Esta Consultoria?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🌾',
                title: 'Produtores Rurais',
                desc: 'Proprietários de terras com florestas nativas, pastagens degradadas ou áreas de restauração que podem gerar créditos de carbono.',
              },
              {
                icon: '🏭',
                title: 'Empresas & Indústrias',
                desc: 'Organizações que precisam compensar emissões, cumprir metas ESG ou se adequar à nova legislação brasileira.',
              },
              {
                icon: '🏛️',
                title: 'Órgãos Públicos',
                desc: 'Prefeituras e governos que desejam desenvolver projetos de carbono municipais e atrair investimentos verdes.',
              },
              {
                icon: '💼',
                title: 'Investidores',
                desc: 'Fundos e investidores que buscam ativos de carbono certificados com segurança jurídica e retorno comprovado.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/40 transition-all group">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NOSSOS SERVIÇOS ══════════ */}
      <section className="bg-gray-950 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Consultoria Completa em Créditos de Carbono
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Da avaliação inicial até a certificação e comercialização — acompanhamos
              cada etapa com rigor técnico e segurança jurídica.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                title: 'Inventário de Emissões (GEE)',
                desc: 'Levantamento completo das emissões de gases de efeito estufa da sua operação, seguindo o GHG Protocol e padrões internacionais.',
                tag: 'Diagnóstico',
              },
              {
                icon: '🌳',
                title: 'Elaboração de Projetos de Carbono',
                desc: 'Estruturação técnica de projetos REDD+, ARR (reflorestamento), energia renovável, resíduos e agropecuária de baixo carbono.',
                tag: 'Desenvolvimento',
              },
              {
                icon: '✅',
                title: 'Certificação e Registro',
                desc: 'Acompanhamento do processo de validação e verificação junto a padrões reconhecidos como Verra (VCS) e Gold Standard.',
                tag: 'Certificação',
              },
              {
                icon: '⚖️',
                title: 'Assessoria Jurídica Especializada',
                desc: 'Análise de contratos, titularidade de créditos, compliance com a Lei 15.042, defesa em disputas e proteção reputacional.',
                tag: 'Jurídico',
              },
              {
                icon: '💰',
                title: 'Estratégia de Comercialização',
                desc: 'Avaliação de mercado, precificação, negociação com compradores e apoio na escolha entre mercado voluntário ou regulado.',
                tag: 'Comercialização',
              },
              {
                icon: '📊',
                title: 'Consultoria ESG & Compliance',
                desc: 'Integração da estratégia de carbono com metas ESG corporativas, relatórios de sustentabilidade e comunicação responsável.',
                tag: 'Estratégia',
              },
            ].map((service, i) => (
              <div key={i} className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-green-500/40 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">{service.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMO FUNCIONA ══════════ */}
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Metodologia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Como Nasce um Crédito de Carbono
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Um processo estruturado em etapas claras, com acompanhamento técnico e jurídico em cada fase.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/60 via-yellow-500/60 to-green-500/60" />
            {[
              { step: '01', title: 'Diagnóstico Inicial', desc: 'Avaliação gratuita do potencial de geração de créditos do seu imóvel ou operação. Análise de viabilidade técnica e econômica.', side: 'left' },
              { step: '02', title: 'Desenho do Projeto', desc: 'Definição da metodologia, limites do projeto, linha de base e estimativa de reduções ou remoções de carbono.', side: 'right' },
              { step: '03', title: 'Validação Independente', desc: 'Auditoria por terceira parte acreditada para verificar se o projeto atende aos critérios do padrão escolhido.', side: 'left' },
              { step: '04', title: 'Monitoramento', desc: 'Medição contínua das emissões evitadas ou removidas ao longo do tempo, conforme a metodologia aplicável.', side: 'right' },
              { step: '05', title: 'Verificação e Emissão', desc: 'As toneladas verificadas são convertidas em créditos registrados oficialmente, prontos para comercialização.', side: 'left' },
              { step: '06', title: 'Comercialização', desc: 'Apoio na negociação, precificação e venda dos créditos no mercado voluntário ou regulado, com segurança jurídica.', side: 'right' },
            ].map((item, i) => (
              <div key={i} className={`relative flex items-center mb-10 md:mb-0 md:min-h-[120px] ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${item.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-5 inline-block">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-green-400 font-bold text-sm">{item.step}</span>
                      <h3 className="text-white font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-950 z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TIPOS DE PROJETOS ══════════ */}
      <section className="bg-gray-950 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Oportunidades</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Principais Tipos de Projetos de Carbono
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🌲',
                title: 'REDD+ e Restauração Florestal',
                desc: 'Proteção de florestas nativas contra desmatamento e restauração de áreas degradadas. Alto potencial no Brasil.',
                benefit: 'Conservação + renda',
              },
              {
                icon: '⚡',
                title: 'Energia Renovável',
                desc: 'Projetos de solar, eólica e biomassa que substituem fontes fósseis. Métricas consolidadas e menor complexidade.',
                benefit: 'Rápida implementação',
              },
              {
                icon: '♻️',
                title: 'Resíduos e Biogás',
                desc: 'Captura de metano em aterros sanitários e sistemas de tratamento de efluentes. Dados instrumentais robustos.',
                benefit: 'Credibilidade técnica',
              },
              {
                icon: '🌱',
                title: 'Agricultura de Baixo Carbono',
                desc: 'Práticas sustentáveis na pecuária e lavoura: manejo de pastagens, plantio direto, integração lavoura-pecuária-floresta.',
                benefit: 'Ideal para produtores',
              },
              {
                icon: '🏗️',
                title: 'Tecnologia Industrial',
                desc: 'Eficiência energética, captura e armazenamento de carbono (CCS/CCUS), biochar e direct air capture.',
                benefit: 'Fronteira de inovação',
              },
              {
                icon: '🌊',
                title: 'Carbono Azul',
                desc: 'Conservação e restauração de manguezais, restingas e ecossistemas costeiros com alto potencial de sequestro.',
                benefit: 'Alto valor por crédito',
              },
            ].map((project, i) => (
              <div key={i} className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/40 transition-all">
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
      <section className="bg-black py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Por que a Venturi?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Diferenciais da Nossa Consultoria
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expertise Técnica + Jurídica',
                desc: 'Combinamos engenharia ambiental, direito regulatório e conhecimento do mercado de carbono em um único atendimento. Você não precisa contratar múltiplos escritórios.',
              },
              {
                title: 'Foco no Produtor Rural',
                desc: 'Conhecemos a realidade do campo. Traduzimos a complexidade do mercado de carbono em decisões claras e aplicáveis para quem vive da terra.',
              },
              {
                title: 'Segurança Contra Greenwashing',
                desc: 'Seguimos os pilares de integridade reconhecidos internacionalmente: adicionalidade, mensuração, verificação independente, permanência e integração comunitária.',
              },
              {
                title: 'Atendimento 100% Digital',
                desc: 'Atendemos todo o Brasil de forma remota, com agilidade e acesso direto ao time técnico. Resposta em até 24 horas após o primeiro contato.',
              },
            ].map((diff, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
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

      {/* ══════════ FAQ ══════════ */}
      <section className="bg-gray-950 py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Perguntas Frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Dúvidas Sobre Créditos de Carbono
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Minha propriedade rural pode gerar créditos de carbono?',
                a: 'Sim, se a propriedade possui áreas de floresta nativa preservada, pastagens degradadas com potencial de restauração, ou se você adota (ou pretende adotar) práticas agrícolas de baixo carbono. Fazemos uma avaliação gratuita para identificar o potencial.',
              },
              {
                q: 'Quanto custa desenvolver um projeto de carbono?',
                a: 'Depende do tipo e escala do projeto. Trabalhamos com diagnóstico inicial gratuito e proposta sob medida. Serviços pontuais podem começar em faixas acessíveis, enquanto projetos completos são estruturados por etapas.',
              },
              {
                q: 'Quanto tempo leva para começar a gerar receita?',
                a: 'A estruturação de um projeto leva entre 12 e 24 meses, dependendo da complexidade. Porém, você pode começar a agregar valor à sua marca e atrair investidores desde o início do processo.',
              },
              {
                q: 'O que a Lei 15.042 muda para a minha empresa?',
                a: 'A lei criou o Sistema Brasileiro de Comércio de Emissões (SBCE), que obriga empresas de determinados setores a reportar e compensar emissões. Isso cria tanto uma obrigação de compliance quanto uma oportunidade para quem gera créditos.',
              },
              {
                q: 'Qual a diferença entre mercado voluntário e regulado?',
                a: 'O mercado voluntário é baseado em iniciativas espontâneas de compensação, enquanto o regulado é mandatório e supervisionado pelo governo. Ambos representam oportunidades, e ajudamos você a navegar nos dois.',
              },
              {
                q: 'A Venturi também cuida da parte jurídica dos contratos?',
                a: 'Sim. Oferecemos análise e elaboração de contratos de compra e venda de créditos, titularidade, cláusulas de proteção e compliance regulatório. É o nosso diferencial: técnico + jurídico em um só lugar.',
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
      <section className="bg-gradient-to-r from-green-900/40 via-black to-green-900/40 py-20 md:py-24 border-t border-b border-green-500/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Transformar Carbono em{' '}
            <span className="text-yellow-400">Valor</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Entre em contato para uma avaliação preliminar gratuita. Vamos entender
            o potencial do seu imóvel ou empresa e apresentar o caminho mais seguro
            para entrar no mercado de carbono.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Tenho interesse na consultoria de Créditos de Carbono da Venturi. Gostaria de agendar uma avaliação.')}`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 text-lg"
              target="_blank"
            >
              <span>📱</span> Fale no WhatsApp
            </Link>
            <Link
              href="/contato/"
              className="inline-flex items-center justify-center gap-2 border-2 border-yellow-500/60 text-yellow-400 hover:bg-yellow-500/10 font-semibold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Enviar Mensagem
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Resposta em até 24h &bull; 100% remoto &bull; Atendimento em todo o Brasil
          </p>
        </div>
      </section>

      {/* ══════════ RODAPÉ CONTEXTUAL ══════════ */}
      <section className="bg-gray-950 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            A Venturi Consultoria Técnica &amp; Jurídica atua na interseção entre direito ambiental,
            gestão territorial e mercado de carbono. Nosso compromisso é traduzir complexidade
            regulatória em decisões claras, seguras e aplicáveis.
          </p>
        </div>
      </section>
    </main>
  )
}
