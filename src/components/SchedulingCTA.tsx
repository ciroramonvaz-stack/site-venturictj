import Link from 'next/link';
import { siteData } from '@/content/siteData';

export default function SchedulingCTA() {
  const { company } = siteData;

  return (
    <section className="py-20 bg-gradient-to-b from-black to-black/95 border-b border-white/10">
      <div className="section-wrap text-center max-w-3xl mx-auto">
        <div className="gold-kicker mb-6">PRÓXIMO PASSO</div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Agende uma conversa com nossa equipe
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Diagnóstico inicial gratuito, sem compromisso. Resposta em até 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de conhecer mais sobre a Venturi e agendar uma conversa.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-venturi-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            📱 Fale no WhatsApp
          </a>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-venturi-gold text-venturi-gold font-semibold rounded-lg hover:bg-venturi-gold/10 transition-colors duration-300"
          >
            Formulário de Contato
          </Link>
        </div>
      </div>
    </section>
  );
}
