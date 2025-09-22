let alunos = [];
function AdicionarAluno(){
    let aluno = document.getElementById("alunos").value;
    alunos.push(aluno);
    console.log(alunos);
}
function NovaTurma(){
    let codigo = Math.floor(10000 + Math.random() * 90000);
    let professor = document.getElementById("professor").value;
    let turma = new Turma(codigo, professor);
    turma.ExibirTurma();
    for(let i=0;i<alunos.length;i++){
        console.log(alunos[i]);
    }
}
function ResetarAlunos(){
    alunos.length = 0;
}