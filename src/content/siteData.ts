export const company = {
  name: 'Venturi Consultoria Técnica & Jurídica',
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
  { href: '/#solucoes', label: 'Soluções' },
  { href: '/#resultados', label: 'Resultados' },
  { href: '/#quem-somos', label: 'Quem Somos' },
  { href: '/#contato', label: 'Contato' },
  { href: '/dividas-rurais/', label: 'Dívidas Rurais' },
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
    title: 'Restrições Ambientais',
    slug: 'iat-pr',
    icon: '🌊',
    longDescription: 'Diagnóstico completo de restrições ambientais em âmbito estadual e federal: APPs, Reserva Legal, Áreas Úmidas, Zonas de Amortecimento e servidões administrativas. Cruzamento de dados geoespaciais com legislação vigente para identificar limitações e oportunidades de uso. Elaboração de parecer técnico com estratégias de compatibilização produtiva dentro do marco regulatório.',
  },
  {
    id: 'fundiario-sigef',
    title: 'Regularização de Documentos',
    slug: 'fundiario-sigef',
    icon: '📐',
    longDescription: 'Assessoria completa para certificação INCRA/SIGEF de propriedades rurais de qualquer porte. Análise minuciosa de cadeia dominial, verificação de conformidade registral e resolução de inconsistências cartoriais. Preparação de dossiê técnico robusto e coordenação com profissionais habilitados para georreferenciamento, retificação de área e inscrição definitiva no SIGEF.',
  },
  {
    id: 'defesa-administrativa',
    title: 'Defesa em Multas e Autuações',
    slug: 'defesa-administrativa',
    icon: '⚖️',
    longDescription: 'Elaboração e protocolo de recursos administrativos contra autuações fundiárias, ambientais e tributárias em todas as esferas. Análise jurídica aprofundada da fundamentação legal, construção de contraposição técnica com prova documental e pericial, e estratégia de negociação direta com órgãos autuantes. Histórico consistente de reversões e reduções de penalidades.',
  },
  {
    id: 'dividas-rurais',
    title: 'Dívidas Rurais',
    slug: 'dividas-rurais',
    icon: '💰',
    longDescription: 'Defesa jurídica completa do produtor rural contra cobranças abusivas de instituições financeiras. Revisão de contratos bancários, renegociação de cédulas de crédito rural, defesa em execuções bancárias, suspensão de leilão de propriedades e recuperação judicial. Perícia contábil própria para identificação de juros abusivos e anatocismo.',
  },
];

export const methodology = [
  {
    step: 1,
    title: 'Levantamento de Informações',
    description: 'Coleta e verificação cruzada de documentos registrais, ambientais e fiscais — identificamos lacunas antes que os órgãos identifiquem.',
  },
  {
    step: 2,
    title: 'Análise Técnica Preliminar',
    description: 'Mapeamento de restrições legais e sobreposições com bases oficiais (CNUC, CAR, SIGEF, SNCI).',
  },
  {
    step: 3,
    title: 'Diagnóstico Detalhado',
    description: 'Relatório técnico-jurídico com riscos quantificados, cenários de solução e estimativa de prazo para cada alternativa.',
  },
  {
    step: 4,
    title: 'Plano de Ação',
    description: 'Estratégia customizada de regularização com cronograma, responsáveis definidos e marcos de acompanhamento.',
  },
  {
    step: 5,
    title: 'Implementação e Suporte',
    description: 'Acompanhamento técnico e jurídico até a conclusão — com relatório de status semanal e acesso direto ao gestor do caso.',
  },
];

export const deliverables = [
  {
    id: 'relatorio-tecnico',
    title: 'Relatório Técnico-Jurídico',
    description: 'Documento completo com análise de restrições, mapeamento de riscos e recomendações.',
  },
  {
    id: 'mapa-sobreposicoes',
    title: 'Mapa de Sobreposições',
    description: 'Visualização cartográfica de UCs, APPs, limites registrais e conflitos detectados.',
  },
  {
    id: 'parecer-juridico',
    title: 'Parecer Jurídico',
    description: 'Análise legal de direitos adquiridos, alternativas legais e fundamentação normativa.',
  },
  {
    id: 'dossia-administrativo',
    title: 'Dossiê Administrativo',
    description: 'Compilação de documentos organizados para apresentação em órgãos públicos.',
  },
  {
    id: 'termo-referencia',
    title: 'Termo de Referência para Georreferenciamento',
    description: 'Especificações técnicas para contratação de profissional georreferenciador habilitado.',
  },
  {
    id: 'suporte-implementacao',
    title: 'Suporte na Implementação',
    description: 'Acompanhamento técnico e jurídico na execução das ações recomendadas.',
  },
];

