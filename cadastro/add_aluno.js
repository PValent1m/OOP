let alunos = [], turmas = [];

function NovaTurma(){
    let codigo = Math.floor(10000 + Math.random() * 90000);
    let professor = document.getElementById("professor").value;
    let turma = new Turma(codigo, professor, alunos);
    turma.ExibirTurma();
    turma.ExibirAlunosTurma();
    turmas.push(turma)
    alert("Turma registrada com sucesso!")
}
function ResetarAlunos(){
    alunos.length = 0;
}