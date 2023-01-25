//componentes
class Reproduzir {
    Reproduzindo(titulo) {
        console.log(`Reproduzindo... ${titulo}`);
    }
}

//componentes
class Pausar {
    Parando(titulo) {
        console.log(`Parando... ${titulo}`);
    }
}

//componentes
class Avancar {
    Avancar(titulo) {
        console.log(`Avançar... ${titulo}`);
    }
}

//componentes
class Fechar {
    Fechar(titulo) {
        console.log(`Fechar... ${titulo}`);
    }
}

//componentes
class Ficha {
    Ficha(titulo, ano) {
        console.log(`Fechar... ${titulo}`);
        console.log(`ano... ${ano}`);
    }
}

//classe Filme
class Filme {
    //abstração atributos
    constructor(titulo, ano, genero, diretor, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
        //composição
        this.reproduzir = new Reproduzir();
    }
}

//class Temporada
class Temporada {
    //abstração atributos
    constructor(titulo, ano, genero, diretor, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        //composição
        this.reproduzir = new Reproduzir();
    }
}


//exemplo 1
//instância objeto logan passando parâmetros para o construtor
var logan = new Filme('Logan', '03 de março de 2017', 'Ação', 'James Mangold', '1:45h');

//logan
console.log(`Título do filme: ${logan.titulo}`);
console.log(`Ano de lançamento: ${logan.ano}`);

//composição
logan.reproduzir.Reproduzindo("Logan");


//exemplo 2
//instância objeto temporada passando parâmetros para o construtor
var temporada = new Filme('wolverine', '25 de janeiro de 2023', 'Ação', 'Alexandre Cysne Esteves', '10h');

//temporada
console.log(`Título do filme: ${temporada.titulo}`);
console.log(`Ano de lançamento: ${temporada.ano}`);

//composição
temporada.reproduzir.Reproduzindo("wolverine");