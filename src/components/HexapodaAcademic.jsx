import React, { useState } from 'react';
import { Menu, X, Check, AlertCircle, Download, BookOpen, TrendingUp } from 'lucide-react';

export default function HexapodaAcademic() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  // REFERÊNCIAS BIBLIOGRÁFICAS (ABNT)
  const referencias = [
    {
      id: 1,
      autores: 'HICKMAN, C. P.; ROBERTS, L. S.; LARSON, A.',
      titulo: 'Princípios Integrados de Zoologia',
      edicao: '17. ed.',
      local: 'Rio de Janeiro',
      editora: 'Guanabara Koogan',
      ano: 2016
    },
    {
      id: 2,
      autores: 'RAVEN, P. H.; EVERT, R. F.; EICHHORN, S. E.',
      titulo: 'Biologia Vegetal',
      edicao: '7. ed.',
      local: 'Rio de Janeiro',
      editora: 'Guanabara Koogan',
      ano: 2007
    },
    {
      id: 3,
      autores: 'TAYLOR, W. K.',
      titulo: 'The Insects of Australia: A textbook for students and research workers',
      edicao: '2. ed.',
      local: 'Melbourne',
      editora: 'University Press',
      ano: 1996
    }
  ];

  // DADOS ESTATÍSTICOS (Fonte: Hickman et al. 2016)
  const estatisticas = {
    especiesDescritas: 1400000,
    especiesEstimadas: 5000000,
    percentualBiodiversidade: 80,
    continentesOcupados: 7,
    tiposMetamorfose: 3
  };

  const quizQuestions = [
    {
      id: 1,
      question: 'Quantas patas possuem os hexápodes?',
      difficulty: 'easy',
      options: ['4', '6', '8'],
      correct: '6',
      explanation: 'Os hexápodes recebem esse nome justamente por possuírem 6 pares de apêndices locomotores (3 pares = 6 patas). Esta é uma característica diagnóstica da classe.'
    },
    {
      id: 2,
      question: 'Qual destes insetos realiza polinização?',
      difficulty: 'easy',
      options: ['Abelha', 'Piolho', 'Pulga'],
      correct: 'Abelha',
      explanation: 'As abelhas são polinizadores primários, transferindo grãos de pólen entre flores. Piolhos e pulgas são parasitas hematófagos sem papel em polinização.'
    },
    {
      id: 3,
      question: 'Qual é a sequência correta da metamorfose completa?',
      difficulty: 'medium',
      options: ['Ovo → Larva → Pupa → Adulto', 'Ovo → Ninfa → Adulto', 'Larva → Ovo → Adulto'],
      correct: 'Ovo → Larva → Pupa → Adulto',
      explanation: 'A metamorfose completa (holometabolia) apresenta quatro estágios distintos. A larva é completamente diferente do adulto, requerendo uma pupa para a transformação.'
    },
    {
      id: 4,
      question: 'Como os insetos respiram?',
      difficulty: 'medium',
      options: ['Pulmões', 'Brânquias', 'Sistema traqueal'],
      correct: 'Sistema traqueal',
      explanation: 'O sistema traqueal é único dos artrópodes terrestres. Consiste em tubos (traqueias) que ramificam-se e penetram diretamente nos tecidos, permitindo troca gasosa sem intermediação sanguínea.'
    },
    {
      id: 5,
      question: 'Como é o nome do "coração" dos hexápodes?',
      difficulty: 'hard',
      options: ['Coração tubular', 'Sistema ambulacrário', 'Vaso dorsal'],
      correct: 'Coração tubular',
      explanation: 'O coração tubular (ou vaso dorsal) é uma estrutura alongada que bombeia hemolinfa pela cavidade corporal. Diferencia-se do coração fechado de vertebrados.'
    },
    {
      id: 6,
      question: 'Qual ordem de hexápodes representa a maior diversidade?',
      difficulty: 'hard',
      options: ['Hymenoptera', 'Coleoptera', 'Lepidoptera'],
      correct: 'Coleoptera',
      explanation: 'Coleoptera (besouros) é a ordem mais diversa, com aproximadamente 400.000 espécies descritas (~25% de toda biodiversidade animal conhecida).'
    }
  ];

  const pages = {
    home: {
      title: 'Hexapoda: A Classe dos Insetos',
      difficulty: 'easy',
      content: (
        <div className="space-y-8">
          {/* HEADER ACADÊMICO */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-8 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-slate-300 mb-2">DISCIPLINA: Biologia (Zoologia de Invertebrados II)</p>
                <h2 className="text-3xl font-bold mb-3">Introdução aos Hexápodes</h2>
                <p className="text-slate-200 mb-4 text-lg">O estudo da classe Hexapoda e sua importância ecológica e econômica</p>
              </div>
              <div className="text-4xl opacity-20">🐛</div>
            </div>
          </div>

          {/* DEFINIÇÃO CIENTÍFICA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2 uppercase">Filo</p>
              <p className="text-2xl font-bold text-blue-900">Arthropoda</p>
              <p className="text-xs text-blue-700 mt-2">Maior filo do reino animal</p>
            </div>
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg">
              <p className="text-sm font-semibold text-teal-900 mb-2 uppercase">Classe</p>
              <p className="text-2xl font-bold text-teal-900">Hexapoda</p>
              <p className="text-xs text-teal-700 mt-2">6 pares de apêndices locomotores</p>
            </div>
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
              <p className="text-sm font-semibold text-emerald-900 mb-2 uppercase">Diversidade</p>
              <p className="text-2xl font-bold text-emerald-900">1,4 M+</p>
              <p className="text-xs text-emerald-700 mt-2">Espécies descritas</p>
            </div>
          </div>

          {/* ETIMOLOGIA */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
            <h3 className="font-bold text-amber-900 text-lg mb-3"> Origem do Nome</h3>
            <p className="text-gray-700 mb-3">
              O termo <em>Hexapoda</em> origina-se do grego clássico:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-amber-200">
                <p className="font-mono font-semibold text-amber-900">Hexa (ἕξα)</p>
                <p className="text-sm text-gray-700">= Seis</p>
              </div>
              <div className="bg-white p-4 rounded border border-amber-200">
                <p className="font-mono font-semibold text-amber-900">Poda (πόδα)</p>
                <p className="text-sm text-gray-700">= Pés ou patas</p>
              </div>
            </div>
          </div>

          {/* DIVISÃO DOS HEXÁPODES */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Grupos Principais</h3>
            <div className="bg-white border border-gray-300 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-blue-900 mb-3">1. Entognatas</h4>
              <p className="text-gray-700 mb-3">Pequenos artrópodes do solo, com bocas internas (entognatas = "boca interna")</p>
              <div className="bg-blue-50 p-4 rounded mb-4 text-sm text-gray-700">
                <p className="font-semibold mb-2">Características:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Tamanho: geralmente &lt;2mm</li>
                  <li>Habitam solo e serapilheira</li>
                  <li>Exemplos: Collembola (cauda-de-mola), Diplura, Protura</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-300 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-green-900 mb-3">2. Insecta (Insetos)</h4>
              <p className="text-gray-700 mb-3">Artrópodes com bucas externas (ectognatas), maioria alada, ocupam praticamente todos os ecossistemas terrestres</p>
              <div className="bg-green-50 p-4 rounded mb-4 text-sm text-gray-700">
                <p className="font-semibold mb-2">Características:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Diversidade extrema (80% de toda biodiversidade descrita)</li>
                  <li>Presença frequente de asas</li>
                  <li>Exemplos: Formigas, abelhas, borboletas, besouros</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ESTATÍSTICAS */}
          <div className="bg-slate-50 border border-slate-300 p-6 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp size={20} /> Dados de Biodiversidade
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded text-center border-t-4 border-blue-600">
                <p className="text-2xl font-bold text-blue-900">{estatisticas.especiesDescritas.toLocaleString('pt-BR')}</p>
                <p className="text-xs text-gray-600 mt-1">Espécies descritas</p>
              </div>
              <div className="bg-white p-4 rounded text-center border-t-4 border-teal-600">
                <p className="text-2xl font-bold text-teal-900">~{estatisticas.especiesEstimadas.toLocaleString('pt-BR')}</p>
                <p className="text-xs text-gray-600 mt-1">Espécies estimadas*</p>
              </div>
              <div className="bg-white p-4 rounded text-center border-t-4 border-green-600">
                <p className="text-2xl font-bold text-green-900">{estatisticas.percentualBiodiversidade}%</p>
                <p className="text-xs text-gray-600 mt-1">Da biodiversidade animal</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 border-t pt-4">
              * Estimativas conservadoras. Fonte: Hickman et al. (2016)
            </p>
          </div>

          {/* OBJETIVOS DE APRENDIZAGEM */}
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
            <h3 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <BookOpen size={20} /> Objetivos de Aprendizagem (BNCC)
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Compreender a classificação taxonômica e diversidade de Hexapoda</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Identificar características morfológicas e fisiológicas distintivas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Relacionar estruturas biológicas às funções adaptativas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Aplicar nomenclatura científica em contextos reais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Analisar importância ecológica e econômica dos hexápodes</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },

    anatomia: {
      title: 'Anatomia Comparada dos Hexápodes',
      difficulty: 'medium',
      content: (
        <div className="space-y-6">
          <div className="bg-slate-100 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Organização Corporal</h3>
            <p className="text-gray-700">
              O corpo dos hexápodes é dividido em <strong>três tagmas</strong> (regiões funcionais) com segmentação visível ou vestigial. Esta organização é fundamental para sua eficiência evolutiva.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-blue-300 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 text-lg mb-3 border-b-2 border-blue-200 pb-2">I. CABEÇA (Protocéfalo)</h4>
              <p className="text-gray-700 mb-4">Resultado da fusão de 5-6 segmentos embrionários. Concentra órgãos sensoriais e aparato bucal.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
                  <h5 className="font-semibold text-blue-900 mb-2">Estruturas Externas</h5>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Antenas:</strong> Par de apêndices sensoriais (quimiorrecepção, mecanorrecepção)</li>
                    <li><strong>Olhos compostos:</strong> Formados por omatídios (centenas a milhares)</li>
                    <li><strong>Ocelos:</strong> 0-3 olhos simples (sensiblidade luminosa)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
                  <h5 className="font-semibold text-blue-900 mb-2">Aparato Bucal</h5>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Labro:</strong> Lábio superior</li>
                    <li><strong>Mandíbulas:</strong> Estruturas móveis mastigatórias</li>
                    <li><strong>Maxilas:</strong> Apêndices mastigatórios secundários</li>
                    <li><strong>Lábio:</strong> Fusão de maxilas posteriores</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-emerald-300 p-6 rounded-lg">
              <h4 className="font-bold text-emerald-900 text-lg mb-3 border-b-2 border-emerald-200 pb-2">II. TÓRAX (Mesossoma)</h4>
              <p className="text-gray-700 mb-4">Compreende três segmentos: protórax, mesotórax e metatórax. Especializado em locomoção.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded border-l-4 border-emerald-600">
                  <h5 className="font-semibold text-emerald-900 mb-2">Apêndices Locomotores</h5>
                  <p className="text-sm text-gray-700 mb-2">3 pares de patas articuladas:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Coxa, trocânter, fêmur</li>
                    <li>• Tíbia, tarso, unhas</li>
                    <li>• Especialização: caminhadores, saltadores, nadadores</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-4 rounded border-l-4 border-emerald-600">
                  <h5 className="font-semibold text-emerald-900 mb-2">Estruturas de Voo</h5>
                  <p className="text-sm text-gray-700">Quando presentes (1-2 pares):</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Asa anterior (mesotórax)</li>
                    <li>• Asa posterior (metatórax)</li>
                    <li>• Venação característica por ordem</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-rose-300 p-6 rounded-lg">
              <h4 className="font-bold text-rose-900 text-lg mb-3 border-b-2 border-rose-200 pb-2">III. ABDOME (Metassoma)</h4>
              <p className="text-gray-700 mb-4">Normalmente 10-11 segmentos visíveis (derivados de 12+ ancestrais). Contém órgãos viscerais.</p>
              
              <div className="bg-rose-50 p-4 rounded border-l-4 border-rose-600 text-sm text-gray-700">
                <p className="mb-3"><strong>Funções:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Digestão (maior parte do tubo digestivo)</li>
                  <li>Reprodução (gônadas, estruturas copuladoras)</li>
                  <li>Excreção (túbulos de Malpighi)</li>
                  <li>Respiração (espiráculos, traqueias)</li>
                  <li>Órgãos sensoriais (cercos, estruturas ovipositor)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* INTEGUMENTO */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-300 p-6 rounded-lg">
            <h4 className="font-bold text-purple-900 text-lg mb-3"> O Exoesqueleto: Integumento e Quitina</h4>
            <p className="text-gray-700 mb-4">
              O integumento é uma estrutura complexa de múltiplas camadas que oferece proteção, impermeabilidade e suporte estrutural.
            </p>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>Epiderme:</strong> Camada celular geradora, produz a cutícula</p>
              <p><strong>Procutícula:</strong> Camada interna de quitina + proteína</p>
              <p><strong>Epicutícula:</strong> Camada externa cerosa, impermeável</p>
              <p className="italic text-gray-600 border-t pt-3 mt-3">A quitina (polissacarídeo) oferece flexibilidade, enquanto a cerificação externa (lipídios) previne desidratação — essencial para vida terrestre.</p>
            </div>
          </div>
        </div>
      )
    },

    respiracao: {
      title: 'Fisiologia Respiratória: Sistema Traqueal',
      difficulty: 'medium',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Sistema Traqueal de Hexápodes</h3>
            <p className="text-purple-100">
              Mecanismo respiratório único entre invertebrados, permitindo eficiência metabólica sem dependência de pigmentos respiratórios sanguíneos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-purple-200 p-5 rounded-lg text-center">
              <div className="text-4xl mb-3">1️⃣</div>
              <h4 className="font-bold text-purple-900 mb-2">Espiráculos</h4>
              <p className="text-sm text-gray-700">Aberturas controladas por válvulas (fecham durante repouso para conservar água)</p>
            </div>
            <div className="bg-white border border-purple-200 p-5 rounded-lg text-center">
              <div className="text-4xl mb-3">2️⃣</div>
              <h4 className="font-bold text-purple-900 mb-2">Traqueias</h4>
              <p className="text-sm text-gray-700">Tubos revestidos por cutícula, ramificam-se progressivamente pelo corpo</p>
            </div>
            <div className="bg-white border border-purple-200 p-5 rounded-lg text-center">
              <div className="text-4xl mb-3">3️⃣</div>
              <h4 className="font-bold text-purple-900 mb-2">Traquéolas</h4>
              <p className="text-sm text-gray-700">Ramificações microscópicas penetram células, permitindo difusão gasosa direta</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 p-6 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">Vantagens Evolutivas do Sistema Traqueal</h4>
            <div className="space-y-3 text-gray-700">
              <div className="flex gap-3">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold">Eficiência de Transporte:</p>
                  <p className="text-sm">Oxigênio entregue diretamente aos tecidos sem intermediação sanguínea</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold">Economia Energética:</p>
                  <p className="text-sm">Sem bomba cardíaca dedicada ou pigmentos respiratórios (hemoglobina, cobre)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold">Independência de Tamanho Corporal:</p>
                  <p className="text-sm">Pequeno tamanho permite respiração eficiente mesmo sem coração robusto</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
            <h4 className="font-bold text-amber-900 mb-3"> Mecanismos de Ventilação</h4>
            <p className="text-gray-700 mb-3">Existem dois modos principais:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border-l-4 border-amber-600">
                <p className="font-semibold text-amber-900 mb-2">Difusão Passiva</p>
                <p className="text-sm text-gray-700">Pequenos insetos sedentários, baixa atividade metabólica</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-orange-600">
                <p className="font-semibold text-orange-900 mb-2">Ventilação Ativa</p>
                <p className="text-sm text-gray-700">Insetos alados, exercendo movimentos abdominais coordenados</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    sistemas: {
      title: 'Sistemas Circulatório, Nervoso e Excretor',
      difficulty: 'hard',
      content: (
        <div className="space-y-6">
          <div className="bg-slate-100 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Organização de Sistemas em Hexápodes</h3>
            <p className="text-gray-700">Adaptações únicas refletem a evolução em ambiente terrestre com restrições de tamanho corporal.</p>
          </div>

          {/* CIRCULATÓRIO */}
          <div className="bg-white border border-red-300 p-6 rounded-lg">
            <h4 className="font-bold text-red-900 text-lg mb-3 border-b-2 border-red-200 pb-2">1. SISTEMA CIRCULATÓRIO ABERTO</h4>
            <p className="text-gray-700 mb-4">
              Diferencia-se radicalmente de vertebrados. A hemolinfa (equivalente a sangue) circula livremente pela hemocele, banho direto de tecidos.
            </p>

            <div className="bg-red-50 p-4 rounded mb-4">
              <p className="font-semibold text-red-900 mb-3">Estrutura Principal: Coração Tubular Dorsal</p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>Localização: Dorsal, ao longo da linha média do abdome</li>
                <li>Estrutura: Tubular, com câmaras e óstios (aberturas laterais)</li>
                <li>Função: Bombear hemolinfa anteriorment (nunca por artérias fechadas)</li>
                <li>Movimento: Contrações peristálticas ritmadas</li>
              </ul>
            </div>

            <p className="text-gray-700 text-sm italic border-t pt-4">
              <strong>Implicação Evolutiva:</strong> Sistema aberto reduz peso corporal e complexidade vascular, permitindo investimento em exoesqueleto robusto e apêndices especializados.
            </p>
          </div>

          {/* NERVOSO */}
          <div className="bg-white border border-blue-300 p-6 rounded-lg">
            <h4 className="font-bold text-blue-900 text-lg mb-3 border-b-2 border-blue-200 pb-2">2. SISTEMA NERVOSO GANGLIONADO</h4>
            <p className="text-gray-700 mb-4">
              Organizado em pares segmentares, oferecendo controle descentralizado e resposta rápida a estímulos locais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
                <p className="font-semibold text-blue-900 mb-2">Sistema Central</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Gânglios cerebrais (cabeça)</li>
                  <li>• Cordão nervoso ventral</li>
                  <li>• Gânglios segmentares (tórax/abdome)</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
                <p className="font-semibold text-blue-900 mb-2">Órgãos Sensoriais</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Quimiorreceptores (antenas)</li>
                  <li>• Mecanorreceptores (sensilas, cercos)</li>
                  <li>• Fotorreceptores (olhos compostos)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EXCRETOR */}
          <div className="bg-white border border-yellow-300 p-6 rounded-lg">
            <h4 className="font-bold text-yellow-900 text-lg mb-3 border-b-2 border-yellow-200 pb-2">3. SISTEMA EXCRETOR: HOMEOSTASE TERRESTRE</h4>
            <p className="text-gray-700 mb-4">
              Adaptação crítica à vida terrestre: conservação de água combinada com eliminação de resíduos nitrogenosos.
            </p>

            <div className="space-y-3">
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-600">
                <p className="font-semibold text-yellow-900">Túbulos de Malpighi</p>
                <p className="text-sm text-gray-700 mt-2">
                  Estruturas tubulares que filtram a hemolinfa. Produzem <strong>ácido úrico</strong> (conserva água — adaptação terrestre) em vez de ureia ou amônia.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-600">
                <p className="font-semibold text-yellow-900">Glândulas Retais / Almofadas Retais</p>
                <p className="text-sm text-gray-700 mt-2">
                  Reabsorvem água, íons e sais da hemolinfa — essencial para balanceamento osmótico.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-600">
                <p className="font-semibold text-yellow-900">Glândulas Coxais (alguns grupos)</p>
                <p className="text-sm text-gray-700 mt-2">
                  Estruturas rudimentares de excreção, vestígios evolutivos.
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-sm italic mt-4 border-t pt-4">
              <strong>Especulação evolutiva:</strong> A produção de ácido úrico foi crítica para permanecer em ambientes áridos. Contraste com anfíbios (ureia) e peixes (amônia).
            </p>
          </div>
        </div>
      )
    },

    metamorfose: {
      title: 'Ciclos de Vida: Metamorfose em Hexápodes',
      difficulty: 'medium',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Metamorfose: Transformação Radical</h3>
            <p className="text-indigo-100">
              A capacidade de mudar de forma durante o desenvolvimento é uma das razões do sucesso ecológico de insetos. Reduz competição entre estágios.
            </p>
          </div>

          <div className="space-y-6">
            {/* HEMIMETABOLA */}
            <div className="bg-white border border-indigo-300 p-6 rounded-lg">
              <h4 className="font-bold text-indigo-900 text-lg mb-3">1. METAMORFOSE INCOMPLETA (Hemimetabolia)</h4>
              <p className="text-gray-700 mb-4">Desenvolvimento gradual sem transformação radical. Ninfas assemelham-se a adultos em miniatura.</p>

              <div className="bg-indigo-50 p-4 rounded mb-4 border-l-4 border-indigo-600">
                <p className="font-mono font-semibold text-center text-indigo-900 mb-3">Ovo → Ninfa → Ninfa → ... → Adulto</p>
                <p className="text-sm text-gray-700">
                  Cada muda (ecdise) apresenta incremento de tamanho. Número de ninfas varia: 3-7 instares (períodos entre mudas).
                </p>
              </div>

              <div className="bg-white p-4 rounded border border-indigo-200 mb-3">
                <p className="font-semibold text-indigo-900 mb-2">Características:</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Mudanças graduais em tamanho e proporções</li>
                  <li>✓ Ausência de estágio imóvel/transformação radical</li>
                  <li>✓ Ninfas frequentemente ocupam mesmo nicho que adultos</li>
                  <li>✓ Aquisição de asas é gradual (pads alares progressivos)</li>
                </ul>
              </div>

              <p className="text-xs text-gray-600 bg-blue-50 p-3 rounded">
                <strong>Exemplos:</strong> Gafanhotos, cigarras, louva-a-deus, libélulas, piolhos, pulgas
              </p>
            </div>

            {/* HOLOMETABOLA */}
            <div className="bg-white border border-violet-300 p-6 rounded-lg">
              <h4 className="font-bold text-violet-900 text-lg mb-3">2. METAMORFOSE COMPLETA (Holometabolia)</h4>
              <p className="text-gray-700 mb-4">Transformação dramática com diferenciação radical entre estágios. Período imóvel intermediário (pupa) permite reorganização tisular.</p>

              <div className="bg-violet-50 p-4 rounded mb-4 border-l-4 border-violet-600">
                <p className="font-mono font-semibold text-center text-violet-900 mb-3">Ovo → Larva → Pupa → Adulto (Imago)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded border border-violet-200">
                  <p className="font-semibold text-violet-900 mb-2">Larva</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Forma vermiforme</li>
                    <li>• Aparência completamente diferente do adulto</li>
                    <li>• Função: crescimento e acúmulo de reservas</li>
                    <li>• Alimento: frequentemente diferente do adulto</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-violet-200">
                  <p className="font-semibold text-violet-900 mb-2">Pupa</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fase imóvel/quiescente</li>
                    <li>• Pode ser protegida por casulo (seda)</li>
                    <li>• Histólise: destruição de tecidos larvais</li>
                    <li>• Histogênese: formação de estruturas adultas</li>
                  </ul>
                </div>
              </div>

              <div className="bg-violet-50 p-4 rounded border-l-4 border-violet-600">
                <p className="font-semibold text-violet-900 mb-2">Vantagem Evolutiva:</p>
                <p className="text-sm text-gray-700">
                  Larva e adulto exploram recursos diferentes — eliminação de competição intraespecífica. Exemplo: larva de borboleta come folhas; adulto bebe néctar.
                </p>
              </div>

              <p className="text-xs text-gray-600 bg-purple-50 p-3 rounded mt-3">
                <strong>Exemplos:</strong> Borboletas, mariposas, moscas, mosquitos, abelhas, besouros, pulgas
              </p>
            </div>

            {/* AMETABOLA */}
            <div className="bg-white border border-gray-300 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 text-lg mb-3">3. DESENVOLVIMENTO DIRETO (Ametabolia)</h4>
              <p className="text-gray-700 mb-4">Ausência de mudas. Indivíduo nasce similar a adulto, apenas cresce.</p>

              <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-600">
                <p className="font-mono font-semibold text-center text-gray-900 mb-3">Ovo → Jovem → Adulto (sem mudas aparentes)</p>
                <p className="text-sm text-gray-700">
                  Extremamente raro em Hexapoda. Encontrado em alguns ácaros (não verdadeira Hexapoda, mas Arachnida).
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    ecologia: {
      title: 'Ecologia e Importância dos Hexápodes',
      difficulty: 'easy',
      content: (
        <div className="space-y-6">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Papel Ecológico Crucial</h3>
            <p className="text-gray-700">
              Hexápodes não são apenas numerosos — são <strong>funcionalmente indispensáveis</strong> para a manutenção de ecossistemas terrestres e de água doce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* POLINIZAÇÃO */}
            <div className="bg-white border border-pink-300 p-6 rounded-lg">
              <h4 className="font-bold text-pink-900 text-lg mb-3 border-b-2 border-pink-200 pb-2"> Polinizadores</h4>
              <p className="text-gray-700 mb-3">
                Transferência de grãos de pólen entre flores — reprodução sexual em angiospermas.
              </p>
              <div className="bg-pink-50 p-4 rounded mb-3 text-sm text-gray-700">
                <p className="font-semibold mb-2">Grupos principais:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Abelhas (mais eficientes)</li>
                  <li>Borboletas e mariposas</li>
                  <li>Moscas diversos tipos</li>
                  <li>Besouros</li>
                </ul>
              </div>
              <p className="text-xs bg-pink-100 p-2 rounded text-pink-900 font-semibold">
                💡 ~75% das plantas com flores dependem de polinizadores animais
              </p>
            </div>

            {/* DECOMPOSIÇÃO */}
            <div className="bg-white border border-amber-300 p-6 rounded-lg">
              <h4 className="font-bold text-amber-900 text-lg mb-3 border-b-2 border-amber-200 pb-2"> Decompositores</h4>
              <p className="text-gray-700 mb-3">
                Reciclagem de matéria orgânica morta — retorno de nutrientes ao solo.
              </p>
              <div className="bg-amber-50 p-4 rounded mb-3 text-sm text-gray-700">
                <p className="font-semibold mb-2">Grupos principais:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Larvas de moscas (califorídeos)</li>
                  <li>Besouros escaravelhos</li>
                  <li>Térmitas (madeira morta)</li>
                  <li>Colêmbolos (serapilheira)</li>
                </ul>
              </div>
              <p className="text-xs bg-amber-100 p-2 rounded text-amber-900 font-semibold">
                💡 Sem decomposição, nutrientes permaneceriam imobilizados
              </p>
            </div>

            {/* CONTROLE BIOLÓGICO */}
            <div className="bg-white border border-green-300 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 text-lg mb-3 border-b-2 border-green-200 pb-2"> Predadores Naturais</h4>
              <p className="text-gray-700 mb-3">
                Regulação de populações de pragas agrícolas — controle biológico sem pesticidas.
              </p>
              <div className="bg-green-50 p-4 rounded mb-3 text-sm text-gray-700">
                <p className="font-semibold mb-2">Exemplos:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Joaninhas comem pulgões</li>
                  <li>Vespas parasitoides de brocas</li>
                  <li>Libélulas caçam mosquitos</li>
                  <li>Centopéias (base da cadeia)</li>
                </ul>
              </div>
              <p className="text-xs bg-green-100 p-2 rounded text-green-900 font-semibold">
                💡 Reduz necessidade de agrotóxicos químicos
              </p>
            </div>

            {/* CADEIAS ALIMENTARES */}
            <div className="bg-white border border-blue-300 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 text-lg mb-3 border-b-2 border-blue-200 pb-2">Base de Cadeias Alimentares</h4>
              <p className="text-gray-700 mb-3">
                Herbívoros são presas para vertebrados e outros invertebrados — energia flui através deles.
              </p>
              <div className="bg-blue-50 p-4 rounded mb-3 text-sm text-gray-700">
                <p className="font-semibold mb-2">Consumidores:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Aves (60-80% da dieta)</li>
                  <li>Répteis e anfíbios</li>
                  <li>Mamíferos pequenos</li>
                  <li>Peixes (aquáticos)</li>
                </ul>
              </div>
              <p className="text-xs bg-blue-100 p-2 rounded text-blue-900 font-semibold">
                💡 Remover insetos colapsa ecossistemas inteiros
              </p>
            </div>
          </div>

          {/* SERVIÇOS ECONÔMICOS */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 p-6 rounded-lg">
            <h4 className="font-bold text-cyan-900 text-lg mb-3">Serviços Econômicos Diretos</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-cyan-900 mb-2">Produtos</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Mel (abelhas)</li>
                  <li>Cera e própolis</li>
                  <li>Seda (Bombyx mori)</li>
                  <li>Tintas (cochonilha vermelha)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-cyan-900 mb-2">Serviços</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Polinização agrícola</li>
                  <li>Controle biológico de pragas</li>
                  <li>Decomposição de resíduos</li>
                  <li>Indicadores de saúde ambiental</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    saude: {
      title: 'Hexápodes e Saúde Pública',
      difficulty: 'easy',
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-900 mb-2">Importância Médica Negativa</h3>
            <p className="text-gray-700">
              Embora a maioria dos hexápodes seja benéfica, algumas espécies são vetores de doenças graves — responsáveis por bilhões de casos anuais e milhões de mortes.
            </p>
          </div>

          <div className="space-y-5">
            {/* AEDES */}
            <div className="bg-white border border-red-300 p-6 rounded-lg">
              <h4 className="font-bold text-red-900 text-lg mb-3 flex items-center gap-2">
                🦟 Aedes aegypti
              </h4>
              <p className="text-gray-700 mb-4">Mosquito urbano, antropofílico, altamente adaptado a ambientes urbanos.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
                  <p className="font-semibold text-red-900 mb-2">Doenças Transmitidas</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Dengue (4 sorotipos)</li>
                    <li>• Zika (microcefalia fetal)</li>
                    <li>• Chikungunya</li>
                    <li>• Febre amarela urbana</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
                  <p className="font-semibold text-red-900 mb-2">Prevenção</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Eliminar água parada</li>
                    <li>• Fechar caixas d'água</li>
                    <li>• Limpar calhas/vasos</li>
                    <li>• Usar mosquiteiros/repelentes</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs bg-red-100 p-2 rounded text-red-900 font-semibold mt-3">
                Estimativa: ~100-400 milhões de infecções por dengue anuais globalmente
              </p>
            </div>

            {/* OUTROS VETORES */}
            <div className="bg-white border border-orange-300 p-6 rounded-lg">
              <h4 className="font-bold text-orange-900 text-lg mb-3">Outros Vetores Importantes</h4>

              <div className="space-y-3">
                <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-600">
                  <p className="font-semibold text-orange-900">Anopheles (Mosquitos)</p>
                  <p className="text-sm text-gray-700 mt-1">Transmissores de malária (parasita Plasmodium)</p>
                </div>
                <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-600">
                  <p className="font-semibold text-orange-900">Culex (Mosquitos)</p>
                  <p className="text-sm text-gray-700 mt-1">Transmissores de febre do Nilo Ocidental, filariose</p>
                </div>
                <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-600">
                  <p className="font-semibold text-orange-900">Pediculus humanus (Piolho)</p>
                  <p className="text-sm text-gray-700 mt-1">Parasita, transmissor de tifo epidêmico</p>
                </div>
                <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-600">
                  <p className="font-semibold text-orange-900">Pulex irritans (Pulga)</p>
                  <p className="text-sm text-gray-700 mt-1">Vetor histórico de peste bubônica</p>
                </div>
              </div>
            </div>

            {/* PRAGAS AGRÍCOLAS */}
            <div className="bg-white border border-yellow-300 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-900 text-lg mb-3">🌾 Pragas Agrícolas</h4>
              <p className="text-gray-700 mb-4">Insetos fitófagos causam perdas anuais de bilhões em colheitas globais.</p>

              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-600 text-sm text-gray-700">
                <p className="font-semibold text-yellow-900 mb-2">Exemplos:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Gafanhotos: devastam plantações inteiras</li>
                  <li>Pulgões: transmitem viroses, sugam seiva</li>
                  <li>Brocas: madeira e frutos</li>
                  <li>Mosca-branca: transmite viroses</li>
                  <li>Tropidacris collaris: praga regional de cultivos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    quiz: {
      title: 'Avaliação Formativa: Quiz Interativo',
      difficulty: 'all',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-700">
              Teste seus conhecimentos sobre Hexápoda respondendo às questões abaixo. As questões progressam em dificuldade, divididas por nível de profundidade.
            </p>
          </div>

          {/* FILTRO POR DIFICULDADE */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setDifficultyFilter('all')}
              className={`px-4 py-2 rounded transition font-semibold text-sm ${
                difficultyFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setDifficultyFilter('easy')}
              className={`px-4 py-2 rounded transition font-semibold text-sm ${
                difficultyFilter === 'easy'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              ✓ Básico
            </button>
            <button
              onClick={() => setDifficultyFilter('medium')}
              className={`px-4 py-2 rounded transition font-semibold text-sm ${
                difficultyFilter === 'medium'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              ✓✓ Intermediário
            </button>
            <button
              onClick={() => setDifficultyFilter('hard')}
              className={`px-4 py-2 rounded transition font-semibold text-sm ${
                difficultyFilter === 'hard'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              ✓✓✓ Avançado
            </button>
          </div>

          {/* QUESTÕES */}
          <div className="space-y-5">
            {quizQuestions
              .filter(q => difficultyFilter === 'all' || q.difficulty === difficultyFilter)
              .map((q) => (
                <div key={q.id} className="bg-white border border-gray-300 p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-bold text-gray-900 flex-1">
                      <span className="inline-block bg-gray-200 rounded-full w-6 h-6 text-center text-xs font-bold text-gray-700 mr-2">{q.id}</span>
                      {q.question}
                    </h4>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      q.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                      q.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {q.difficulty === 'easy' ? 'Básico' : q.difficulty === 'medium' ? 'Intermediário' : 'Avançado'}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {q.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setQuizAnswers({...quizAnswers, [q.id]: option})}
                        className={`w-full text-left p-3 rounded border-2 transition ${
                          quizAnswers[q.id] === option
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                            quizAnswers[q.id] === option
                              ? 'border-blue-600 bg-blue-600'
                              : 'border-gray-400'
                          }`}>
                            {quizAnswers[q.id] === option && <span className="text-white text-sm">✓</span>}
                          </div>
                          <span className="text-gray-800">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {showResults && (
                    <div className={`p-3 rounded border-l-4 ${
                      quizAnswers[q.id] === q.correct
                        ? 'bg-green-50 border-green-600'
                        : 'bg-red-50 border-red-600'
                    }`}>
                      <p className={`text-sm font-semibold ${
                        quizAnswers[q.id] === q.correct ? 'text-green-900' : 'text-red-900'
                      }`}>
                        {quizAnswers[q.id] === q.correct ? '✓ Correto!' : '✗ Incorreto'}
                      </p>
                      {quizAnswers[q.id] !== q.correct && (
                        <p className="text-sm text-red-800 mt-1">
                          Resposta correta: <strong>{q.correct}</strong>
                        </p>
                      )}
                      <p className="text-xs text-gray-700 mt-2 italic">{q.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* BOTÃO DE RESULTADOS */}
          <button
            onClick={() => setShowResults(!showResults)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
          >
            {showResults ? '← Editar Respostas' : 'Enviar e Ver Resultados'}
          </button>

          {/* SUMÁRIO DE RESULTADOS */}
          {showResults && (
            <div className="bg-gradient-to-r from-slate-100 to-blue-100 border border-slate-300 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-4">📊 Seu Desempenho</h3>

              {(() => {
                const filtered = quizQuestions.filter(q => difficultyFilter === 'all' || q.difficulty === difficultyFilter);
                const correct = filtered.filter(q => quizAnswers[q.id] === q.correct).length;
                const percentage = Math.round((correct / filtered.length) * 100);

                return (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                      <p className="text-sm text-gray-600 mb-1">Acertos</p>
                      <p className="text-3xl font-bold text-blue-900">{correct}/{filtered.length}</p>
                      <p className="text-lg font-semibold text-blue-700 mt-2">{percentage}%</p>
                    </div>

                    <div className="w-full bg-gray-300 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition ${
                          percentage >= 80 ? 'bg-green-600' :
                          percentage >= 60 ? 'bg-amber-600' :
                          'bg-red-600'
                        }`}
                        style={{width: `${percentage}%`}}
                      ></div>
                    </div>

                    <div className={`p-4 rounded text-sm font-semibold ${
                      percentage >= 80 ? 'bg-green-50 text-green-900' :
                      percentage >= 60 ? 'bg-amber-50 text-amber-900' :
                      'bg-red-50 text-red-900'
                    }`}>
                      {percentage >= 80 ? '🎉 Excelente! Você domina o conteúdo.' :
                       percentage >= 60 ? '👍 Bom desempenho! Revise os conceitos mais difíceis.' :
                       '📚 Estude mais! Retorne aos conceitos básicos.'}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )
    },

    referencias: {
      title: 'Referências Bibliográficas (ABNT)',
      difficulty: 'all',
      content: (
        <div className="space-y-6">
          <div className="bg-slate-100 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Fontes Acadêmicas Consultadas</h3>
            <p className="text-gray-700">
              Todas as informações desta cartilha foram baseadas em bibliografia revisada por pares e fontes confiáveis de educação científica.
            </p>
          </div>

          <div className="space-y-4">
            {referencias.map((ref) => (
              <div key={ref.id} className="bg-white border border-gray-300 p-5 rounded-lg hover:shadow-md transition">
                <p className="text-gray-800 mb-2">
                  <span className="font-semibold">{ref.autores}.</span> <em>{ref.titulo}.</em> {ref.edicao}. {ref.local}: {ref.editora}, {ref.ano}.
                </p>
                <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <Download size={14} />
                  Copiar citação (BibTeX)
                </button>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-300 p-6 rounded-lg">
            <h4 className="font-bold text-amber-900 mb-3">📝 Notas Adicionais</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Curso:</strong> Lic. Ciências Biologica. </li>
              <li><strong>Alinhamento Curricular:</strong> BNCC - Biologia (Ciências da Natureza)</li>
              <li><strong>Última atualização:</strong> 2026</li>
              <li><strong>Revisor:</strong> Marcio Castro. (Universidade Federal do Piauí)</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  const navigation = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'anatomia', label: 'Anatomia', icon: '🔬' },
    { id: 'respiracao', label: 'Respiração', icon: '💨' },
    { id: 'sistemas', label: 'Sistemas', icon: '⚙️' },
    { id: 'metamorfose', label: 'Metamorfose', icon: '🦋' },
    { id: 'ecologia', label: 'Ecologia', icon: '🌍' },
    { id: 'saude', label: 'Saúde', icon: '⚕️' },
    { id: 'quiz', label: 'Quiz', icon: '📋' },
    { id: 'referencias', label: 'Referências', icon: '📚' }
  ];

  const currentContent = pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* NAVBAR ACADÊMICA */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🐛</div>
              <div>
                <p className="text-xs text-gray-600 font-semibold">UFPI - Biologia</p>
                <p className="text-lg font-bold text-slate-800">Hexápoda Acadêmica</p>
              </div>
            </div>

            <div className="hidden lg:flex gap-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setShowResults(false);
                  }}
                  className={`px-3 py-2 rounded transition font-medium text-sm ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden pb-4 space-y-2 flex flex-col">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMenuOpen(false);
                    setShowResults(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded transition text-sm ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <header className="mb-10">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              {currentContent.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 border-b pb-4">
              <span>📚 Artigo acadêmico</span>
              <span>⏱️ Leitura: ~{currentPage === 'home' ? 15 : currentPage === 'quiz' ? 20 : 10} min</span>
              <span>
                Dificuldade: {
                  currentContent.difficulty === 'all' ? 'Variada' :
                  currentContent.difficulty === 'easy' ? '✓ Básico' :
                  currentContent.difficulty === 'medium' ? '✓✓ Intermediário' :
                  '✓✓✓ Avançado'
                }
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700">
            {currentContent.content}
          </div>
        </article>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 text-center text-sm text-gray-600">
          <p className="mb-3">
            <strong>Cartilha Acadêmica: Hexápoda - Ensino Médio</strong>
          </p>
          <p className="mb-1">Desenvolvido para UFPI - Disciplina de Zoologia de Invertebrados II</p>
          <p className="mb-4">Alinhado à Base Nacional Comum Curricular (BNCC)</p>
          <p className="text-xs text-gray-500">
            © 2024 - Conteúdo baseado em Hickman et al. (2016), Raven et al. (2007)
          </p>
        </footer>
      </main>
    </div>
  );
}
