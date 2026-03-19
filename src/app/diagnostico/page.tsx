'use client';

// Extend Window for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

import { useState } from 'react';
import { siteData } from '@/content/siteData';

const { company } = siteData;

const problemasDocumentais = [
  'Matrícula desatualizada, incompleta ou com erros de área/limites',
  'Não consigo registrar a escritura por problemas na cadeia dominial',
  'Imóvel em nome de pessoa falecida há anos',
  'Conflito de limites com vizinhos ou confrontantes',
  'Duas matrículas para o mesmo imóvel (sobreposição registral)',
  'Nunca consegui fazer o georreferenciamento / certificação',
];

const problemasAmbientais = [
  'Área notificada ou embargada por órgão ambiental (IBAMA, ICMBio, IAT)',
  'Recebi auto de infração ambiental',
  'Área pode estar dentro ou no entorno de Unidade de Conservação',
  'APP que dificulta o uso da propriedade',
  'Dificuldade para obter licença ambiental ou autorização de supressão',
  'CAR cancelado, suspenso ou com inconsistência',
];

const problemasOperacionais = [
  'Preciso vender ou transferir o imóvel mas há impedimentos',
  'Preciso de financiamento rural mas a área não está regularizada',
  'Quero investir/comprar terra e preciso de diagnóstico antes',
  'Terra parada e não sei qual o problema real',
  'Recebi proposta de compra e quero saber os riscos',
];