export const testimonials = [
  {
    author: 'Cliente (M.F.)',
    area: 'Sobreposição UC',
    result: 'Venda concluída em 45 dias',
    text: 'Após 18 meses sem conseguir vender por conta de sobreposição com UC, a Venturi mapeou os direitos adquiridos e entregou o relatório que destravou a operação. Fechamos a venda em 45 dias.',
  },
  {
    author: 'Cliente (A.C.)',
    area: 'Diagnóstico Fundiário',
    result: 'Resolvido em 12 dias',
    text: 'O diagnóstico expedito da Venturi resolveu em 12 dias dúvidas que três advogados diferentes não conseguiram esclarecer em dois anos. Profissionalismo de outro nível.',
  },
  {
    author: 'Cliente (J.P.)',
    area: 'Crédito Rural',
    result: 'R$ 2,3 Mi liberados',
    text: 'O relatório técnico da Venturi foi aceito sem ressalvas pelo banco para liberação de R$ 2,3 milhões em crédito rural. Documentação impecável.',
  },
  {
    author: 'Cliente (R.L.)',
    area: 'Embargo Ambiental',
    result: 'Embargo revertido em 60 dias',
    text: 'Fazenda travada há 3 anos por embargo de órgão ambiental federal. A Venturi reverteu o embargo em 60 dias com defesa administrativa impecável. Equipe extremamente competente.',
  },
  {
    author: 'Cliente (S.M.)',
    area: 'Dívidas Rurais',
    result: 'Leilão suspenso + R$ 380 mil em redução',
    text: 'Minha fazenda ia a leilão em 20 dias. A Venturi conseguiu suspensão liminar e revisou o contrato que tinha R$ 380 mil em juros abusivos. Hoje renegociei com condições justas.',
  },
];

