class Aluno{
  constructor(nome, nota1, nota2){
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }
  CalcularMedia(){
    let media = (this.nota1+this.nota2)/2;
    return media;
  }
  exibir(){
    let media = this.CalcularMedia();
    let resultado = "Nome: "+ this.nome +"<br>Média: " + media;
    document.getElementById("resultado").innerHTML = resultado;
  }
}
function Executar(){
  let nome = document.getElementById("nome").value;
  let nota1 = Number(document.getElementById("n1").value);
  let nota2 = Number(document.getElementById("n2").value);
  let aluno = new Aluno(nome, nota1, nota2);
  aluno.CalcularMedia();
  aluno.exibir();
}