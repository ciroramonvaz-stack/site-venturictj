diff --git a/src/content/siteData.ts b/src/content/siteData.ts
index e11bf8278ea629c8985ad49355c66187f4652852..06e7a99c6e9f8a47ac6506fd63124b5cb7fc3525 100644
--- a/src/content/siteData.ts
+++ b/src/content/siteData.ts
@@ -3,55 +3,55 @@ export const company = {
   shortName: 'VENTURI',
   pronunciation: 'Vênturi',
   tagline: 'Consultoria Técnica & Jurídica para imóveis rurais embargados, sobrepostos com UC ou com pendências fundiárias e ambientais.',
   description: 'A Venturi identifica o que está bloqueando seu imóvel rural — documentação, sobreposição ambiental, embargo ou cadeia dominial — e entrega um plano claro para resolver.',
   address: 'Rua Santos Dumont, 188 - Centro - Ponta Grossa - PR',
   city: 'Ponta Grossa',
   state: 'Paraná',
   whatsapp: '+55 42 99976-3857',
   whatsappLink: 'https://wa.me/5542999763857',
   email: 'contato@venturictj.com',
   instagram: '@venturictj',
   instagramLink: 'https://instagram.com/venturictj',
   site: 'https://venturictj.com',
   copyright: '© 2026 | Ponta Grossa - Paraná',
   mission: 'Traduzir a complexidade regulatória do campo em decisões claras, seguras e aplicáveis — para que nenhum proprietário rural perca patrimônio por falta de orientação técnica.',
   whatWeDo: 'A Venturi atua na interseção entre direito ambiental, direito registral e gestão territorial. Nosso foco são imóveis rurais travados por sobreposições com Unidades de Conservação, problemas documentais, irregularidades no CAR/SIGEF e restrições administrativas.',
   values: [
     { title: 'Precisão técnica', description: 'Análise rigorosa com base em dados, legislação e evidências georreferenciadas' },
     { title: 'Comunicação direta', description: 'Clareza total nas recomendações, sem jargão desnecessário' },
     { title: 'Compromisso com resultado', description: 'Foco em soluções aplicáveis no campo e aceitas pelos órgãos' },
     { title: 'Sigilo profissional', description: 'Proteção total das informações do cliente e do imóvel' },
   ],
 };
 
 export const navLinks = [
-  { href: '/#solucoes', label: 'Soluções' },
-  { href: '/#resultados', label: 'Resultados' },
-  { href: '/#quem-somos', label: 'Quem Somos' },
-  { href: '/#contato', label: 'Contato' },
-  { href: '/dividas-rurais/', label: 'Dívidas Rurais' },
+  { href: '/', label: 'Home' },
+  { href: '/solucoes', label: 'Soluções' },
+  { href: '/resultados', label: 'Resultados' },
+  { href: '/sobre', label: 'Quem Somos' },
+  { href: '/contato', label: 'Contato' },
 ];
 
 export const heroImages = [
   'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
   'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=80',
   'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80',
 ];
 
 export const solutions = [
   {
     id: 'uc-restricoes',
     title: 'Imóvel em Área Protegida',
     slug: 'uc-restricoes',
     icon: '🏛️',
     longDescription: 'Análise especializada de imóveis sobrepostos ou limítrofes a Unidades de Conservação federais e estaduais. Levantamento de restrições legais, mapeamento de direitos adquiridos e construção de estratégia para regularização fundiária. Atuação em negociação com ICMBio, IAT, IBAMA e demais órgãos gestores, incluindo elaboração de dossiê técnico-jurídico completo para destravar o patrimônio.',
   },
   {
     id: 'icmbio',
     title: 'Embargos Ambientais',
     slug: 'icmbio',
     icon: '📋',
     longDescription: 'Defesa administrativa contra autos de infração lavrados por ICMBio, IBAMA, IAT (PR) e demais órgãos ambientais estaduais e federais. Análise de legalidade do embargo, documentação histórica da propriedade, argumentação técnico-jurídica e apresentação de recursos administrativos. Atuação comprovada na reversão de embargos e negociação direta com autarquias ambientais em todo o Brasil.',
   },
   {
     id: 'iat-pr',
@@ -218,123 +218,90 @@ export const faq = [
     question: 'Qual a diferença entre georreferenciamento e certificação?',
     answer: 'O georreferenciamento é o levantamento técnico de campo que define as coordenadas exatas dos limites da propriedade. A certificação INCRA/SIGEF é o registro oficial dessa informação no sistema nacional. Ambos são necessários para regularização fundiária completa.',
   },
   {
     question: 'Posso vender meu imóvel sem certificação SIGEF?',
     answer: 'Depende da área e da situação registral. Propriedades acima de 4 módulos fiscais precisam de SIGEF obrigatoriamente. Mesmo abaixo disso, a certificação aumenta significativamente a atratividade para compradores, financeiras e investidores.',
   },
   {
     question: 'Como funciona o pagamento?',
     answer: '50% na assinatura do contrato para iniciar os trabalhos e 50% na entrega do relatório final. Aceitamos transferência bancária e Pix. Para projetos acima de R$ 50 mil, oferecemos condições especiais de parcelamento.',
   },
   {
     question: 'Tenho dívida rural com o banco. Vocês podem ajudar?',
     answer: 'Sim. Atuamos na defesa jurídica completa do produtor rural contra cobranças abusivas: revisão de contratos bancários, renegociação de cédulas de crédito rural, defesa em execuções, suspensão de leilão e recuperação judicial. A análise preliminar do contrato é gratuita.',
   },
   {
     question: 'O banco quer leiloar minha fazenda. O que faço?',
     answer: 'Entre em contato imediatamente. Atuamos com medidas judiciais urgentes (tutela de urgência) que podem suspender o leilão em 24-48 horas. Quanto antes agir, maiores as chances de proteger seu patrimônio. A análise inicial é gratuita e o atendimento é prioritário.',
   },
 ];
 
 export const products = [
   {
     id: 'diagnostico-fundiario',
     title: 'Raio-X do Imóvel',
-    subtitle: 'O raio-X que revela o que está travando seu imóvel',
+    subtitle: 'O raio-x que revela o que está travando seu imóvel',
     description: 'Análise técnico-jurídica abrangente que mapeia todas as questões fundiárias, ambientais e registrais da propriedade. Inclui análise de UCs, APPs, restrições estaduais, situação registral no SNCR e recomendações customizadas.',
     deliverables: [
       'Relatório técnico-jurídico completo',
       'Mapa de sobreposições e restrições',
       'Parecer jurídico fundamentado',
       'Dossiê administrativo organizado',
       'Termo de referência para georreferenciamento (se aplicável)',
     ],
     audience: 'Proprietários rurais, investidores imobiliários, instituições financeiras',
     trigger: 'Necessidade de clareza sobre conformidade fundiária antes de operações (venda, financiamento, investimento)',
     timeline: '10 a 15 dias úteis',
     price: 'Sob consulta',
   },
   {
     id: 'diagnostico-sobreposicao-uc',
     title: 'Análise de Área Protegida',
     subtitle: 'Seu imóvel sobrepõe com UC? Destrancamos a situação.',
-    description: 'Análise focada em propriedades que se sobrepõem ou fazem limite com Unidades de Conservação federais e estaduais. Avalia restrições, direitos adquiridos, possibilidades de regularização e estratégias de negociação com órgãos ambientais.',
+    description: 'Diagnóstico especializado para propriedades sobrepostas com Unidades de Conservação. Levantamos direitos adquiridos, cadeia dominial e estratégias práticas para regularizar sem promessas irreais.',
     deliverables: [
-      'Mapa técnico de sobreposição com UC',
-      'Parecer jurídico sobre direitos adquiridos',
-      'Análise de restrições de uso específicas',
-      'Estratégia de regularização ou negociação',
-      'Documentação para apresentação em órgãos',
+      'Levantamento de sobreposição oficial',
+      'Parecer de viabilidade técnica e jurídica',
+      'Plano de negociação com órgão ambiental',
     ],
-    audience: 'Proprietários com imóveis em UCs, fundos de investimento, operadores de crédito rural',
-    trigger: 'Imóvel sobreposto com UC, insegurança jurídica sobre uso, bloqueio em operações',
-    timeline: '12 a 18 dias úteis',
+    audience: 'Produtores rurais com embargo ou restrição por UC',
+    trigger: 'Imóvel bloqueado para venda, financiamento ou licenciamento',
+    timeline: '7 a 20 dias úteis',
     price: 'Sob consulta',
   },
   {
-    id: 'assessoria-certificacao-sigef',
-    title: 'Regularização INCRA/SIGEF',
-    subtitle: 'Sem SIGEF, sem venda. Resolvemos para você.',
-    description: 'Assessoria completa para inscrição de propriedade no SIGEF (Sistema de Gestão Fundiária) e certificação INCRA. Análise de documentação, verificação de conformidade registral, preparação de dossiê técnico e coordenação com profissionais habilitados.',
+    id: 'credito-carbono-rural',
+    title: 'Estratégia de Créditos de Carbono',
+    subtitle: 'Transforme preservação em nova fonte de receita',
+    description: 'Diagnóstico de elegibilidade, modelagem contratual e estrutura técnica para projetos de créditos de carbono em imóveis rurais. Atuamos do enquadramento à negociação com parceiros de mercado.',
     deliverables: [
-      'Análise de elegibilidade SIGEF',
-      'Verificação de documentação necessária',
-      'Termo de referência técnico',
-      'Acompanhamento do processo INCRA',
-      'Suporte na resolução de inconsistências',
+      'Pré-análise de potencial de carbono',
+      'Estrutura jurídica do projeto',
+      'Checklist técnico para certificação',
     ],
-    audience: 'Proprietários em processo de formalização, produtores que precisam de SIGEF para crédito',
-    trigger: 'Propriedade sem certificação fundiária, necessidade de SIGEF para financiamento ou venda',
-    timeline: '20 a 30 dias úteis',
-    price: 'Sob consulta',
-  },
-  {
-    id: 'defesa-dividas-rurais',
-    title: 'Defesa Contra o Banco',
-    subtitle: 'Banco cobrando abusivamente? Revisamos e defendemos.',
-    description: 'Defesa jurídica completa contra cobranças abusivas de bancos e cooperativas. Inclui revisão contratual, perícia contábil, renegociação, defesa em execuções bancárias, suspensão de leilão e assessoria para recuperação judicial do produtor rural.',
-    deliverables: [
-      'Análise preliminar gratuita do contrato',
-      'Laudo pericial contábil com recálculo',
-      'Peças judiciais (embargos, tutela de urgência)',
-      'Estratégia de renegociação com o banco',
-      'Acompanhamento processual até resolução',
-    ],
-    audience: 'Produtores rurais endividados, proprietários com imóvel ameaçado, agricultores com contratos abusivos',
-    trigger: 'Dívida rural crescendo, execução bancária, leilão marcado, juros abusivos',
-    timeline: '48h para medidas urgentes | 30 a 60 dias para revisão completa',
+    audience: 'Produtores, grupos familiares e investidores com área preservada',
+    trigger: 'Interesse em monetizar conservação com segurança jurídica',
+    timeline: '15 a 30 dias úteis',
     price: 'Sob consulta',
   },
 ];
 
 export const stats = [
-  {
-    number: '150+',
-    label: 'propriedades destravadas em todo o Brasil',
-  },
-  {
-    number: 'R$ 2,3 Mi+',
-    label: 'em crédito rural liberado para clientes',
-  },
-  {
-    number: '8',
-    label: 'estados atendidos — 100% remoto',
-  },
-  {
-    number: '< 2h',
-    label: 'para retorno em horário comercial',
-  },
+  { number: '150+', label: 'propriedades destravadas em todo o Brasil' },
+  { number: 'R$ 2,3 Mi+', label: 'em crédito rural liberado para clientes' },
+  { number: '8', label: 'estados atendidos — 100% remoto' },
+  { number: '< 2h', label: 'para retorno em horário comercial' },
 ];
 
 export const siteData = {
   company,
   navLinks,
   heroImages,
   solutions,
   methodology,
   deliverables,
   testimonials,
   faq,
   products,
   stats,
 };
