function ListarDados(){
    let output = "";
    for(let i=0; i<turmas.length; i++){
        output += turmas[i].ExibirTurma() + "<br>";
        output += turmas[i].ExibirAlunosTurma() + "<br><br>";
    }
    document.getElementById("outputdados").innerHTML = output;
}
function AlterarCodigoTurma() {
    let novo_codigo = document.getElementById("novocodigo").value;
    if (turmas.length > 0 && novo_codigo) {
        turmas[turmas.length].codigo = novo_codigo;
        ListarDados();
        alert("Código alterado com sucesso!");
    }
}