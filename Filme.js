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
    }

    //method Reproduzir
    Reproduzir() {
        console.log(`Reproduzindo... ${this.titulo}`);
    }

    //method Pausar
    Pausar() {
        console.log(`Pausando || ${this.titulo}`);
    }

    //method Avançar
    Avancar() {
        console.log(`Avançar >> ${this.titulo}`);
    }

    //method Fechar
    Fechar() {
        console.log(`Fechar X ${this.titulo}`);
    }

    //method Ficha
    Ficha() {
        console.log(`Título do filme: ${this.titulo}`);
        console.log(`Ano de lançamento: ${this.ano}`);
        this.Reproduzir();
    }

    static Consultar(titulo,ano) {
        console.log(`Título do filme: ${titulo}`);
        console.log(`Ano de lançamento: ${ano}`);
    }

}

//exemplo 1
//instância objeto wolverine sem parâmetros
var wolverine2013 = new Filme();

//definindo atributos wolverine
wolverine2013.titulo = 'Wolverine Imortal';
wolverine2013.ano = '26 de julho de 2013';

wolverine2013.Reproduzir();

//wolverine
console.log(`Título do filme: ${wolverine2013.titulo}`);
console.log(`Ano de lançamento: ${wolverine2013.ano}`);



//exemplo 2
//instância objeto logan passando parâmetros para o construtor
var logan = new Filme('Logan', '03 de março de 2017', 'Ação', 'James Mangold', '1:45h');

//logan
console.log(`Título do filme: ${logan.titulo}`);
console.log(`Ano de lançamento: ${logan.ano}`);

logan.Reproduzir();



//exemplo 3
//instância objeto Fênix Negra passando parâmetros para o construtor
var FenixNegra = new Filme('X-Men Fênix Negra', '07 de junho de 2019', 'Ação', 'Simon Kinberg', '1:35h');
FenixNegra.Ficha();



//exemplo 4 method static
//Chamando method static, que não existe a necessidade de instanciar a classe
Filme.Consultar('X-Men Origins: Wolverine','01 de maio de 2009')
