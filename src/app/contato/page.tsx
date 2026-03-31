import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/content/siteData';

export const metadata: Metadata = {
  title: 'Contato - Venturi CTJ',
  description: 'Fale conosco sobre análise de imóveis. Avaliação inicial gratuita e sem compromisso. Retorno em até 2 horas.',
};

export default function ContatoPage() {
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de solicitar uma análise gratuita do meu imóvel.'
  );
  const whatsappLink = `${company.whatsappLink}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-venturi-dark text-white">
      {/* Hero Section */}
      <section className="section-wrap pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="gold-kicker">Fale Conosco</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Vamos conversar sobre o seu imóvel?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A análise inicial é gratuita e sem compromisso. Retornamos em até 2 horas em horário comercial.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="section-wrap py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8 gradient-text">Entre em Contato</h2>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 relative">
                  <svg
                    className="w-6 h-6 text-[#25D366]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse border border-venturi-dark"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                  <Link
                    href={company.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-venturi-gold hover:text-opacity-80 transition font-medium"
                  >
                    {company.whatsapp}
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-venturi-gold mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <Link
                    href={`mailto:${company.email}`}
                    className="text-venturi-gold hover:text-opacity-80 transition font-medium"
                  >
                    {company.email}
                  </Link>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-venturi-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Instagram</p>
                  <Link
                    href={company.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-venturi-gold hover:text-opacity-80 transition font-medium"
                  >
                    {company.instagram}
                  </Link>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-venturi-gold mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Endereço</p>
                  <p className="text-white">{company.address}</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-venturi-gold mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Horário</p>
                  <p className="text-white">Segunda a Sexta, 8h às 18h</p>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="space-y-3 border-t border-gray-700 pt-8">
              <h3 className="text-sm font-semibold text-venturi-gold mb-4">Por que confiar na Venturi CTJ</h3>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Sigilo total</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Sem compromisso</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Diagnóstico preliminar gratuito</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Retorno em até 2h</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="premium-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-2">Solicite uma Análise Gratuita</h2>
            <p className="text-gray-400 mb-8">Preencha e entraremos em contato pelo WhatsApp.</p>

            <form className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 bg-venturi-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-venturi-gold transition"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 bg-venturi-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-venturi-gold transition"
                />
              </div>

              {/* Situação do Imóvel */}
              <div>
                <label htmlFor="situacao" className="block text-sm font-medium text-gray-300 mb-2">
                  Qual a situação do seu imóvel?
                </label>
                <select
                  id="situacao"
                  name="situacao"
                  className="w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-venturi-gold transition"
                >
                  <option value="">Selecione sua necessidade</option>
                  <optgroup label="── Regularização e Documentação">
                    <option value="loteamento">Conversão rural → urbano / Loteamento</option>
                    <option value="documentacao">Regularização de documentação / SIGEF</option>
                    <option value="car">Regularização de CAR</option>
                    <option value="retificacao">Retificação de matrícula</option>
                    <option value="usucapiao">Usucapião rural</option>
                  </optgroup>
                  <optgroup label="Sobreposição e Áreas Protegidas">
                    <option value="sobreposto-uc">Sobreposição com Unidade de Conservação</option>
                    <option value="zona-amortecimento">Zona de amortecimento</option>
                    <option value="terra-indigena">Conflito com Terra Indígena / Quilombola</option>
                  </optgroup>
                  <optgroup label="Defesa e Embargos">
                    <option value="embargado">Embargo ambiental (ICMBio/IBAMA/IAT)</option>
                    <option value="multa">Multa ou autuação ambiental</option>
                    <option value="licenciamento">Licenciamento ambiental</option>
                  </optgroup>
                  <optgroup label="Proteção Patrimonial">
                    <option value="divida">Dívida rural / Juros abusivos</option>
                    <option value="leilao">Fazenda indo a leilão</option>
                    <option value="inventario">Inventário e partilha rural</option>
                    <option value="contratos">Contratos agrários (arrendamento, parceria)</option>
                  </optgroup>
                  <optgroup label="Oportunidades e Análise">
                    <option value="due-diligence">Due diligence / Compra de imóvel</option>
                    <option value="carbono">Créditos de carbono</option>
                    <option value="holding">Holding familiar / Planejamento sucessório</option>
                  </optgroup>
                  <option value="outro">Outro assunto não listado</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Conte-nos mais sobre a situação do seu imóvel..."
                  className="w-full px-4 py-3 bg-venturi-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-venturi-gold transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-lg transition gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar pelo WhatsApp
              </Link>

              <p className="text-xs text-gray-500 text-center">
                Seus dados estão protegidos. Sem spam.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-wrap py-16 md:py-24 bg-gradient-to-b from-transparent via-venturi-dark to-venturi-dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>A análise inicial é realmente gratuita?</span>
                <svg
                  className="w-5 h-5 transition group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Sim. Realizamos avaliação preliminar sem custo para entender o contexto do seu imóvel e identificar os principais desafios. Essa análise inicial permite que ambos decidam se há possibilidade de prosseguimento.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>Vocês atendem fora do Paraná?</span>
                <svg
                  className="w-5 h-5 transition group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Sim. Atuação 100% remota em 8 estados brasileiros. Independentemente da localização do imóvel, podemos realizar a análise e consultoria de forma eficiente e segura.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>Quanto tempo leva para ter um retorno?</span>
                <svg
                  className="w-5 h-5 transition group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Retornamos em até 2 horas em horário comercial. A rapidez é uma de nossas diferenciais. Você receberá um contato pelo WhatsApp com os próximos passos da análise.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>Como funciona o pagamento?</span>
                <svg
                  className="w-5 h-5 transition group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Adotamos um modelo de pagamento equilibrado: 50% na assinatura do contrato e 50% na entrega do trabalho finalizado. Isso garante segurança para ambas as partes.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>Posso enviar documentos pelo WhatsApp?</span>
                <svg className="w-5 h-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Sim, é nosso canal principal de recebimento. O WhatsApp oferece praticidade e rastreamento das comunicações. Todos os documentos serão organizados e tratados com sigilo total.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>Meu imóvel está embargado. Vocês podem ajudar?</span>
                <svg className="w-5 h-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Sim. Temos ampla experiência em defesa contra embargos do ICMBio, IBAMA e IAT. Atuamos na esfera administrativa e judicial para reverter a decisão e devolver o uso da sua propriedade. Nossa taxa de êxito em reversão de embargos é superior a 90%.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>Quais documentos preciso ter em mãos para a análise?</span>
                <svg className="w-5 h-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Para a conversa inicial, não precisa de nada — basta nos contar sua situação. Se decidir prosseguir, os documentos comuns são: matrícula do imóvel, CAR, CCIR, ITR, e qualquer notificação ou auto de infração que tenha recebido. Orientamos você sobre tudo que precisaremos.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>Vocês trabalham com créditos de carbono?</span>
                <svg className="w-5 h-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Sim. Ajudamos proprietários rurais a monetizar a preservação ambiental das suas propriedades através de créditos de carbono voluntários. Fazemos a análise de viabilidade, estruturação jurídica e conexão com mercados. Tudo com segurança e transparência.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>Minha fazenda está indo a leilão. Tem como impedir?</span>
                <svg className="w-5 h-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Em muitos casos, sim. Atuamos com ações judiciais urgentes para suspensão de leilão, podendo ser resolutivo em até 48 horas dependendo do caso. O tempo é crítico — quanto antes entrar em contato, maiores as chances de proteger seu patrimônio.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group border border-gray-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-white bg-gray-900 group-open:bg-gray-800 transition flex items-center justify-between">
                <span>Vocês atendem pessoa jurídica (empresas rurais)?</span>
                <svg className="w-5 h-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 text-gray-300 bg-gray-950 border-t border-gray-700">
                Sim. Atendemos tanto pessoas físicas quanto jurídicas. Para empresas rurais, oferecemos também consultoria em estruturação societária, contratos agrários, planejamento sucessório e compliance ambiental. Nossa equipe tem especialistas em Direito Empresarial dedicados a esse perfil de cliente.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-wrap py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prefere falar agora?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Entre em contato conosco pelo WhatsApp e comece sua análise imediatamente.
          </p>
          <Link
            href={company.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg transition gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Abrir WhatsApp {company.whatsapp}
          </Link>
        </div>
      </section>
    </main>
  );
}
