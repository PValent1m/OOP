function calcularMedia() {
  var media, nota1, nota2;
  var nome = document.getElementById("nome").value;
  var matricula = document.getElementById("matricula").value
  nota1 = Number(document.getElementById("n1").value);
  nota2 = Number(document.getElementById("n2").value);
  media = (nota1 + nota2) / 2;
  let situacao = estado(media);
  document.getElementById("resultado").innerHTML = "Nome: " + nome + "<br>Matricula: " + matricula + "<br>Media: " + media + "<br> Situação: " + situacao + "";

}
function estado(media) {
  if (media >= 6) {
    return "Aprovado";
  }
  if (media >= 3 && media < 6) {
    return "Recuperação";
  }
  if (media < 3) {
    return "Reprovado";
  }
}
