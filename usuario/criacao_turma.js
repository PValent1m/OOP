
class Turma{
    constructor (codigo, professor){
        this.codigo = codigo;
        this.professor = professor;
    }
    ExibirTurma(){
        console.log(`professor: ${this.professor} || codigo: ${this.codigo}`);
    }
}