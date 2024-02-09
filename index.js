// Função para criar um objeto de peça de roupa
function criarPeca() {
    const peca = {};
    peca.nome = prompt("Digite o nome da peça de roupa:").toLowerCase();
    peca.cor = prompt("Digite a cor da peça de roupa:").toLowerCase();
    peca.referencia = parseInt(prompt("Digite a referência da peça de roupa:"));
    return peca;
  }
  
  // Função para adicionar uma peça ao estoque
  function adicionarPeca(estoque) {
    const novaPeca = criarPeca();
    estoque.push(novaPeca);
    console.log("Peca adicionada ao estoque:", novaPeca);
  }
  
  // Função para remover uma peça do estoque com base na referência
  function removerPeca(estoque) {
    const referencia = parseInt(
      prompt("Digite a referência da peça que deseja remover:")
    );
  
    const index = estoque.findIndex((peca) => peca.referencia === referencia);
  
    if (index !== -1) {
      const [removida] = estoque.splice(index, 1);
      console.log("Peca removida do estoque:", removida);
    } else {
      console.log("Peca não encontrada no estoque.");
    }
  }
  
  // Função para exibir o estoque atual
  function exibirEstoque(estoque) {
    console.log("Estoque atual:", estoque);
  }
  
  // Função principal
  function gerenciarEstoque() {
    const estoque = [];
  
    while (true) {
      const opcao = prompt(
        "Escolha uma opção:\n1. Adicionar peça\n2. Remover peça\n3. Exibir estoque\n4. Sair"
      );
  
      switch (opcao) {
        case "1":
          adicionarPeca(estoque);
          break;
        case "2":
          removerPeca(estoque);
          break;
        case "3":
          exibirEstoque(estoque);
          break;
        case "4":
          return; // Sair do loop
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    }
  }
  
  // Executa a função principal para começar a interação
  gerenciarEstoque();
  