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
        turmas[turmas.length - 1].codigo = novo_codigo;
        ListarDados();
        alert("Código alterado com sucesso!");
    }
}

function ExibirMediasSituacoes() {
    
    if (typeof resultadofinal === "undefined" || resultadofinal.length === 0) {
        document.getElementById("outputdados").innerHTML = "Nenhum resultado disponível.";
        return;
    }
    let output = resultadofinal.map(s => s.replace(/\n/g, "")).join("<br>");
    document.getElementById("outputdados").innerHTML = output;
}