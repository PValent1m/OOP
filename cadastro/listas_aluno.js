var alunosAprov = [], alunosReprov= [], alunosRecuper = [], matriculas = [], resultadofinal = [];
function ListarAlunos(){
    let nome = document.getElementById("nome").value;
    alunos.push(nome);
    let matricula = document.getElementById("matricula").value;
    matriculas.push(matricula);
    let nota1 = Number(document.getElementById("n1").value);
    let nota2 = Number(document.getElementById("n2").value);
    let alunoConstr = new Aluno(nome, nota1, nota2)
    let situacaoAluno = alunoConstr.DefinirSituacao(alunoConstr.CalcularMedia());
    if(situacaoAluno === "aprovado"){
        alunosAprov.push(nome);
    }
    else if (situacaoAluno === "recuperação"){
        alunosRecuper.push(nome);
    }
    else if (situacaoAluno === "reprovado"){
        alunosReprov.push(nome)
    }
    console.log(alunos);
    console.log(matriculas);
    console.log(alunosAprov);
    console.log(alunosRecuper);
    console.log(alunosReprov);
}