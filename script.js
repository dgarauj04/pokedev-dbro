const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);

listaSelecaoPokedevs.forEach(pokedev => {
	pokedev.addEventListener("click", () => {
    //3
		esconderCartaoPokedev();

    //4
		const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);
   
    //5
    desativarPokedevNaListagem();
    
    //6
ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    
	})
});

//6
function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
	const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
	pokedevSelecionadoNaListagem.classList.add("ativo");
};

//5
function desativarPokedevNaListagem() {
	const pokedevAtivoNaListagem = document.querySelector(".ativo");
	pokedevAtivoNaListagem.classList.remove("ativo");
};

//4
function mostrarCartaoPokedevSelecionado(pokedev) {
	const idPokedevSelecionado = pokedev.attributes.id.value;
	const idDoCartaoPokedevParaAbrir = "cartao_" + idPokedevSelecionado;
	const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
	cartaoPokedevParaAbrir.classList.add("aberto");
	return idPokedevSelecionado;
};

//3
function esconderCartaoPokedev() {
	const cartaoPokedevAberto = document.querySelector(".aberto");
	cartaoPokedevAberto.classList.remove("aberto");
};
