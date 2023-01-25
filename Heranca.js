//classe Ilton
class Ilton {

    //abstração atributos
    constructor(nome, idade, altura, cor) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.cor = cor;
    }

    Perfil() {
        console.log(`
        ------------------------------
        nome: ${this.nome}
        idade: ${this.idade}
        altura: ${this.altura}
        cor: ${this.cor}
        `);
    }

    LogIlton() {
        console.log("Log da classe: Ilton");
    }
}

//classe Alexandre herança classe Ilton
class Alexandre extends Ilton {

    constructor(nome, idade, altura, cor, sexo, profissao) {
        super(nome, idade, altura, cor);
        this.sexo = sexo;
        this.profissao = profissao;
    }

    Particilaridades() {
        console.log('Particularidades da classe Alexandre');
    }

    //rescrevendo o method da class Ilton
    Perfil() {
        console.log(`
        ------------------------------
        nome: ${this.nome}
        idade: ${this.idade}
        altura: ${this.altura}
        cor: ${this.cor}
        sexo: ${this.sexo}
        profissão: ${this.profissao}
        ------------------------------
        `);
    }

    //
    LogIlton() {
        console.log("Log da classe: Alexandre");
        //classe ilton
        super.LogIlton();
        console.log("Log da classe: Alexandre.....");
    }

}

//herança em múltiplos níveis
//classe Breno herança de Alexandre que é herança da classe Ilton
class Breno extends Alexandre {

    Particilaridades() {
        console.log("Log da classe: Breno");
    }    
    
}

var filho = new Alexandre("Alexandre Cysne", 45, "1,76", "branca", "Masculino", "Analista de Sistemas");
filho.Perfil();
filho.Particilaridades();
filho.LogIlton();
console.log(`profissão: ${filho.profissao}`);

