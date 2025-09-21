function NovaTurma(){
    let codigo = document.getElementById("codigo").value;
    let professor = document.getElementById("professor").value;
    let turma = new Turma(codigo, professor);
    turma.ExibirTurma();
}