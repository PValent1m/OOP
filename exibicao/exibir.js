function Executar(){
  let nome = document.getElementById("nome").value;
  let nota1 = Number(document.getElementById("n1").value);
  let nota2 = Number(document.getElementById("n2").value);
  let alunoConstr = new Aluno(nome, nota1, nota2);

  alunoConstr.CalcularMedia();
  alunoConstr.ExibirMedia();
  alunoConstr.ExibirSituacao();
}