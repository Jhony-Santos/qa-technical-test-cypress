# QA Technical Test - Cypress

![Cypress Tests](https://github.com/Jhony-Santos/qa-technical-test-cypress/actions/workflows/cypress.yml/badge.svg)

Projeto de automação E2E desenvolvido com Cypress para validação dos fluxos críticos do SauceDemo.

---

# Site escolhido

https://www.saucedemo.com/

O SauceDemo foi escolhido por possuir:

- Fluxo completo de e-commerce
- Login
- Carrinho
- Checkout
- Ambiente estável para automação
- Boa cobertura para testes E2E

---

# Fluxos automatizados

## Login

- Login com sucesso
- Login inválido

## Carrinho

- Adicionar produto ao carrinho
- Remover produto do carrinho

## Checkout

- Finalizar compra com sucesso
- Validação de campos obrigatórios

---

# Histórias do Usuário

## Login

Como usuário da plataforma  
Quero realizar login no sistema  
Para acessar os produtos disponíveis.

---

## Carrinho

Como usuário autenticado  
Quero adicionar produtos ao carrinho  
Para realizar minha compra.

---

## Checkout

Como usuário autenticado  
Quero finalizar o checkout  
Para concluir meu pedido com sucesso.

---

# Critérios de Aceite

## Login

- O sistema deve permitir login com usuário válido
- O sistema deve exibir erro para senha inválida
- O sistema deve impedir login com campos vazios

---

## Carrinho

- O usuário deve conseguir adicionar produtos ao carrinho
- O contador do carrinho deve ser atualizado
- O usuário deve conseguir remover produtos do carrinho

---

## Checkout

- O sistema deve exigir preenchimento dos campos obrigatórios
- O usuário deve conseguir finalizar o pedido
- O sistema deve exibir mensagem de sucesso ao concluir a compra

---

# Casos de Teste

## CT001 - Login com sucesso

### Pré-condição

Usuário válido cadastrado.

### Passos

1. Acessar página de login
2. Informar usuário válido
3. Informar senha válida
4. Clicar em Login

### Resultado esperado

Usuário autenticado com sucesso.

---

## CT002 - Login inválido

### Passos

1. Informar usuário válido
2. Informar senha inválida
3. Clicar em Login

### Resultado esperado

Sistema deve exibir mensagem de erro.

---

## CT003 - Adicionar produto ao carrinho

### Passos

1. Realizar login
2. Adicionar produto ao carrinho

### Resultado esperado

Produto deve ser adicionado corretamente.

---

## CT004 - Remover produto do carrinho

### Passos

1. Adicionar produto ao carrinho
2. Remover produto

### Resultado esperado

Produto removido corretamente.

---

## CT005 - Finalizar checkout com sucesso

### Passos

1. Adicionar produto ao carrinho
2. Acessar checkout
3. Preencher informações obrigatórias
4. Finalizar compra

### Resultado esperado

Pedido concluído com sucesso.

---

## CT006 - Validar campos obrigatórios no checkout

### Passos

1. Acessar checkout
2. Não preencher campos obrigatórios
3. Tentar continuar

### Resultado esperado

Sistema deve exibir mensagem de validação.

---

# Estimativa de Tempo

| Atividade | Tempo |
|---|---|
| Análise do cenário | 1h |
| Escrita dos cenários de teste | 2h |
| Estruturação do projeto | 1h |
| Desenvolvimento da automação | 4h |
| Configuração pipeline CI/CD | 1h |
| Revisão e validação | 1h |
| Total | 10h |

---

# Estratégia de Automação

Os cenários automatizados foram priorizados considerando:

- Fluxos críticos do negócio
- Jornada principal do usuário
- Maior impacto funcional
- Regressão mais frequente
- Estabilidade da automação

Os fluxos escolhidos cobrem o ciclo principal do e-commerce:

- autenticação
- seleção de produto
- carrinho
- checkout

---

# Estrutura do Projeto

```bash
cypress/
 ├── e2e/
 ├── fixtures/
 ├── pages/
 └── support/
```

---

# Padrões Utilizados

- Page Object Pattern
- Custom Commands
- Fixtures
- Reutilização de código
- Separação de responsabilidades

---

# Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- GitHub Actions

---

# Pipeline CI/CD

O projeto possui integração com GitHub Actions para execução automática dos testes a cada push e pull request.

---

# Como Executar o Projeto

## Instalar dependências

```bash
npm install
```

## Executar em modo visual

```bash
npx cypress open
```

## Executar em modo headless

```bash
npx cypress run
```

---

# Autor

Jhonatan Santos