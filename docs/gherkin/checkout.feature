Feature: Checkout

  Scenario: Finalizar compra com sucesso
    Given que o usuário possui produto no carrinho
    When preenche os dados obrigatórios
    And finaliza a compra
    Then o pedido deve ser concluído com sucesso

  Scenario: Validar campos obrigatórios
    Given que o usuário acessa o checkout
    When tenta continuar sem preencher os campos
    Then o sistema deve exibir mensagem de validação