function inserir(){
    const nome = document.getElementById("id_nome").value;
    const nota1Tri = Number(document.getElementById("id_1tri").value);
    const nota2Tri = Number(document.getElementById("id_2tri").value);
    const nota3Tri = Number(document.getElementById("id_3tri").value);

    let sit;
    var media = (nota1Tri + nota2Tri + nota3Tri) / 3;
    
    if (media >= 6){sit = "Aprovado"}else{sit = "Reprovado"};

    document.getElementById("id_nome_inserido").innerHTML = "nome: "+nome;
    document.getElementById("id_1tri_inserido").innerHTML = "nota1: "+nota1Tri;
    document.getElementById("id_2tri_inserido").innerHTML = "nota2: "+nota2Tri;
    document.getElementById("id_3tri_inserido").innerHTML = "nota3: "+nota3Tri;
    document.getElementById("id_media").innerHTML = "media: "+media;
    document.getElementById("id_situacao").innerHTML = "situacao: "+sit;
}