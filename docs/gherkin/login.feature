Feature: Login

  Scenario: Login com sucesso
    Given que o usuário acessa a página de login
    When informa credenciais válidas
    And clica no botão de login
    Then deve ser redirecionado para a página de produtos

  Scenario: Login com senha inválida
    Given que o usuário acessa a página de login
    When informa usuário válido
    And informa senha inválida
    And clica no botão de login
    Then deve visualizar uma mensagem de erro