'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteData } from '@/content/siteData';
import SchedulingCTA from '@/components/SchedulingCTA';

export default function ContatoPage() {
  const { company } = siteData;

  // Form state
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    municipio: '',
    estado: '',
    area: '',
    situacao: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.nome ||
      !formData.email ||
      !formData.whatsapp ||
      !formData.municipio ||
      !formData.estado ||
      !formData.area ||
      !formData.situacao
    ) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const message = `
*Novo contato via site - Venturi CTJ*

*Dados do cliente:*
Nome: ${formData.nome}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Município/Estado: ${formData.municipio}, ${formData.estado}
Área (ha): ${formData.area}

*Situação do imóvel:*
${formData.situacao}

---
Enviado via formulário de contato
    `.trim();

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with message
    const whatsappURL = `${company.whatsappLink}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    // Reset form
    setTimeout(() => {
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        municipio: '',
        estado: '',
        area: '',
        situacao: '',
      });
      setIsSubmitting(false);
    }, 500);
  };

  const estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  return (
    <main className="bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-black/95 to-black border-b border-white/10">
        <div className="section-wrap">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Fale com a Venturi
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Análise preliminar gratuita e sem compromisso. Descubra em 24 horas o que está travando seu imóvel — e como resolver.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN SECTION ===== */}
      <section className="py-24 bg-black border-b border-white/10">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold mb-2">
                  Conte-nos sobre seu imóvel
                </h2>
                <p className="text-white/70 mb-8">
                  Preencha os dados abaixo e nossa equipe fará uma avaliação preliminar gratuita em até 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="(41) 99999-0000"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Município e Estado */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        Município *
                      </label>
                      <input
                        type="text"
                        name="municipio"
                        value={formData.municipio}
                        onChange={handleInputChange}
                        placeholder="Ex: Ponta Grossa"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold transition-colors duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        Estado *
                      </label>
                      <select
                        name="estado"
                        value={formData.estado}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-venturi-gold transition-colors duration-300"
                        required
                      >
                        <option value="">Selecione...</option>
                        {estados.map((estado) => (
                          <option key={estado} value={estado}>
                            {estado}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Área */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Área da Propriedade (hectares) *
                    </label>
                    <input
                      type="number"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      placeholder="Ex: 100"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Situação */}
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      Situação do Imóvel *
                    </label>
                    <textarea
                      name="situacao"
                      value={formData.situacao}
                      onChange={handleInputChange}
                      placeholder="Descreva brevemente a situação: se está embargado, tem restrições ambientais, precisa de SIGEF, etc."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-venturi-gold transition-colors duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Privacy Note */}
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-white/60 text-sm">
                      ℹ️ Seus dados serão utilizados apenas para contato e elaboração da proposta. Sigilo profissional garantido.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : '📱 Enviar via WhatsApp'}
                  </button>

                  {/* Alternative Contact */}
                  <p className="text-center text-white/60 text-sm">
                    Ou envie um email para{' '}
                    <a
                      href={`mailto:${company.email}`}
                      className="text-venturi-gold hover:text-yellow-400 transition-colors duration-300"
                    >
                      {company.email}
                    </a>
                  </p>
                </form>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 sticky top-24">
                <h3 className="font-semibold text-lg mb-8 text-venturi-gold">
                  Informações de Contato
                </h3>

                {/* WhatsApp */}
                <div className="mb-8">
                  <p className="text-white/60 text-sm mb-2">WhatsApp</p>
                  <a
                    href={company.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-venturi-gold font-semibold hover:text-yellow-400 transition-colors duration-300"
                  >
                    <span className="text-xl">💬</span>
                    {company.whatsapp}
                  </a>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <p className="text-white/60 text-sm mb-2">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 text-venturi-gold font-semibold hover:text-yellow-400 transition-colors duration-300"
                  >
                    <span className="text-xl">📧</span>
                    {company.email}
                  </a>
                </div>

                {/* Address */}
                <div className="mb-8">
                  <p className="text-white/60 text-sm mb-2">Localização</p>
                  <p className="text-white/80 flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">📍</span>
                    {company.address}
                  </p>
                </div>

                {/* Instagram */}
                <div className="mb-8">
                  <p className="text-white/60 text-sm mb-2">Redes Sociais</p>
                  <a
                    href={`https://instagram.com/${company.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-venturi-gold font-semibold hover:text-yellow-400 transition-colors duration-300"
                  >
                    <span className="text-xl">📱</span>
                    {company.instagram}
                  </a>
                </div>

                {/* Hours */}
                <div className="pt-8 border-t border-white/10">
                  <p className="text-white/60 text-sm mb-2">Horário de Atendimento</p>
                  <p className="text-white/80 font-semibold">
                    Segunda a Sexta
                    <br />
                    08:00 - 18:00
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Resposta em até 24 horas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-black to-white/5 border-b border-white/10">
        <div className="section-wrap max-w-3xl">
          <div className="rounded-lg bg-white/5 border border-white/10 p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold mb-6">
              Próximos Passos
            </h2>
            <ol className="space-y-4 text-white/70">
              <li className="flex gap-4">
                <span className="text-venturi-gold font-semibold flex-shrink-0">
                  1.
                </span>
                <span>
                  Você preenche o formulário acima ou envia uma mensagem via WhatsApp
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-venturi-gold font-semibold flex-shrink-0">
                  2.
                </span>
                <span>
                  Nossa equipe cruza as informações com bases públicas e avalia o cenário em até 24h
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-venturi-gold font-semibold flex-shrink-0">
                  3.
                </span>
                <span>
                  Agendamos uma conversa gratuita de 30 minutos para apresentar o diagnóstico preliminar
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-venturi-gold font-semibold flex-shrink-0">
                  4.
                </span>
                <span>
                  Você recebe proposta sob medida com escopo detalhado, prazo definido e valor fixo — sem surpresas
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULING CTA SECTION ===== */}
      <SchedulingCTA />
    </main>
  );
}
