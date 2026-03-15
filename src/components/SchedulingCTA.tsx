import Link from 'next/link';
import { company } from '@/content/siteData';

export default function SchedulingCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-venturi-gold/[0.03] to-transparent" />

      <div className="section-wrap relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Kicker */}
          <div className="gold-kicker mb-6">Próximo Passo</div>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pronto para <span className="gradient-text">destravar</span> seu imóvel?
          </h2>

          {/* Description */}
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Agende uma conversa inicial sem compromisso. Vamos entender sua situação e apresentar o caminho mais eficiente.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consultoria com a Venturi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-green-700" />
              Fale no WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/15 text-white/80 font-medium rounded-lg hover:bg-white/5 hover:border-white/25 transition-all duration-300 text-sm tracking-wide"
            >
              Enviar Mensagem
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-10 text-xs text-white/25 tracking-wide">
            Resposta em até 24h • 100% remoto • Atendimento em todo o Brasil
          </p>
        </div>
      </div>
    </section>
  );
}
