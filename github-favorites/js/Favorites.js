// Classe que representa uma lista de favoritos
export class Favorites { 

  // Construtor recebe um seletor CSS chamado 'root'
  constructor(root) { 
    // Atribui ao 'root' o elemento no DOM correspondente ao seletor passado
    this.root = document.querySelector(root);
  }
}

// Classe que estende a funcionalidade de Favorites
// Trata da visualizaentos reção e evlacionados aos favoritos
// A palavra-chave 'extends' é usada para herdar a funcionalidade da próxima classe
export class FavoritesView extends Favorites { 

  // Construtor recebe um seletor CSS chamado 'root'
  constructor(root) { 
    // Chama o construtor da classe pai (Favorites) com o 'root' fornecido
    super(root);
    
    // Exibe no console o elemento associado ao 'root' da classe FavoritesView
    console.log(this.root);
  }
}
