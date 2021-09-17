var listaFilmes = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (
    filmeFavorito.endsWith(".jpg") ||
    filmeFavorito.endsWith(".png") ||
    filmeFavorito.endsWith(".JPG") ||
    filmeFavorito.endsWith(".PNG")
  ) {
    listarFilmes(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido.");
  }
  document.getElementById("filme").value = "";
}

function listarFilmes(filmeFavorito) {
  if (listaFilmes.includes(filmeFavorito)) {
    console.error("Filme duplicado");
  } else {
    listaFilmes.push(filmeFavorito);
    refresh();
  }
}

function removerFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var listaAux = [];
  for (var i = 0; i < listaFilmes.length; i++) {
    if (listaFilmes[i] == filmeFavorito) {
      continue;
    }
    listaAux.push(listaFilmes[i]);
  }
  listaFilmes = listaAux;
  refresh();
  document.getElementById("filme").value = "";
}

function refresh() {
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = "";
  for (var i = 0; i < listaFilmes.length; i++) {
    var elementoFilmeFavorito = "<img src=" + listaFilmes[i] + ">";
    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
  }
}