export const faq = [
  {
    question: 'O que é a Venturi CTJ?',
    answer: 'Somos a consultoria que proprietários rurais procuram quando o imóvel está embargado, sobreposto com UC ou travado por pendências fundiárias e ambientais. Atuamos 100% de forma remota, cruzando documentação registral com bases oficiais (CNUC, CAR, SIGEF, SNCI) para entregar diagnósticos técnico-jurídicos que destravam operações.',
  },
  {
    question: 'Para quem é o serviço?',
    answer: 'Proprietários rurais que não conseguem vender, financiar ou operar por conta de pendências. Investidores e fundos que precisam de due diligence ambiental antes de adquirir. Bancos e cooperativas que exigem parecer técnico para liberar crédito. Se o imóvel rural tem algum tipo de trava, nosso serviço resolve.',
  },
  {
    question: 'Como funciona o processo?',
    answer: 'Iniciamos com uma conversa inicial gratuita para entender a situação. Após, elaboramos um diagnóstico técnico que mapeia restrições legais, sobreposições e riscos. Com base nisso, propomos um plano de ação customizado com alternativas de solução.',
  },
  {
    question: 'Quanto custa o diagnóstico?',
    answer: 'Cada propriedade tem complexidade diferente, por isso trabalhamos com proposta sob medida. A conversa inicial é gratuita e sem compromisso — nela já identificamos as frentes de atuação e apresentamos proposta com escopo, prazo e valor definidos.',
  },
  {
    question: 'O diagnóstico inicial é gratuito?',
    answer: 'Sim. Realizamos uma avaliação preliminar gratuita para entender o contexto do imóvel e as questões específicas. A partir daí, apresentamos proposta comercial para diagnóstico completo com escopo, prazo e valor definidos.',
  },
  {
    question: 'Vocês atuam em todo o Brasil?',
    answer: 'Sim. O trabalho técnico e documental é realizado 100% de forma remota. Consultamos bases de dados federais e estaduais, então atendemos propriedades em qualquer estado brasileiro. Já realizamos diagnósticos em mais de 8 estados.',
  },
  {
    question: 'Quanto tempo leva um diagnóstico completo?',
    answer: 'Entre 10 e 15 dias úteis após o envio da documentação preliminar. O prazo pode variar caso seja necessário solicitar documentos adicionais ao cliente ou aos órgãos públicos.',
  },
  {
    question: 'Meu imóvel foi embargado por órgão ambiental (ICMBio, IBAMA, IAT etc.). Vocês ajudam?',
    answer: 'Sim. Atuamos contra embargos de qualquer órgão ambiental — ICMBio, IBAMA, IAT (PR), IMA, IEMA e demais autarquias estaduais. Analisamos o auto de infração, verificamos a legalidade do embargo, pesquisamos direitos adquiridos do imóvel e elaboramos defesa administrativa com argumentação técnico-jurídica robusta para reversão ou negociação do embargo.',
  },
  {
    question: 'Preciso de georreferenciamento. Vocês fazem?',
    answer: 'Nosso foco é a análise técnica e jurídica que precede o georreferenciamento. Fornecemos termo de referência com especificações técnicas e indicamos profissionais habilitados INCRA para executar o georreferenciamento conforme necessário.',
  },
  {
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
    subtitle: 'O raio-X que revela o que está travando seu imóvel',
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
    description: 'Análise focada em propriedades que se sobrepõem ou fazem limite com Unidades de Conservação federais e estaduais. Avalia restrições, direitos adquiridos, possibilidades de regularização e estratégias de negociação com órgãos ambientais.',
    deliverables: [
      'Mapa técnico de sobreposição com UC',
      'Parecer jurídico sobre direitos adquiridos',
      'Análise de restrições de uso específicas',
      'Estratégia de regularização ou negociação',
      'Documentação para apresentação em órgãos',
    ],
    audience: 'Proprietários com imóveis em UCs, fundos de investimento, operadores de crédito rural',
    trigger: 'Imóvel sobreposto com UC, insegurança jurídica sobre uso, bloqueio em operações',
    timeline: '12 a 18 dias úteis',
    price: 'Sob consulta',
  },
  {
    id: 'assessoria-certificacao-sigef',
    title: 'Regularização INCRA/SIGEF',
    subtitle: 'Sem SIGEF, sem venda. Resolvemos para você.',
    description: 'Assessoria completa para inscrição de propriedade no SIGEF (Sistema de Gestão Fundiária) e certificação INCRA. Análise de documentação, verificação de conformidade registral, preparação de dossiê técnico e coordenação com profissionais habilitados.',
    deliverables: [
      'Análise de elegibilidade SIGEF',
      'Verificação de documentação necessária',
      'Termo de referência técnico',
      'Acompanhamento do processo INCRA',
      'Suporte na resolução de inconsistências',
    ],
    audience: 'Proprietários em processo de formalização, produtores que precisam de SIGEF para crédito',
    trigger: 'Propriedade sem certificação fundiária, necessidade de SIGEF para financiamento ou venda',
    timeline: '20 a 30 dias úteis',
    price: 'Sob consulta',
  },
  {
    id: 'defesa-dividas-rurais',
    title: 'Defesa Contra o Banco',
    subtitle: 'Banco cobrando abusivamente? Revisamos e defendemos.',
    description: 'Defesa jurídica completa contra cobranças abusivas de bancos e cooperativas. Inclui revisão contratual, perícia contábil, renegociação, defesa em execuções bancárias, suspensão de leilão e assessoria para recuperação judicial do produtor rural.',
    deliverables: [
      'Análise preliminar gratuita do contrato',
      'Laudo pericial contábil com recálculo',
      'Peças judiciais (embargos, tutela de urgência)',
      'Estratégia de renegociação com o banco',
      'Acompanhamento processual até resolução',
    ],
    audience: 'Produtores rurais endividados, proprietários com imóvel ameaçado, agricultores com contratos abusivos',
    trigger: 'Dívida rural crescendo, execução bancária, leilão marcado, juros abusivos',
    timeline: '48h para medidas urgentes | 30 a 60 dias para revisão completa',
    price: 'Sob consulta',
  },
];

export const stats = [
  {
    number: '150+',
    label: 'propriedades destravadas em todo o Brasil',
  },
  {
    number: 'R$ 2,3 Mi+',
    label: 'em crédito rural liberado para clientes',
  },
  {
    number: '8',
    label: 'estados atendidos — 100% remoto',
  },
  {
    number: '< 2h',
    label: 'para retorno em horário comercial',
  },
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
