import React, { useState } from 'react';
import { Menu, X, Check, AlertCircle } from 'lucide-react';

export default function HexapodaSite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: 'Quantas patas possuem os hexápodes?',
      options: ['4', '6', '8'],
      correct: '6'
    },
    {
      id: 2,
      question: 'Qual destes insetos realiza polinização?',
      options: ['Abelha', 'Piolho', 'Pulga'],
      correct: 'Abelha'
    },
    {
      id: 3,
      question: 'Qual é a sequência correta da metamorfose completa?',
      options: ['Ovo → Larva → Pupa → Adulto', 'Ovo → Ninfa → Adulto', 'Larva → Ovo → Adulto'],
      correct: 'Ovo → Larva → Pupa → Adulto'
    },
    {
      id: 4,
      question: 'Como os insetos respiram?',
      options: ['Pulmões', 'Brânquias', 'Sistema traqueal'],
      correct: 'Sistema traqueal'
    }
  ];

  const pages = {
    home: {
      title: 'Bem-vindos ao mundo dos Hexápodes',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-3">O que são Hexápodes?</h2>
            <p className="text-green-800 mb-3">
              Os Hexápodes pertencem ao filo <strong>Arthropoda</strong> e representam o grupo animal com maior número de espécies conhecidas.
            </p>
            <p className="text-green-800 mb-3">
              Seu nome deriva do grego: <strong>Hexa</strong> (seis) + <strong>Poda</strong> (pés ou patas)
            </p>
            <p className="text-green-800">
              Os insetos representam o grupo de animais mais diversos do planeta, presentes em praticamente todos os ambientes terrestres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-green-200 p-5 rounded-lg hover:shadow-lg transition">
              <h3 className="font-bold text-green-900 mb-2">🔬 Características Principais</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Corpo em cabeça, tórax e abdome</li>
                <li>✓ Três pares de patas</li>
                <li>✓ Um par de antenas</li>
                <li>✓ Exoesqueleto de quitina</li>
              </ul>
            </div>
            <div className="bg-white border border-emerald-200 p-5 rounded-lg hover:shadow-lg transition">
              <h3 className="font-bold text-emerald-900 mb-2">🌍 Distribuição Global</h3>
              <p className="text-sm text-gray-700">
                Graças às suas características especializadas, os hexápodes conseguiram ocupar praticamente todos os ambientes terrestres do planeta, sendo fundamentais para a manutenção dos ecossistemas.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <p className="text-amber-900">
              <strong>📊 Curiosidade:</strong> Os insetos representam mais da metade de todas as espécies animais conhecidas no planeta. Mais de um milhão de espécies já foram descritas pela ciência!
            </p>
          </div>
        </div>
      )
    },

    anatomia: {
      title: 'Anatomia Básica dos Insetos',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Estrutura do Corpo</h3>
            <p className="text-blue-800">
              O corpo dos insetos é dividido em três regiões principais, cada uma com funções específicas para a sobrevivência e movimentação do animal.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-blue-200 p-5 rounded-lg">
              <h4 className="font-bold text-blue-900 text-lg mb-3">Cabeça</h4>
              <p className="text-gray-700 mb-3">Abriga estruturas importantes para a sobrevivência do animal:</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>🎯 Antenas:</strong> Desempenham funções de tato, olfato e percepção do ambiente</li>
                <li><strong>👁️ Olhos Compostos:</strong> Formados por milhares de unidades chamadas omatídios, permitindo ampla percepção visual</li>
                <li><strong>👄 Peças Bucais:</strong> Estruturas especializadas para alimentação</li>
              </ul>
            </div>

            <div className="bg-white border border-emerald-200 p-5 rounded-lg">
              <h4 className="font-bold text-emerald-900 text-lg mb-3">Tórax</h4>
              <p className="text-gray-700 mb-3">Responsável pela locomoção do animal:</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>🦵 Três pares de patas:</strong> Estruturas locomotoras</li>
                <li><strong>🪶 Um ou dois pares de asas:</strong> Quando presentes, estruturas de voo</li>
                <li><strong>💪 Musculatura:</strong> Concentra a musculatura responsável pelos movimentos</li>
              </ul>
            </div>

            <div className="bg-white border border-rose-200 p-5 rounded-lg">
              <h4 className="font-bold text-rose-900 text-lg mb-3">Abdome</h4>
              <p className="text-gray-700 mb-3">Contém a maior parte dos órgãos internos:</p>
              <ul className="space-y-2 text-gray-700">
                <li>🔄 Sistema digestório</li>
                <li>🧬 Sistema reprodutor</li>
                <li>♻️ Sistema excretor</li>
                <li>💨 Parte do sistema respiratório</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    respiracao: {
      title: 'Como os Insetos Respiram?',
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-900 mb-3">Sistema Traqueal</h3>
            <p className="text-purple-800 mb-3">
              Diferentemente dos seres humanos, os insetos <strong>não possuem pulmões</strong>. A respiração ocorre através de um sistema de tubos denominado <strong>sistema traqueal</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-purple-200 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">💨</div>
              <h4 className="font-bold text-purple-900 mb-2">Espiráculos</h4>
              <p className="text-sm text-gray-700">Pequenas aberturas por onde o ar entra</p>
            </div>
            <div className="bg-white border border-purple-200 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🔀</div>
              <h4 className="font-bold text-purple-900 mb-2">Traqueias</h4>
              <p className="text-sm text-gray-700">Tubos que conduzem o ar pelo corpo</p>
            </div>
            <div className="bg-white border border-purple-200 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-purple-900 mb-2">Traquéolas</h4>
              <p className="text-sm text-gray-700">Tubos microscópicos nos tecidos</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
            <p className="text-blue-900">
              <strong>💡 Vantagem:</strong> Este sistema permite uma distribuição eficiente do oxigênio sem a necessidade de transporte pelo sangue, o que é muito mais eficiente que o sistema respiratório de vertebrados.
            </p>
          </div>
        </div>
      )
    },

    alimentacao: {
      title: 'Alimentação dos Hexápodes',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            Os insetos apresentam uma enorme diversidade alimentar, adaptando-se aos mais variados ambientes e recursos disponíveis.
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">
              <h4 className="font-bold text-green-900 text-lg mb-2">🌿 Herbívoros</h4>
              <p className="text-gray-700 mb-3">Alimentam-se de folhas, flores, frutos ou seiva.</p>
              <p className="text-sm text-green-800"><strong>Exemplos:</strong> Gafanhotos, Lagartas, Pulgões</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <h4 className="font-bold text-red-900 text-lg mb-2">🦁 Predadores</h4>
              <p className="text-gray-700 mb-3">Capturam e consomem outros animais.</p>
              <p className="text-sm text-red-800"><strong>Exemplos:</strong> Libélulas, Louva-a-deus, Joaninhas</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-lg">
              <h4 className="font-bold text-amber-900 text-lg mb-2">♻️ Decompositores</h4>
              <p className="text-gray-700 mb-3">Participam da reciclagem da matéria orgânica.</p>
              <p className="text-sm text-amber-800"><strong>Exemplos:</strong> Alguns besouros, Larvas de moscas</p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-5 rounded-lg">
              <h4 className="font-bold text-orange-900 text-lg mb-2">⚠️ Parasitos e Vetores</h4>
              <p className="text-gray-700 mb-3">Vivem associados a outros organismos.</p>
              <p className="text-sm text-orange-800"><strong>Exemplos:</strong> Piolhos, Pulgas, Mosquitos hematófagos</p>
            </div>
          </div>
        </div>
      )
    },

    metamorfose: {
      title: 'A Metamorfose',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Uma das características mais fascinantes dos insetos é a <strong>metamorfose</strong>, o processo de transformação que ocorre durante o desenvolvimento.
          </p>

          <div className="space-y-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
              <h4 className="font-bold text-indigo-900 text-xl mb-4">🔄 Metamorfose Incompleta</h4>
              <p className="text-gray-700 mb-4">
                Nesse tipo de desenvolvimento, o jovem se parece com o adulto, mas em tamanho menor.
              </p>
              <div className="bg-white p-4 rounded border border-indigo-200 mb-4">
                <p className="font-bold text-center text-indigo-900">Ovo → Ninfa → Adulto</p>
              </div>
              <p className="text-sm text-indigo-800 font-semibold mb-2">Exemplos:</p>
              <p className="text-gray-700">Gafanhotos, Cigarras, Louva-a-deus, Libélulas</p>
            </div>

            <div className="bg-violet-50 border-l-4 border-violet-600 p-6 rounded-lg">
              <h4 className="font-bold text-violet-900 text-xl mb-4">🦋 Metamorfose Completa</h4>
              <p className="text-gray-700 mb-4">
                Nesse processo ocorre uma transformação profunda do organismo. É observado na maioria das espécies de insetos.
              </p>
              <div className="bg-white p-4 rounded border border-violet-200 mb-4">
                <p className="font-bold text-center text-violet-900">Ovo → Larva → Pupa → Adulto</p>
              </div>
              <p className="text-sm text-violet-800 font-semibold mb-2">Exemplos:</p>
              <p className="text-gray-700">Borboletas, Abelhas, Moscas, Besouros</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="text-blue-900">
              <strong>🌟 Curiosidade:</strong> Na metamorfose completa, a pupa é uma estrutura protetora dentro da qual ocorrem mudanças radicais. É como um "casulo" onde a larva se transforma completamente em um adulto.
            </p>
          </div>
        </div>
      )
    },

    ecologia: {
      title: 'Importância Ecológica dos Insetos',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Os hexápodes exercem funções <strong>essenciais</strong> para a manutenção dos ecossistemas terrestres.
          </p>

          <div className="space-y-4">
            <div className="bg-pink-50 border-l-4 border-pink-600 p-5 rounded-lg">
              <h4 className="font-bold text-pink-900 text-lg mb-2">🌸 Polinização</h4>
              <p className="text-gray-700">
                Abelhas, borboletas e outros insetos transportam grãos de pólen entre flores, permitindo a reprodução de inúmeras plantas. <strong>Grande parte dos alimentos que consumimos depende da ação desses polinizadores!</strong>
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 rounded-lg">
              <h4 className="font-bold text-yellow-900 text-lg mb-2">♻️ Decomposição</h4>
              <p className="text-gray-700">
                Muitos insetos participam da decomposição de matéria orgânica, contribuindo para a reciclagem de nutrientes nos solos e ecossistemas.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg">
              <h4 className="font-bold text-green-900 text-lg mb-2">🛡️ Controle Biológico</h4>
              <p className="text-gray-700 mb-2">
                Diversos insetos atuam como predadores naturais de organismos considerados pragas agrícolas.
              </p>
              <p className="text-sm text-green-800"><strong>Exemplo:</strong> Joaninhas alimentam-se de pulgões</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg">
              <h4 className="font-bold text-blue-900 text-lg mb-2">🔗 Cadeias Alimentares</h4>
              <p className="text-gray-700">
                Os insetos servem de alimento para aves, répteis, anfíbios, mamíferos e outros invertebrados, sendo <strong>fundamentais para o equilíbrio ecológico</strong>.
              </p>
            </div>
          </div>
        </div>
      )
    },

    saude: {
      title: 'Hexápodes e Saúde Pública',
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-orange-900 mb-3">
              ⚠️ Importância na Saúde Pública
            </h3>
            <p className="text-orange-800">
              Embora a maioria dos insetos seja benéfica, algumas espécies podem transmitir doenças graves aos seres humanos.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
            <h4 className="font-bold text-red-900 text-lg mb-3">🦟 Aedes aegypti</h4>
            <div className="mb-4">
              <p className="text-sm text-red-800 font-semibold mb-2">Doenças transmitidas:</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Dengue</li>
                <li>• Zika</li>
                <li>• Chikungunya</li>
                <li>• Febre amarela urbana</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-red-800 font-semibold mb-2">Como prevenir?</p>
              <ul className="space-y-1 text-gray-700">
                <li>✔️ Eliminar água parada</li>
                <li>✔️ Manter caixas d'água fechadas</li>
                <li>✔️ Limpar recipientes que possam acumular água</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="text-blue-900">
              <strong>💡 Lembrete:</strong> A prevenção é sempre o melhor caminho. Manter ambientes limpos e sem água parada é a forma mais eficaz de evitar doenças transmitidas por esses insetos.
            </p>
          </div>
        </div>
      )
    },

    curiosidades: {
      title: 'Curiosidades Fascinantes',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-5 rounded-lg">
            <p className="text-gray-800 mb-2">
              <strong>🐜 Formigas super fortes:</strong> Algumas formigas conseguem carregar objetos várias vezes mais pesados que seu próprio corpo. Elas são verdadeiras atletas do reino animal!
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-5 rounded-lg">
            <p className="text-gray-800 mb-2">
              <strong>🦋 Asas especiais:</strong> As asas das borboletas são cobertas por milhares de escamas microscópicas que criam suas cores vibrantes e padrões únicos.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-600 p-5 rounded-lg">
            <p className="text-gray-800 mb-2">
              <strong>🐝 Visão especial:</strong> As abelhas conseguem perceber padrões ultravioleta invisíveis aos seres humanos, ajudando-as a localizar flores.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-5 rounded-lg">
            <p className="text-gray-800">
              <strong>📊 Diversidade extrema:</strong> Mais de um milhão de espécies de insetos já foram descritas pela ciência, e estima-se que ainda existam muitas espécies desconhecidas!
            </p>
          </div>
        </div>
      )
    },

    quiz: {
      title: 'Quiz Interativo',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            Teste seus conhecimentos sobre Hexápoda respondendo às questões abaixo:
          </p>

          <div className="space-y-6">
            {quizQuestions.map((q) => (
              <div key={q.id} className="bg-white border border-gray-300 p-5 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">{q.id}. {q.question}</h4>
                <div className="space-y-3">
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
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowResults(!showResults)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
          >
            {showResults ? 'Editar Respostas' : 'Ver Resultados'}
          </button>

          {showResults && (
            <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Seus Resultados:</h3>
              <div className="space-y-3">
                {quizQuestions.map((q) => {
                  const isCorrect = quizAnswers[q.id] === q.correct;
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded border-l-4 ${
                        isCorrect
                          ? 'bg-green-50 border-green-600'
                          : 'bg-red-50 border-red-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                        )}
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">{q.question}</p>
                          <p className={isCorrect ? 'text-green-800' : 'text-red-800'}>
                            Sua resposta: <strong>{quizAnswers[q.id] || 'Não respondido'}</strong>
                          </p>
                          {!isCorrect && (
                            <p className="text-green-800 mt-1">
                              Resposta correta: <strong>{q.correct}</strong>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-blue-900 font-semibold">
                  {Object.values(quizAnswers).filter((v, i) => v === quizQuestions[i].correct).length} de {quizQuestions.length} respostas corretas
                </p>
              </div>
            </div>
          )}
        </div>
      )
    }
  };

  const navigation = [
    { id: 'home', label: 'Início' },
    { id: 'anatomia', label: 'Anatomia' },
    { id: 'respiracao', label: 'Respiração' },
    { id: 'alimentacao', label: 'Alimentação' },
    { id: 'metamorfose', label: 'Metamorfose' },
    { id: 'ecologia', label: 'Ecologia' },
    { id: 'saude', label: 'Saúde Pública' },
    { id: 'curiosidades', label: 'Curiosidades' },
    { id: 'quiz', label: 'Quiz' }
  ];

  const currentContent = pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-green-700">🐛 Hexápoda</div>
            
            <div className="hidden md:flex gap-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setShowResults(false);
                  }}
                  className={`px-4 py-2 rounded transition font-medium ${
                    currentPage === item.id
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2 flex flex-col">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMenuOpen(false);
                    setShowResults(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded transition ${
                    currentPage === item.id
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-8">
            {currentContent.title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            {currentContent.content}
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600 text-sm pb-6">
          <p>
            <strong>Referências:</strong> Hickman, C. P. et al. Princípios Integrados de Zoologia (2016)
          </p>
          <p className="mt-2">
            Cartilha educativa sobre Hexápoda para Ensino Médio
          </p>
        </footer>
      </main>
    </div>
  );
}
