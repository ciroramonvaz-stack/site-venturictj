diff --git a/src/app/solucoes/page.tsx b/src/app/solucoes/page.tsx
index 84425b9217f6a0ecf562d294621e94e3c55d02ed..51bc0481278cb444bcd200cce57a1cd0d555ad7e 100644
--- a/src/app/solucoes/page.tsx
+++ b/src/app/solucoes/page.tsx
@@ -2,65 +2,65 @@ import Link from 'next/link';
 import { getPageMetadata } from '@/lib/seo';
 import { siteData } from '@/content/siteData';
 import SchedulingCTA from '@/components/SchedulingCTA';
 
 export const metadata = getPageMetadata('Soluções | VENTURI');
 
 export default function SolucoesPage() {
   const { company, solutions, products } = siteData;
 
   return (
     <main className="bg-black text-white">
       {/* ===== HERO SECTION ===== */}
       <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-black/95 to-black border-b border-white/10">
         <div className="section-wrap">
           <div className="max-w-3xl">
             {/* Kicker */}
             <div className="gold-kicker mb-6">Soluções</div>
 
             {/* Headline */}
             <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
               Seu imóvel está travado? Temos a solução técnica e jurídica para cada frente.
             </h1>
 
             {/* Subtitle */}
             <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
-              Sobreposição com UC, embargo do ICMBio, pendência no CAR/SIGEF ou restrição do IAT — cobrimos cada frente com diagnóstico e plano de ação sob medida.
+              Em linguagem simples e com profundidade técnica: resolvemos sobreposição com UC, regularização fundiária e ambiental, dívidas rurais e estruturação de créditos de carbono para imóveis rurais.
             </p>
           </div>
         </div>
       </section>
 
       {/* ===== SOLUTIONS DETAILED SECTION ===== */}
       {solutions && solutions.length > 0 && (
         <section className="py-24 bg-black border-b border-white/10">
           <div className="section-wrap">
             {/* Section Header */}
             <div className="mb-16">
               <div className="gold-kicker mb-4">NOSSAS SOLUÇÕES</div>
               <h2 className="font-serif text-4xl md:text-5xl font-bold">
-                5 Áreas de Especialização
+                Frentes estratégicas para imóveis rurais
               </h2>
             </div>
 
             {/* Solutions Grid - Full Details */}
             <div className="space-y-8">
               {solutions.map((solution, index) => (
                 <div
                   id={solution.id}
                   key={solution.id}
                   className="group rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 md:p-12 hover:border-venturi-gold/50 hover:from-white/15 hover:to-white/10 transition-all duration-300"
                 >
                   {/* Grid Layout */}
                   <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                     {/* Icon and Number */}
                     <div className="md:col-span-2 flex flex-col items-center md:items-start">
                       {/* Icon */}
                       <div className="text-6xl mb-4 md:mb-6">{solution.icon}</div>
 
                       {/* Step Number */}
                       <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-venturi-gold/20 border border-venturi-gold">
                         <span className="font-semibold text-venturi-gold">
                           {index + 1}
                         </span>
                       </div>
                     </div>
