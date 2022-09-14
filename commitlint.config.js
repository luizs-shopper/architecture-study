module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [
            1,
            'always',
            [
                'sentence-case',
                'lower-case',
                'start-case',
                'pascal-case',
                'upper-case',
            ],
        ],
    },
    prompt: {
        settings: {},
        messages: {
            skip: ':skip',
            max: 'até %d caracteres',
            min: 'pelo menos %d caracteres',
            emptyWarning: 'não pode ficar vazio',
            upperLimitWarning: 'acima do limite',
            lowerLimitWarning: 'abaixo do limite',
        },
        questions: {
            type: {
                description: 'Qual tipo de alteração foi feita:',
                enum: {
                    feat: {
                        description: 'Uma nova feature',
                        title: 'Features',
                        emoji: '✨',
                    },
                    fix: {
                        description: 'Uma correção de bug',
                        title: 'Bug Fixes',
                        emoji: '🐛',
                    },
                    docs: {
                        description: 'Inclusão ou atualização de documentação',
                        title: 'Documentação',
                        emoji: '📚',
                    },
                    style: {
                        description:
                            'Alterações de estilo do código (formatação, espaçamento etc.)',
                        title: 'Estilos',
                        emoji: '💎',
                    },
                    refactor: {
                        description:
                            'Uma alteração de código que nem corrige um bug e nem adiciona uma feature',
                        title: 'Refatoração de Código',
                        emoji: '📦',
                    },
                    perf: {
                        description:
                            'Uma alteração de código que melhora a performance',
                        title: 'Melhoria de Performance',
                        emoji: '🚀',
                    },
                    test: {
                        description: 'Adiciona ou atualiza testes',
                        title: 'Testes',
                        emoji: '🚨',
                    },
                    build: {
                        description:
                            'Alterações que afetam o build do projeto ou ferramentas externas',
                        title: 'Builds',
                        emoji: '🛠',
                    },
                    ci: {
                        description:
                            'Alterações nos arquivos de configuração de CI/CD',
                        title: 'CI/CD',
                        emoji: '⚙️',
                    },
                    chore: {
                        description:
                            'Outras alterações que não afetam códigos do projeto ou testes',
                        title: 'Outros',
                        emoji: '♻️',
                    },
                    revert: {
                        description: 'Reverte para um commit anterior',
                        title: 'Reverção',
                        emoji: '🗑',
                    },
                },
            },
            scope: {
                description:
                    'Qual o escopo desta alteração (ex.: arquivo ou componente)',
            },
            subject: {
                description:
                    'Escreva uma breve descrição da alteração usando a terceira pessoa do imperativo afirmativo (ex.: Muda a variável X para Y)',
            },
            body: {
                description:
                    'Descreva a motivação da alteração e compare com o comportamento anterior se necessário',
            },
            isBreaking: {
                description:
                    'Alguma alteração não é compatível com versões anteriores (BREAKING CHANGE)?',
            },
            breakingBody: {
                description:
                    'Um commit com BREAKING CHANGE precisa de um corpo. Por favor, descreva a motivação da alteração e compare com o comportamento anterior se necessário',
            },
            breaking: {
                description:
                    'Descreva as alterações que quebram a compatibilidade',
            },
        },
    },
}
