function pesquisar() {
    let section = window.document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa);

    //se o campoPesquisa for uma string sem nada

    if (campoPesquisa == "" ) {
        section.innerHTML = `Nenhum atlteta foi encontrado ou sua busca está vazia`
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";

for(let dado of dados){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
   //Se o titulo includes campoPesquisa então, faça...
   if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
    // cria um novo elemento
    resultados += `
    <div class="item-resultado">
                    <h2>
                        <a href="#">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                         <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            </div>
    `
   }
};

if(!resultados) {
   resultados  = `<p>nada foi encontrado</p>` 
   
}
section.innerHTML = resultados
};



