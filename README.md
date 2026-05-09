# QA Technical Test - Cypress

Projeto de automação E2E desenvolvido com Cypress para validação dos fluxos críticos do SauceDemo.

---

# Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- GitHub Actions

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

# Estrutura do projeto

```bash
cypress/
 ├── e2e/
 ├── fixtures/
 ├── pages/
 └── support/
```

---

# Padrões utilizados

- Page Object Pattern
- Custom Commands
- Fixtures
- Reutilização de código
- Separação de responsabilidades

---

# Pipeline CI/CD

O projeto possui integração com GitHub Actions para execução automática dos testes.

---

# Como executar o projeto

## Instalar dependências

```bash
npm install
```

## Executar Cypress em modo visual

```bash
npx cypress open
```

## Executar Cypress em modo headless

```bash
npx cypress run
```

---

# Cenários priorizados

Os cenários automatizados foram definidos considerando:

- Fluxos críticos do negócio
- Maior impacto ao usuário
- Cobertura de regressão
- Estabilidade da automação

---

# Autor

Jhonatan Santos