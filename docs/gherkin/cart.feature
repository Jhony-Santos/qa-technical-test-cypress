Feature: Cart

  Scenario: Adicionar produto ao carrinho
    Given que o usuário está autenticado
    When adiciona um produto ao carrinho
    Then o produto deve ser exibido no carrinho

  Scenario: Remover produto do carrinho
    Given que o usuário possui um produto no carrinho
    When remove o produto
    Then o carrinho deve ficar vazio