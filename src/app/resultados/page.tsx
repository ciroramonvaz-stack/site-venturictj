import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/content/siteData';
export const metadata: Metadata = {
  title: 'Resultados Reais | Venturi CTJ',
  description:
    'Histórias reais de proprietários rurais que recuperaram o controle do seu patrimônio. Sem promessas exageradas — só fatos.',
  openGraph: {
    title: 'Resultados Reais | Venturi CTJ',
    description:
      'Histórias reais de proprietários rurais que recuperaram o controle do seu patrimônio. Sem promessas exageradas — só fatos.',
  },
};

interface CaseStudy {
  id: string;
  problem: string;
  solution: string;
  result: string;
  timeline: string;
  author: string;
  area: string;
  areaColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    problem:
      'Proprietário com 420 hectares no Paraná. Imóvel sobreposto com Unidade de Conservação estadual há 18 meses. Não conseguia vender nem financiar.',
    solution:
      'Mapeamento de direitos adquiridos, dossiê técnico-jurídico, negociação com IAT.',
    result: 'Venda concluída em 45 dias após entrega do relatório.',
    timeline: '23 dias de trabalho técnico',
    author: 'Cliente M.F. — Paraná',
    area: 'Sobreposição UC',
    areaColor: 'emerald',
  },
  {
    id: 'case-2',
    problem:
      'Fazenda de 850 hectares embargada há 3 anos por órgão ambiental federal. Proprietário já havia contratado dois escritórios sem resultado.',
    solution:
      'Análise de legalidade do embargo, pesquisa de direitos adquiridos, defesa administrativa com argumentação técnico-jurídica.',
    result: 'Embargo revertido em 60 dias.',
    timeline: '60 dias',
    author: 'Cliente R.L. — Mato Grosso do Sul',
    area: 'Embargo Ambiental',
    areaColor: 'orange',
  },
  {
    id: 'case-3',
    problem:
      'Investidor precisava de parecer técnico para due diligence antes de adquirir propriedade rural de 1.200 hectares. Três advogados anteriores não conseguiram esclarecer a situação registral.',
    solution:
      'Diagnóstico expedito cruzando bases oficiais (CNUC, CAR, SIGEF, SNCI).',
    result: 'Relatório entregue em 12 dias. Dúvidas esclarecidas. Compra realizada.',
    timeline: '12 dias',
    author: 'Cliente A.C. — São Paulo',
    area: 'Diagnóstico Fundiário',
    areaColor: 'blue',
  },
  {
    id: 'case-4',
    problem:
      'Produtor precisava de R$ 2,3 milhões em crédito rural para safra. Banco exigia parecer técnico sobre regularidade fundiária e ambiental da propriedade.',
    solution:
      'Relatório técnico-jurídico completo com análise de UCs, APPs, CAR e SIGEF.',
    result: 'Crédito de R$ 2,3 milhões liberado sem ressalvas.',
    timeline: '15 dias',
    author: 'Cliente J.P. — Goiás',
    area: 'Crédito Rural',
    areaColor: 'yellow',
  },
  {
    id: 'case-5',
    problem:
      'Fazenda de 350 hectares ia a leilão em 20 dias. Dívida rural com R$ 380 mil em juros abusivos embutidos no contrato. Produtor não sabia como se defender.',
    solution:
      'Medida judicial de urgência para suspensão de leilão + perícia contábil identificando juros abusivos.',
    result:
      'Leilão suspenso. Contrato revisado com redução de R$ 380 mil. Renegociação com condições justas.',
    timeline: 'Suspensão em 72h. Revisão completa em 45 dias.',
    author: 'Cliente S.M. — Paraná',
    area: 'Dívidas Rurais',
    areaColor: 'red',
  },
];

const getAreaColorClass = (color: string): string => {
  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-100 text-emerald-800',
    orange: 'bg-orange-100 text-orange-800',
    blue: 'bg-blue-100 text-blue-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-800',
  };
  return colorMap[color] || 'bg-gray-100 text-gray-800';
};

export default function ResultadosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#050810' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold text-white border"
              style={{ borderColor: '#C5A059', color: '#C5A059' }}
            >
              Resultados Reais
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Cada caso tem uma história. Aqui estão algumas.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Resultados reais de proprietários rurais que recuperaram o controle do seu patrimônio.
            Sem promessas exageradas — só fatos.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#C5A059' }}
              >
                150+
              </div>
              <p className="text-gray-700 font-medium">Propriedades destravadas</p>
            </div>
            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#C5A059' }}
              >
                R$ 2,3 Mi+
              </div>
              <p className="text-gray-700 font-medium">Em crédito liberado</p>
            </div>
            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#C5A059' }}
              >
                8 estados
              </div>
              <p className="text-gray-700 font-medium">De atuação</p>
            </div>
            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#C5A059' }}
              >
                94%
              </div>
              <p className="text-gray-700 font-medium">Taxa de êxito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-14 text-center" style={{ color: '#050810' }}>
            Estudos de Caso
          </h2>

          <div className="space-y-8">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-8">
                  {/* Area Tag */}
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getAreaColorClass(caseStudy.areaColor)}`}>
                      {caseStudy.area}
                    </span>
                  </div>

                  {/* Situação */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Situação
                    </h3>
                    <p className="text-gray-800 leading-relaxed text-base">
                      {caseStudy.problem}
                    </p>
                  </div>

                  {/* Atuação */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Atuação
                    </h3>
                    <p className="text-gray-800 leading-relaxed text-base">
                      {caseStudy.solution}
                    </p>
                  </div>

                  {/* Resultado */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Resultado
                    </h3>
                    <p className="text-gray-800 leading-relaxed text-base font-medium">
                      {caseStudy.result}
                    </p>
                  </div>

                  {/* Prazo e Author */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-t pt-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Prazo</p>
                      <p className="text-gray-800 font-medium">{caseStudy.timeline}</p>
                    </div>
                    <div className="mt-4 sm:mt-0 text-right">
                      <p className="text-sm text-gray-500 mb-1">Cliente</p>
                      <p className="text-gray-800 font-medium">{caseStudy.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-8">
            <p className="text-gray-700 leading-relaxed text-base">
              <span className="font-semibold">Importante:</span> Os resultados apresentados são
              reais e refletem casos específicos. Cada situação possui complexidade própria e os
              resultados podem variar conforme a complexidade do caso. A análise inicial é gratuita
              e permite avaliar as possibilidades do seu caso.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#050810' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Quer saber o que é possível no seu caso?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Nossa análise inicial é gratuita. Avaliamos sua situação e mostramos as melhores
            estratégias para resolver seu caso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${company.whatsappLink}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os resultados de casos similares ao meu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white transition-all"
              style={{ backgroundColor: '#C5A059', color: '#050810' }}
            >
              Fale no WhatsApp
            </a>
            <Link
              href="/contato/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 text-white transition-all"
              style={{ borderColor: '#C5A059', color: '#C5A059' }}
            >
              Agende Consulta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
