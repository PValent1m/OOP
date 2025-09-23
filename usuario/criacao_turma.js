class Turma {
    constructor (codigo, professor, alunosTurma){
        this.codigo = codigo;
        this.professor = professor;
        this.alunosTurma = [...alunosTurma];
    }
    ExibirTurma(){
        return `professor: ${this.professor} || codigo: ${this.codigo}`;
    }
    ExibirAlunosTurma(){
        return `Alunos: ${this.alunosTurma.join(", ")}`;
    }
}