export default function DiagnosticoPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nome: '', telefone: '', email: '', municipioResidente: '', comoEncontrou: '',
    nomeImovel: '', municipioImovel: '', areaTotal: '', tipoUso: '',
    temMatricula: '', temCAR: '', temSIGEF: '', temEscritura: '',
    anosPossse: '', emInventario: '',
    problemasDoc: [] as string[],
    problemasAmb: [] as string[],
    problemasOp: [] as string[],
    objetivo: '', jaTentou: '', prazoUrgente: '', observacoes: '',
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const toggleCheck = (field: 'problemasDoc' | 'problemasAmb' | 'problemasOp', value: string) => {
    setForm(prev => {
      const arr = prev[field];
      return { ...prev, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] };
    });
  };

  const handleSubmit = () => {
    const lines = [
      '*PRÉ-DIAGNÓSTICO FUNDIÁRIO*', '',
      '*Identificação*',
      'Nome: ' + form.nome,
      'Telefone: ' + form.telefone,
      'E-mail: ' + form.email,
      'Município: ' + form.municipioResidente,
      'Como encontrou: ' + form.comoEncontrou, '',
      '*Dados do Imóvel*',
      'Imóvel: ' + form.nomeImovel,
      'Localização: ' + form.municipioImovel,
      'Área: ' + form.areaTotal + ' ha',
      'Uso: ' + form.tipoUso,
      'Matrícula: ' + form.temMatricula,
      'CAR: ' + form.temCAR,
      'SIGEF: ' + form.temSIGEF,
      'Escritura: ' + form.temEscritura,
      'Posse: ' + form.anosPossse + ' anos',
      'Inventário: ' + form.emInventario,
    ];

    const allProblemas = [...form.problemasDoc, ...form.problemasAmb, ...form.problemasOp];
    if (allProblemas.length > 0) {
      lines.push('', '*Problemas Identificados*');
      allProblemas.forEach(p => lines.push('- ' + p));
    }

    if (form.objetivo) lines.push('', '*Objetivo:* ' + form.objetivo);
    if (form.jaTentou) lines.push('*Já tentou resolver:* ' + form.jaTentou);
    if (form.prazoUrgente) lines.push('*Prazo urgente:* ' + form.prazoUrgente);
    if (form.observacoes) lines.push('*Obs:* ' + form.observacoes);

    const msg = encodeURIComponent(lines.join('\n'));
    const waUrl = company.whatsappLink + '?text=' + msg;

    // Google Ads conversion tracking with event_callback
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      let opened = false;
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18018469103/kpwVCLDEpYscEO-J8I9D',
        'event_callback': () => {
          if (!opened) { opened = true; window.open(waUrl, '_blank'); }
        }
      });
      // Fallback if callback doesn't fire within 1s
      setTimeout(() => { if (!opened) { opened = true; window.open(waUrl, '_blank'); } }, 1000);
    } else {
      window.open(waUrl, '_blank');
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-venturi-gold/50 focus:ring-1 focus:ring-venturi-gold/30 transition-colors";
  const labelClass = "block text-sm font-medium text-white/70 mb-1.5";
  const radioGroupClass = "flex gap-4 flex-wrap";
  const radioClass = "flex items-center gap-2 cursor-pointer text-sm text-white/70 hover:text-white transition-colors";

  const RadioOption = ({ field, value, label }: { field: string; value: string; label: string }) => (
    <label className={radioClass}>
      <input type="radio" name={field} value={value} checked={(form as unknown as Record<string, string>)[field] === value}
        onChange={() => update(field, value)}
        className="w-4 h-4 accent-amber-600" />
      {label}
    </label>
  );

  const CheckItem = ({ field, value }: { field: 'problemasDoc' | 'problemasAmb' | 'problemasOp'; value: string }) => (
    <label className="flex items-start gap-3 cursor-pointer text-sm text-white/70 hover:text-white transition-colors py-1.5">
      <input type="checkbox" checked={form[field].includes(value)}
        onChange={() => toggleCheck(field, value)}
        className="w-4 h-4 mt-0.5 accent-amber-600 shrink-0" />
      <span>{value}</span>
    </label>
  );

  return (
    <>
      <main className="min-h-screen bg-venturi-bg pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="gold-kicker mb-3">DIAGNÓSTICO GRATUITO</div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Formulário de Pré-Diagnóstico <span className="text-venturi-gold">Fundiário Rural</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">
              Preencha com as informações disponíveis. Não é necessário ter todos os documentos agora. Após o envio, entraremos em contato em até 24 horas.
            </p>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3, 4].map(s => (
              <button key={s} onClick={() => setStep(s)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step === s ? 'bg-venturi-gold text-venturi-bg' : s < step ? 'bg-venturi-gold/30 text-white' : 'bg-white/10 text-white/40'
                }`}>{s}</button>
            ))}
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-10">

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl font-bold text-white mb-6">Identificação do Solicitante</h2>
                <div>
                  <label className={labelClass}>Nome completo *</label>
                  <input className={inputClass} value={form.nome} onChange={e => update('nome', e.target.value)} placeholder="Seu nome" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Telefone / WhatsApp *</label>
                    <input className={inputClass} value={form.telefone} onChange={e => update('telefone', e.target.value)} placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className={labelClass}>E-mail</label>
                    <input className={inputClass} type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="seu@email.com" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Estado / Município onde reside</label>
                  <input className={inputClass} value={form.municipioResidente} onChange={e => update('municipioResidente', e.target.value)} placeholder="Ex: Ponta Grossa - PR" />
                </div>
                <div>
                  <label className={labelClass}>Como nos encontrou?</label>
                  <input className={inputClass} value={form.comoEncontrou} onChange={e => update('comoEncontrou', e.target.value)} placeholder="Google, indicação, Instagram..." />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl font-bold text-white mb-6">Dados do Imóvel Rural</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Nome do imóvel / propriedade</label>
                    <input className={inputClass} value={form.nomeImovel} onChange={e => update('nomeImovel', e.target.value)} placeholder="Ex: Fazenda Santa Maria" />
                  </div>
                  <div>
                    <label className={labelClass}>Município e Estado do imóvel</label>
                    <input className={inputClass} value={form.municipioImovel} onChange={e => update('municipioImovel', e.target.value)} placeholder="Ex: Castro - PR" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Área total (hectares)</label>
                    <input className={inputClass} value={form.areaTotal} onChange={e => update('areaTotal', e.target.value)} placeholder="Ex: 150" />
                  </div>
                  <div>
                    <label className={labelClass}>Tipo de uso atual</label>
                    <input className={inputClass} value={form.tipoUso} onChange={e => update('tipoUso', e.target.value)} placeholder="Pecuária, agricultura, floresta..." />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Tem matrícula no Cartório de Registro?</label>
                  <div className={radioGroupClass}>
                    <RadioOption field="temMatricula" value="Sim" label="Sim" />
                    <RadioOption field="temMatricula" value="Não" label="Não" />
                    <RadioOption field="temMatricula" value="Não sabe" label="Não sei" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Tem CAR (Cadastro Ambiental Rural)?</label>
                  <div className={radioGroupClass}>
                    <RadioOption field="temCAR" value="Sim" label="Sim" />
                    <RadioOption field="temCAR" value="Não" label="Não" />
                    <RadioOption field="temCAR" value="Não sabe" label="Não sei" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Tem certificação INCRA/SIGEF?</label>
                  <div className={radioGroupClass}>
                    <RadioOption field="temSIGEF" value="Sim" label="Sim" />
                    <RadioOption field="temSIGEF" value="Não" label="Não" />
                    <RadioOption field="temSIGEF" value="Em andamento" label="Em andamento" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Tem escritura ou contrato de compra e venda?</label>
                  <div className={radioGroupClass}>
                    <RadioOption field="temEscritura" value="Sim" label="Sim" />
                    <RadioOption field="temEscritura" value="Não" label="Não" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Quantos anos está na posse?</label>
                    <input className={inputClass} value={form.anosPossse} onChange={e => update('anosPossse', e.target.value)} placeholder="Ex: 12" />
                  </div>
                  <div>
                    <label className={labelClass}>Imóvel em inventário/herança?</label>
                    <div className={radioGroupClass + ' mt-3'}>
                      <RadioOption field="emInventario" value="Sim" label="Sim" />
                      <RadioOption field="emInventario" value="Não" label="Não" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-8">
                <h2 className="font-serif text-xl font-bold text-white mb-2">Identificação do Problema</h2>
                <p className="text-white/50 text-sm mb-6">Marque todas as situações que se aplicam ao seu caso.</p>

                <div>
                  <h3 className="text-venturi-gold font-semibold text-sm uppercase tracking-wider mb-3">Problemas Documentais e Registrais</h3>
                  <div className="space-y-1">
                    {problemasDocumentais.map(p => <CheckItem key={p} field="problemasDoc" value={p} />)}
                  </div>
                </div>

                <div>
                  <h3 className="text-venturi-gold font-semibold text-sm uppercase tracking-wider mb-3">Problemas Ambientais e Fundiários</h3>
                  <div className="space-y-1">
                    {problemasAmbientais.map(p => <CheckItem key={p} field="problemasAmb" value={p} />)}
                  </div>
                </div>

                <div>
                  <h3 className="text-venturi-gold font-semibold text-sm uppercase tracking-wider mb-3">Problemas Operacionais e Negociais</h3>
                  <div className="space-y-1">
                    {problemasOperacionais.map(p => <CheckItem key={p} field="problemasOp" value={p} />)}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl font-bold text-white mb-6">Contexto e Objetivo</h2>
                <div>
                  <label className={labelClass}>O que você quer resolver com esse diagnóstico?</label>
                  <textarea className={inputClass + ' h-24 resize-none'} value={form.objetivo} onChange={e => update('objetivo', e.target.value)} placeholder="Descreva brevemente seu objetivo principal..." />
                </div>
                <div>
                  <label className={labelClass}>Já tentou resolver antes? O que aconteceu?</label>
                  <textarea className={inputClass + ' h-20 resize-none'} value={form.jaTentou} onChange={e => update('jaTentou', e.target.value)} placeholder="Ex: Contratei um topógrafo mas o processo travou no INCRA..." />
                </div>
                <div>
                  <label className={labelClass}>Tem prazo urgente? Qual?</label>
                  <input className={inputClass} value={form.prazoUrgente} onChange={e => update('prazoUrgente', e.target.value)} placeholder="Ex: Preciso vender até julho, financiamento..." />
                </div>
                <div>
                  <label className={labelClass}>Observações adicionais</label>
                  <textarea className={inputClass + ' h-20 resize-none'} value={form.observacoes} onChange={e => update('observacoes', e.target.value)} placeholder="Qualquer informação extra que julgue relevante..." />
                </div>
                <div className="bg-venturi-gold/10 border border-venturi-gold/20 rounded-xl p-5 mt-6">
                  <p className="text-white/70 text-sm leading-relaxed">
                    Ao enviar, suas respostas serão encaminhadas via WhatsApp para nossa equipe. As informações são <strong className="text-white">sigilosas</strong> e utilizadas exclusivamente para elaboração do diagnóstico. Retornaremos em até <strong className="text-white">24 horas úteis</strong>.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/10">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)}
                  className="text-white/50 hover:text-white transition-colors text-sm">
                  ← Voltar
                </button>
              ) : <div />}

              {step < 4 ? (
                <button onClick={() => setStep(step + 1)}
                  className="bg-venturi-gold hover:bg-venturi-gold/90 text-venturi-bg font-bold px-8 py-3 rounded-lg transition-all">
                  Próximo →
                </button>
              ) : (
                <button onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-lg transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.03L.789 23.553a.5.5 0 00.611.611l4.523-1.495A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.327 0-4.49-.752-6.246-2.032l-.436-.328-2.692.889.889-2.692-.328-.436A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  Enviar via WhatsApp
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
