'use client';

import { useState } from 'react';
import { company } from '@/content/siteData';

export default function LeadCaptureForm() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [perfil, setPerfil] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Olá! Sou ${nome} (${perfil}). Meu WhatsApp: ${whatsapp}. Gostaria de uma análise gratuita do meu imóvel.`;
    const url = `${company.whatsappLink}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="bg-white/[0.04] backdrop-blur-xl border border-venturi-gold/20 rounded-2xl p-6 md:p-8 max-w-md">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">Mensagem Enviada!</h3>
          <p className="text-white/50 text-sm">Nosso time retorna em até 2 horas em horário comercial.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 max-w-md hover:border-venturi-gold/20 transition-all duration-500">
      {/* Header do form */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-gold" />
          <span className="text-xs uppercase tracking-[0.2em] text-green-400 font-semibold">Análise Gratuita</span>
        </div>
        <h3 className="text-white font-serif text-xl font-bold mb-1">Diagnóstico Preliminar</h3>
        <p className="text-white/40 text-sm">Sem compromisso. Retorno em até 2h.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-venturi-gold/40 focus:bg-white/[0.08] transition-all duration-300"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="WhatsApp (com DDD)"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
            className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-venturi-gold/40 focus:bg-white/[0.08] transition-all duration-300"
          />
        </div>
        <div>
          <select
            value={perfil}
            onChange={(e) => setPerfil(e.target.value)}
            required
            className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-venturi-gold/40 focus:bg-white/[0.08] transition-all duration-300 appearance-none cursor-pointer"
            style={{ color: perfil ? 'white' : 'rgba(255,255,255,0.3)' }}
          >
            <option value="" disabled className="bg-[#0a0e1a] text-white/30">Qual seu perfil?</option>
            <option value="Proprietário Rural (Pequeno)" className="bg-[#0a0e1a] text-white">Proprietário Rural (Pequeno)</option>
            <option value="Proprietário Rural (Médio/Grande)" className="bg-[#0a0e1a] text-white">Proprietário Rural (Médio/Grande)</option>
            <option value="Órgão Público / Município" className="bg-[#0a0e1a] text-white">Órgão Público / Município</option>
            <option value="Investidor / Fundo" className="bg-[#0a0e1a] text-white">Investidor / Fundo</option>
            <option value="Banco / Cooperativa" className="bg-[#0a0e1a] text-white">Banco / Cooperativa</option>
            <option value="Outro" className="bg-[#0a0e1a] text-white">Outro</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full btn-glow bg-venturi-gold text-black font-semibold py-3.5 rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm tracking-wide flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Solicitar Análise Gratuita
        </button>
      </form>

      {/* Selo de garantia */}
      <div className="mt-5 pt-5 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="shrink-0 w-10 h-10 rounded-full bg-venturi-gold/10 border border-venturi-gold/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-venturi-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="text-white/60 text-xs font-medium">100% Gratuito e Sem Compromisso</p>
            <p className="text-white/30 text-[10px]">Seus dados estão protegidos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
