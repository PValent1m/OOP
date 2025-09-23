class Aluno{
    constructor(nome, nota1, nota2){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    CalcularMedia(){
        let media = (this.nota1 + this.nota2)/2;
        return media;
    }
    DefinirSituacao(media){
        if(media>=6){
            return "aprovado";
        }
        else if(media>=3 && media<6){
            return "recuperação";
        }
        else{
            return "reprovado";
        }
    }
    ExibirMedia(){
        let media = this.CalcularMedia();
        let ResultadoMedia = `Aluno: ${this.nome} || Média: ${media}`;
        document.getElementById("ResultadoMedia").innerHTML = ResultadoMedia;
    }
    ResultadoFinal(){
        let media = this.CalcularMedia();
        let situacao = this.DefinirSituacao(media);
        let resultado_final = `| Aluno: ${this.nome} || Média: ${media} || Situação: ${situacao} |\n`
        resultadofinal.push(resultado_final);
    }
}