class Turma {
    constructor (codigo, professor, alunosTurma){
        this.codigo = codigo;
        this.professor = professor;
        this.alunosTurma = [...alunosTurma];
    }
    ExibirTurma(){
        console.log(`| Professor: ${this.professor} || Código: ${this.codigo} |`)
        return `| Professor: ${this.professor} || Código: ${this.codigo} |`;
    }
    ExibirAlunosTurma(){
        return `Alunos: ${this.alunosTurma.join(", ")} `;
    }
}