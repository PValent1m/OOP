let alunos = [];
function AdicionarAluno(){
    let aluno = document.getElementById("alunos").value;
    alunos.push(aluno);
    console.log(alunos);
}
function ResetarAlunos(){
    alunos.length = 0;
}