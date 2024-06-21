//Descrição de todas as matérias. Com seu nome, nome em lowercase,
//índex de início das respostas, índex de final das respostas (undefined para ir até o final).
const subjects3a = {

    'linguaPortuguesa': [8, undefined],
    'ingles': [8, undefined],
    'artes': [8, undefined],
    'biologia': [8, undefined],
    'edFisica': [7, undefined],
    'espanhol': [7, undefined],
    'filosofia': [7, undefined],
    'fisica': [8, undefined],
    'geografia': [7, undefined],
    'historia': [7, undefined],
    'literatura': [8, undefined],
    'matematica': [7, undefined],
    'quimica': [8, undefined],
    'sociologia': [8, undefined],
    'ti': [8, undefined]

}

const subjects3b = {

    'linguaPortuguesa': [8, undefined],
    'ingles': [2, 17],
    'artes': [2, 17],
    'biologia': [8, undefined],
    'edFisica': [2, undefined],
    'espanhol': [7, undefined],
    'filosofia': [7, undefined],
    'fisica': [8, undefined],
    'geografia': [7, undefined],
    'historia': [2, 17],
    'literatura': [8, undefined],
    'matematica': [7, undefined],
    'quimica': [2, 17],
    'sociologia': [8, undefined],
    'ti': [2, 17]

}

const subjectsTADS = {

    'artes': [8, undefined],
    'biologia': [2, 17],
    'edFisica': [7, undefined],
    'espanhol': [7, undefined],
    'filosofia': [8, undefined],
    'fisica': [7, undefined],
    'geografia': [7, undefined],
    'historia': [7, 22],
    'ingles': [8, undefined],
    'linguaPortuguesa': [8, undefined],
    'literatura': [8, undefined],
    'matematica': [7, undefined],
    'quimica': [8, undefined],
    'sociologia': [8, undefined],
    'ti': [8, undefined]

}

// Definição dos tópicos que serão exibidos nos gráficos.
const topics = {

    'artes': [
        'A. Contemporânea',
        'Vanguard. Artísticas',
        'Modernismo',
        'História da Arte',
        'A. Africana'
    ],
    'biologia': [
        'Celular e Molecular',
        'Ecologia',
        'Genética',
        'Anatomia',
        'Química Ambiental'
    ],
    'edFisica': [
        'Jogos e Brincadeiras',
        'Função Social',
        'E.F Inclusiva',
        'Saúde',
        'Esportes'
    ],
    'espanhol': [
        'Interpretação',
        'Gramática e Uso',
        'Conjunções e Conectivos',
        'Advérbios',
        'Verbos Básicos'
    ],
    'filosofia': [
        'F. Antiga',
        'F. Moderna',
        'F. Política',
        'Lógica e conhecimento',
        'Estética'
    ],
    'fisica': [
        'Eletrostática',
        'Termologia',
        'Ondulatória',
        'Cinemática',
        'Óptica'
    ],
    'geografia': [
        'G. Física',
        'G. Humana',
        'Geopolítica',
        'G. do Brasil',
        'G. Ambiental'
    ],
    'historia': [
        'H. do Brasil',
        'H. Geral',
        'H. Contemporânea',
        'H. da América',
        'Arte Africana no Brasil'
    ],
    'ingles': [
        'Interpretação',
        'Gramatica',
        'Tempos Verbais',
        'Voz Passiva',
        'Conectivos e Adjun.'
    ],
    'linguaPortuguesa': [
        'Compreenção de Texto',
        'Gramática',
        'Semântica',
        'Escrita',
        'Interpretação'
    ],
    'literatura': [
        'Escolas Literárias',
        'Interpretação',
        'Linguagem Figurada',
        'Funções de Linguagem',
        'Gêneros Literários'
    ],
    'matematica': [
        'Álgebra',
        'Geometria',
        'Funções e Gráficos',
        'Estatística e Prob.',
        'M. Financeira'
    ],
    'quimica': [
        'Q. Geral e Inorgânica',
        'Q. Orgânica',
        'Fisico-Química',
        'Q. Analítica',
        'Q. Ambiental'
    ],
    'sociologia': [
        'Fundamentos',
        'Estruturas Sociais',
        'Mudança Social',
        'Cultura e Identidade',
        'S. Contemporânea'
    ],
    'ti': [
        'Ética',
        'Influências da TI',
        'Internet e Consumo',
        'Impactos socioculturais',
        'Acesso às Tec.'
    ]

}

export { subjects3a, subjects3b, subjectsTADS,topics }