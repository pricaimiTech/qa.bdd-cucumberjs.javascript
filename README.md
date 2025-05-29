# QA BDD Cucumber.js JavaScript

Este projeto demonstra a implementação de Behavior-Driven Development (BDD) utilizando Cucumber.js em JavaScript para validação de idade para consumo de bebida alcoólica. O objetivo é mostrar como aplicar BDD de forma correta, criando uma ponte entre requisitos de negócio e implementação técnica.

## Referência do desafio 
[repositório qa.desafio-tecnico-teorico.javascript](https://github.com/qajonatasmartins/qa.desafio-tecnico-teorico.javascript)


## Desafio 

> Com base no vídeo BDD não é automação de teste de uma das grandes referências da nossa área de qualidade 'Elias Nogueira', explique com suas palavras o que é o BDD e como aplica-ló da maneira correta no ciclo de desenvolvimento de software?

BDD é uma metodologia que estende o TDD (Test-Driven Development), focada na colaboração entre os membros do time (desenvolvedores, testadores e stakeholders de negócio), visando utilizar uma linguagem padrão de escrita (Gherkin) para evitar ambiguidades na documentação, sendo que a mesma serve como documentação executável através da automação de testes, além de promover interação ativa e constante entre os membros do time para discovery e entendimento dos requisitos. 


### 🎯 Requisitos Funcionais

O Product Owner solicitou a implementação de uma nova regra no sistema para validar se uma pessoa é menor de idade ou não, a fim de determinar se ela pode consumir bebida alcoólica.

Com isso, foram definidos os seguintes requisitos funcionais:

- **RF001**: Pessoas maiores de 17 anos podem consumir bebida alcoólica.
- **RF002**: Pessoas menores de 17 anos não podem consumir bebida alcoólica.

### 🧪 Técnica de Teste Utilizada

#### Partição de Equivalência + Análise de Valor Limite

**Por que esta técnica?**

1. **Partição de Equivalência**: Dividimos os dados de entrada em classes equivalentes baseados na idade de corte se pode ou não consumir álcool
   - Classe 1: Idades = 17 (não consumir álcool)
   - Classe 2: Idades > 17 (pode consumir álcool) 
   - Classe 3: Idades < 17 (não pode consumir álcool)

2. **Análise de Valor Limite**: Testamos os valores nos limites das partições apartir da idade de corte de 17 anos.
    - 16 anos (abaixo da idade permitida)
    - 17 anos (abaixo da idade permitida)
    - 18 anos (acima da idade permitida)

Esta abordagem garante cobertura eficiente com o mínimo de casos de teste necessários.

#### Funcionalidades Testadas

```
  Esquema do Cenário: Verificar liberação do consumo de bebida alcoólica
    Dado que possuo <idade> anos de idade
    Quando verifico se ela pode consumir bebida alcoólica
    Então o sistema '<resultado>' o consumo de bebida alcoólica

    Exemplos:
      | idade | resultado   |
      |    16 | não permite |
      |    17 | não permite |
      |    18 | permite     |
      |    19 | permite     |
```


### 🚀 Configuração e Execução

#### Pré-requisitos
- Node.js 22+ 
- npm ou yarn

#### Arquitetura de Testes
- **Assertions**: Chai
- **Padrão**: BDD (Behavior-Driven Development)
- **Cobertura**: Todas as partições de equivalência


#### Estrutura do Projeto 
```bash
qa.bdd-cucumberjs.javascript/
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 ci.yml
├── 📁 features/
│   ├── 📄 pessoa.feature
│   └── 📁 step_definitions/
│       └── 📄 pessoa_steps.js
├── 📁 src/
│   └── 📄 Pessoa.js
├── 📁 support/
│   └── 📄 world.js
├── 📁 reports/
├── 📄 package.json
├── 📄 cucumber.js
└── 📄 README.md
```

#### Instalação
```bash
# Clone o repositório
https://github.com/pricaimiTech/qa.bdd-cucumberjs.javascript
cd qa.bdd-cucumberjs.javascript

# Instale as dependências
npm install
```

#### Execução dos testes

Executar todos os testes BDD
```bash
npm test
``` 

